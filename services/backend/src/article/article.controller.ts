import { Body, Controller, Get, Param, Patch, Query, UsePipes } from "@nestjs/common";
import { ToggleFavoriteDto, ToggleIsReadDto } from "../dto/articleDto";
import { validationPipe } from "../pipes/validationPipe";
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

	@Get("favorite")
	async browseFavorite(@Query("page") page?: string, @Query("limit") limit?: string) {
		return await this.articleService.browseFavorite(Number(page), Number(limit));
	}

	@Get("favorite/count")
	async countFavorite() {
		return await this.articleService.countFavorite();
	}

	@Patch("favorite/:id")
	@UsePipes(validationPipe)
	async toggleFavorite(@Param("id") articleId: string, @Body() body: ToggleFavoriteDto) {
		const isFavorite = await this.articleService.toggleFavorite(articleId, body.isFavorite);
		return isFavorite;
	}

	@Patch("read/:id")
	async toggleRead(@Param("id") articleId: string, @Body() body: ToggleIsReadDto) {
		return await this.articleService.toggleRead(articleId, body.isRead);
	}
}
