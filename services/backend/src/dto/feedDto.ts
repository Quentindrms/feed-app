import { IsString, IsUrl } from "class-validator";

export class CreateFeedDto {
	@IsString()
	title!: string;

	@IsUrl()
	link!: string;
}
