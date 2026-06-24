import Card from "@src/components/card";
import NavBar from "@src/components/navBar";
import useArticle from "@src/hooks/useArticle";
import { type Article } from "@src/types/article";
import { useEffect, useState } from "react";

export default function Home() {
	const article = useArticle();

	const [articleList, setArticleList] = useState<Article[]>([]);

	useEffect(() => {
		article.browseArticle().then(setArticleList);
	}, []);

	return (
		<div className="bg-light-background min-h-dvh">
			<NavBar />
			<div className="flex flex-wrap justify-center items-center gap-3 p-4">
				{articleList.map((article, index) => (
					<Card
						key={index}
						description={article.description}
						link={article.link}
						publicationDate={article.publishDate}
						title={article.title}
					/>
				))}
			</div>
		</div>
	);
}
