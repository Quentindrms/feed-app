import { Injectable } from "@nestjs/common";
import { prisma } from "../libs/DatabaseClient";

@Injectable()
export class FeedService {
	async browseFeeds() {
		return await prisma.feed.findMany({});
	}
}
