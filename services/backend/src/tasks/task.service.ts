import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import Parser from "rss-parser";
import { ArticleCreateManyInput } from "../generated/prisma/models";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class TaskService {
	logger = new Logger(TaskService.name);
	parser = new Parser();

	/**
	 * Récupère les feeds puis les articles associés aux feeds
	 * Retourne un objet ArticleCreateManyInput[] permettant la création des données
	 * TODO : Trouver une solution aux rate limiting imposé par certain sites, en particulier Reddit. Le fetch sur différents subreddit génère une erreur 429 bloquante, trouver une solution de coutournement
	 */

	@Cron("*/5 * * * *")
	async getArticle() {
		const data = await this.prepareData();
		const log = await prisma.article.createMany({
			data,
			skipDuplicates: true,
		});
		this.logger.log(`${log.count} nouvelle(s) entrée(s) dans la base`);
	}

	private async getAllFeeds() {
		return await prisma.feed.findMany({
			select: {
				id: true,
				link: true,
			},
		});
	}

	private async prepareData() {
		const newArticles: ArticleCreateManyInput[] = [];
		const feedsList = await this.getAllFeeds();

		const parsedFeeds = await Promise.all(
			feedsList.map(async (feed) => ({
				feedId: feed.id,
				data: await this.parser.parseURL(feed.link),
			})),
		);

		parsedFeeds.forEach((feed) => {
			feed.data.items.forEach((item) => {
				const article = {
					guid: item.guid ? item.guid : "",
					createdAt: new Date(),
					description: item.summary ? item.summary : "Aucune description",
					feedId: feed.feedId,
					isRead: false,
					link: item.link ? item.link : "",
					publishDate: item.isoDate ? item.isoDate : new Date(),
					title: item.title ? item.title : "Sans titre",
				};
				newArticles.push(article);
			});
		});

		return newArticles;
	}
}
