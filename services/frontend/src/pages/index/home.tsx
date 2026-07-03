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
		article.browseArticle().then(setArticleList);
		article.countArticle().then(setCount);
	}, [currentPage]);

	useEffect(() => {
		setPages(article.countPageNumber(count, 10));
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
				{pages.slice(0, 5).map((page) => (
					<PaginationButton
						key={page}
						number={page}
						onClick={() => setCurrentPage(page)}
					/>
				))}
				{pages.length > 6 && <span>...</span>}
				{pages.length > 5 && (
					<PaginationButton
						number={pages[pages.length - 1]}
						onClick={() => setCurrentPage(pages[pages.length - 1])}
					/>
				)}
			</div>
		</div>
	);
}
