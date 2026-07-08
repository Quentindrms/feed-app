import { CiBookmarkPlus, CiBookmarkRemove } from "react-icons/ci";
import Heading from "./heading";
import Text from "./text";

interface CardProps {
	title: string;
	link: string;
	description: string;
	publicationDate: Date;
	source: string;
	isFavorite: boolean;
}

export default function Card(props: CardProps) {
	const publicationDate = new Date(props.publicationDate).toLocaleDateString("fr-FR");

	return (
		<div className="w-xs md:w-5xl bg-muted-background/20 border border-dark-border/10 hover:border-dark-border/20 rounded-2xl hover:scale-110 transition-transform duration-300">
			<a
				href={props.link}
				className="w-full flex flex-col md:flex-row items-center p-4 gap-4"
			>
				<div className="w-fit md:w-md text-justify m-2">
					<Heading component="h2" size="md">
						{props.title}
					</Heading>
				</div>
				<div className="w-xs">
					<Text size="xs" weight="extralight" component="p">
						({props.source})
					</Text>
					<Text size="md" weight="normal" component="p">
						{publicationDate}
					</Text>
				</div>
				{props.isFavorite ? <CiBookmarkRemove size={26} /> : <CiBookmarkPlus size={26} />}
			</a>
		</div>
	);
}
