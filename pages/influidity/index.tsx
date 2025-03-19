"use client";
import {
	Heroabout,
	Aboutabout,
	Team,
	Partners,
	Insights,
	Principles,
	Heropresentation,
	Publication,
} from "@/container";
import { useEffect } from "react";
import { Curve, Ready } from "@/components";
import Process from "@/container/home-page/Process";

export default function About() {
	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import("locomotive-scroll")).default;
			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);
	return (
		<>
			<Curve backgroundColor={"#f1f1f1"}>
				<Heropresentation />
				<Publication/>
				<Heroabout />
				<Principles />
				<Aboutabout />
				<Process />
				<Partners />
				<Ready />
			</Curve>
		</>
	);
}
