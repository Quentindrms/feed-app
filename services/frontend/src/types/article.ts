export interface Article {
	id: string;
	title: string;
	link: string;
	publishDate: Date;
	description: string;
	isRead: boolean;
	isFavorite: boolean;
	createdAt: Date;
	feed: {
		title: string;
	};
}
