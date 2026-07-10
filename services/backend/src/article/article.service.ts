import { Injectable, Logger, NotFoundException } from "@nestjs/common";
import { Prisma } from "../generated/prisma/client";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class ArticleService {
	logger = new Logger();

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

	async toggleFavorite(id: string, isFavorite: boolean) {
		try {
			return await prisma.article.update({ where: { id }, data: { isFavorite } });
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
				throw new NotFoundException(`Unknow article : ${id}`);
			}
			throw error;
		}
	}

	async toggleRead(id: string, isRead: boolean) {
		try {
			return await prisma.article.update({ where: { id }, data: { isRead } });
		} catch (error) {
			if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2025") {
				throw new NotFoundException(`Unknow article : ${id}`);
			}
			throw error;
		}
	}
}
