import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticleModule } from "./article/article.module";
import { FeedModule } from "./feed/feed.module";

@Module({
	imports: [FeedModule, ArticleModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
