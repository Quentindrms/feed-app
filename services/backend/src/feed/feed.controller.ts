import { Controller, Get, Res } from "@nestjs/common";
import { FeedService } from "./feed.service";

@Controller("feed")
export class FeedController {
	constructor(private readonly feedService: FeedService) {}

	@Get("")
	async test() {
		return await this.feedService.browseFeeds();
	}
}
