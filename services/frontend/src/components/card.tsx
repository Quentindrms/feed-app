import Heading from "./heading";
import Link from "./link";
import Text from "./text";

interface CardProps {
	title: string;
	link: string;
	description: string;
	publicationDate: Date;
}

export default function Card(props: CardProps) {
	return (
		<div className="flex flex-col gap-3 bg-muted-background/30 border border-dark-border/10 w-md rounded-2xl p-3">
			<Heading component="h2" size="xl">
				{props.title}
			</Heading>
			<Text component="p" size="md" weight="light">
				{props.description}
			</Text>
			<Text component="p" size="md" weight="extralight">
				Date de publication :{" "}
				<Text component="span" size="md" weight="light">
					{props.publicationDate.toLocaleDateString("fr-FR")}
				</Text>
			</Text>
			<Link href={props.link}>{"Consulter l'article"}</Link>
		</div>
	);
}
