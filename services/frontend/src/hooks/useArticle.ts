import type { Article } from "@src/types/article";
import { Fetcher } from "@src/utils/Fetcher";

export default function useArticle() {
	const fetcher = new Fetcher();

	async function browseArticle() {
		const article = await fetcher.get<Article[]>("article");
		return article;
	}

	return {
		browseArticle,
	};
}
