import { Injectable } from "@nestjs/common";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class ArticleService {
	async browseArticle() {
		return await prisma.article.findMany({
			where: { isRead: false },
			orderBy: { publishDate: "desc" },
		});
	}
}
