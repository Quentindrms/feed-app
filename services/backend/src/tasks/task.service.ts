import { Injectable, Logger } from "@nestjs/common";
import { Cron } from "@nestjs/schedule";

@Injectable()
export class TaskService {
	logger = new Logger(TaskService.name);
}
