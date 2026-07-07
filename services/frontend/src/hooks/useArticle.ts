import type { Article } from "@src/types/article";
import { Fetcher } from "@src/utils/Fetcher";

export default function useArticle() {
	const fetcher = new Fetcher();

	async function browseArticle(page: number, limit = 20) {
		const article = await fetcher.get<Article[]>(`article?page=${page}&limit=${limit}`);
		window.scrollTo(0, 0);
		return article;
	}

	async function countArticle() {
		const total = await fetcher.get("article/count");
		return total;
	}

	function countPageNumber(totalArticle: number, pagination: number) {
		return Array.from({ length: Math.ceil(totalArticle / pagination) }, (_, i) => i + 1);
	}

	return {
		browseArticle,
		countArticle,
		countPageNumber,
	};
}
