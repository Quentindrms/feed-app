import type { Article } from "@src/types/article";
import { Fetcher } from "@src/utils/Fetcher";
import { useState } from "react";

export default function useArticle() {
	const fetcher = new Fetcher();
	const [articleList, setArticleList] = useState<Article[]>([]);

	async function browseArticle(page: number, limit = 20) {
		const result = await fetcher.get<Article[]>(`article?page=${page}&limit=${limit}`);
		window.scrollTo(0, 0);
		setArticleList(result);
	}

	async function browseFavorite(page: number, limit = 20) {
		const result = await fetcher.get<Article[]>(`article/favorite?page=${page}&limit=${limit}`);
		setArticleList(result);
	}

	async function countArticle() {
		const total = await fetcher.get<number>("article/count");
		return total;
	}

	async function toggleFavorite(item: Article) {
		const nextValue = !item.isFavorite;

		setArticleList((prev) =>
			prev.map((article) =>
				article.id === item.id ? { ...article, isFavorite: nextValue } : article,
			),
		);
		try {
			const updated = await fetcher.patch<Article>(`article/favorite/${item.id}`, {
				isFavorite: nextValue,
			});
			setArticleList((prev) =>
				prev.map((article) =>
					article.id === item.id
						? { ...article, isFavorite: updated.isFavorite }
						: article,
				),
			);
		} catch (error) {
			setArticleList((prev) =>
				prev.map((article) =>
					article.id === item.id ? { ...article, isFavorite: item.isFavorite } : article,
				),
			);
			console.error("Failed to toggle favorite", error);
		}
	}

	async function toggleIsRead(item: Article) {
		const nextValue = !item.isFavorite;

		setArticleList((prev) =>
			prev.map((article) =>
				article.id === item.id ? { ...article, isRead: true } : article,
			),
		);
		try {
			const updated = await fetcher.patch<Article>(`article/read/${item.id}`, {
				isRead: nextValue,
			});
			setArticleList((prev) =>
				prev.map((article) =>
					article.id === item.id ? { ...article, isFavorite: updated.isRead } : article,
				),
			);
		} catch (error) {
			setArticleList((prev) =>
				prev.map((article) =>
					article.id === item.id ? { ...article, isRead: item.isRead } : article,
				),
			);
			console.error("Failed to toggle read", error);
		}
	}

	function countPageNumber(totalArticle: number, pagination: number) {
		return Array.from({ length: Math.ceil(totalArticle / pagination) }, (_, i) => i + 1);
	}

	return {
		articleList,
		browseArticle,
		browseFavorite,
		countArticle,
		countPageNumber,
		toggleFavorite,
		toggleIsRead,
	};
}
