export interface Article {
	title: string;
	link: string;
	publishDate: Date;
	description: string;
	isRead: boolean;
	createdAt: Date;
	feed: {
		title: string;
	};
}
