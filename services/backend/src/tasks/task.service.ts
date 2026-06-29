import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";
import Parser from "rss-parser";
import { ArticleCreateManyInput } from "../generated/prisma/models";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class TaskService {
	logger = new Logger(TaskService.name);
	parser = new Parser({
		headers: {
			"User-Agent": "feed-app veille by u/Dasteagle",
		},
		timeout: 10_000,
	});

	/**
	 * Récupère les feeds puis les articles associés aux feeds
	 * Retourne un objet ArticleCreateManyInput[] permettant la création des données
	 */

	/**
	 * TODO : Créer une fonction qui retourne soit le guid soit l'id de l'article, sinon le lien
	 */

	@Cron("*/5 * * * *")
	async getArticle() {
		try {
			const data = await this.prepareData();
			const log = await prisma.article.createMany({
				data,
				skipDuplicates: true,
			});
			this.logger.log(`${log.count} nouvelle(s) entrée(s) dans la base`);
		} catch (error) {
			this.logger.error(error);
		}
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
					guid: item.guid ? item.guid : item.id,
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
