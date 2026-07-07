import { Controller, Get, Query } from "@nestjs/common";
import { ArticleService } from "./article.service";

@Controller("article")
export class ArticleController {
	constructor(private readonly articleService: ArticleService) {}

	@Get("")
	async browseArticle(@Query("page") page?: string, @Query("limit") limit?: string) {
		const article = await this.articleService.browseArticle(Number(page), Number(limit) || 20);
		return article;
	}

	@Get("count")
	async count() {
		const total = await this.articleService.countArticle();
		return total;
	}
}
