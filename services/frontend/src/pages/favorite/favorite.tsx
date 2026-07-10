import NavBar from "@src/components/navBar";
import useArticle from "@src/hooks/useArticle";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

export default function Favorite() {
	const article = useArticle();
	const [pages, setPages] = useState<Array<number>>([]);
	const [searchParams, setSearchParams] = useSearchParams({ tab: "1" });
	const currentPage = Number(searchParams.get("tab")) || 1;

	useEffect(() => {
		article.browseFavorite(currentPage, 20);
	}, [currentPage]);

	return (
		<div className="bg-light-background min-h-dvh">
			<NavBar />
		</div>
	);
}
