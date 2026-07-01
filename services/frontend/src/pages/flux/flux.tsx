import NavBar from "@src/components/navBar";
import useFeed from "@src/hooks/useFeed";
import { type Feed } from "@src/types/feed";
import { useEffect, useState } from "react";

export default function Flux() {
	const feed = useFeed();

	const [feeds, setFeeds] = useState<Feed[]>([]);

	useEffect(() => {
		feed.browseFeeds().then(setFeeds);
	});

	return (
		<div className="bg-light-background min-h-dvh">
			<NavBar />
			{feeds.map((feed, index) => (
				<p key={index}>{feed.title}</p>
			))}
		</div>
	);
}
