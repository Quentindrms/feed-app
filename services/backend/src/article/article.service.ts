import {
	Injectable,
	InternalServerErrorException,
	Logger,
	NotFoundException,
} from "@nestjs/common";
import { PrismaClientValidationError } from "@prisma/client/runtime/client";
import { Prisma } from "../generated/prisma/client";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class ArticleService {
	logger = new Logger();

	async browseArticle(page = 1, limit = 20) {
		try {
			return await prisma.article.findMany({
				where: { isRead: false },
				include: { feed: { select: { title: true } } },
				orderBy: { publishDate: "desc" },
				skip: (page - 1) * limit,
				take: limit,
			});
		} catch (error) {
			if (error instanceof PrismaClientValidationError) {
				throw new InternalServerErrorException(error.message);
			}
		}
	}

	async countArticle() {
		return await prisma.article.count();
	}

	async browseFavorite(page = 1, limit = 20) {
		try {
			return await prisma.article.findMany({
				where: { isFavorite: true },
				include: {
					feed: { select: { title: true } },
				},
				orderBy: { publishDate: "desc" },
				skip: (page - 1) * limit,
				take: limit,
			});
		} catch (error) {
			if (error instanceof Prisma.PrismaClientValidationError) {
				throw new InternalServerErrorException(error.message);
			}
		}
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
