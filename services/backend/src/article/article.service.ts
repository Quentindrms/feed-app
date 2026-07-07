import { Injectable } from "@nestjs/common";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class ArticleService {
	async browseArticle(page = 1, limit = 20) {
		return await prisma.article.findMany({
			where: { isRead: false },
			include: { feed: { select: { title: true } } },
			orderBy: { publishDate: "desc" },
			skip: (page - 1) * limit,
			take: limit,
		});
	}

	async countArticle() {
		return await prisma.article.count();
	}
}
