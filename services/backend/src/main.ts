import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
	const logger = new Logger();
	const app = await NestFactory.create(AppModule);
	app.enableCors();
	if (!process.env.REDDIT_USERNAME) {
		logger.error("Reddit username is missing");
		throw new Error("Reddit username is missing");
	}
	await app.listen(process.env.BACKEND_PORT ?? 4000);
}
bootstrap();
