import { Injectable } from "@nestjs/common";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class ArticleService {
	async browseArticle() {
		return await prisma.article.findMany({
			where: { isRead: false },
			include: {
				feed: {
					select: {
						title: true,
					},
				},
			},
			orderBy: { publishDate: "desc" },
		});
	}
}
