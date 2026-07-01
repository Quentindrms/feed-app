import icons from "@src/public/icons.svg";
import { navigationLink } from "@src/utils/navigationLink";
import NavLink from "./navLink";

export default function NavBar() {
	return (
		<div className="flex flex-col md:flex-row items-center gap-2 bg-muted-background/15 shadow-2xs shadow-dark-border/10 p-2 rounded-2xl">
			<div className="">
				<img src={icons} alt="Feed-App logo" className="w-md"></img>
			</div>
			<div className="flex flex-col justify-center items-center md:flex-row gap-5">
				{navigationLink.map((navigation, index) => (
					<NavLink key={index} link={navigation.link}>
						{navigation.title}
					</NavLink>
				))}
			</div>
		</div>
	);
}
