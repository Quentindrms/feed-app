import { PaginationButton } from "@src/components/button";
import Card from "@src/components/card";
import NavBar from "@src/components/navBar";
import useArticle from "@src/hooks/useArticle";
import { type Article } from "@src/types/article";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Home() {
	const article = useArticle();

	const [articleList, setArticleList] = useState<Article[]>([]);
	const [count, setCount] = useState(0);
	const [pages, setPages] = useState<Array<number>>([]);
	const [searchParams, setSearchParams] = useSearchParams({ tab: "1" });
	const currentPage = Number(searchParams.get("tab")) || 1;

	function setCurrentPage(page: number) {
		setSearchParams({ tab: String(page) });
	}

	useEffect(() => {
		article.browseArticle(currentPage, 20).then(setArticleList);
		article.countArticle().then(setCount);
	}, [currentPage]);

	useEffect(() => {
		setPages(article.countPageNumber(count, 20));
	}, [count]);

	return (
		<div className="bg-light-background min-h-dvh">
			<NavBar />
			<div className="w-full flex justify-center">
				<div className="flex flex-wrap justify-center items-center gap-6 md:flex-wrap w-6xl p-6">
					{articleList.map((article, index) => (
						<Card
							key={index}
							description={article.description}
							link={article.link}
							publicationDate={article.publishDate}
							title={article.title}
							source={article.feed.title}
						/>
					))}
				</div>
			</div>
			<div className="flex gap-2 justify-center items-center">
				{currentPage > 3 && (
					<>
						<PaginationButton number={1} onClick={() => setCurrentPage(1)} />
						{currentPage > 4 && <span>...</span>}
					</>
				)}
				{pages
					.filter((page) => Math.abs(page - currentPage) <= 2)
					.map((page) => (
						<PaginationButton
							key={page}
							number={page}
							onClick={() => setCurrentPage(page)}
						/>
					))}
				{currentPage < pages.length - 2 && (
					<>
						{currentPage < pages.length - 3 && <span>...</span>}
						<PaginationButton
							number={pages.length}
							onClick={() => setCurrentPage(pages.length)}
						/>
					</>
				)}
			</div>
		</div>
	);
}
