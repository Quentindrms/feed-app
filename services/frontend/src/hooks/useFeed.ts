import { type Feed } from "@src/types/feed";
import { Fetcher } from "@src/utils/Fetcher";

export default function useFeed() {
	const fetcher = new Fetcher();

	async function browseFeeds() {
		const feeds = await fetcher.get<Feed[]>("feed");
		return feeds;
	}

	return {
		browseFeeds,
	};
}
