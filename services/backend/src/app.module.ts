import { Module } from "@nestjs/common";
import { ScheduleModule } from "@nestjs/schedule";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ArticleModule } from "./article/article.module";
import { FeedModule } from "./feed/feed.module";
import { TaskModule } from "./tasks/task.module";

@Module({
	imports: [FeedModule, ArticleModule, ScheduleModule.forRoot(), TaskModule],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
