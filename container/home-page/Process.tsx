import Image from "next/image";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

import {  phase1, phase2, phase3, phase4, phase5} from "@/public";


const serviceProcessItems = [
    {
       id: 1,
       phase: "01. Phase",
       name: "Discover",
       src: phase1,
       review: "We don't pitch generic solutions. We find companies that match our expertise and then craft a customized pitch-one that resonates with their unique needs, challenges, and aspirations.​",
       button: "read"
    },
    {
       id: 2,
       phase: "02. Phase",
       name: "Understand",
       src: phase2,
       review: "We don't rely on surface-level insights. We delve into the organization's mission, people, processes, and customers to understand what drives-or hinders-success. That deep dive is where the real challenges worth solving lie.​",
       button: "read"
    },
    {
       id: 3,
       phase: "03. Phase",
       name: "Analyze",
       src: phase3,
       review: "With data and insights, we try to find inefficiencies, risks, and opportunities. From reducing threats to unleashing locked-potential, we design practical-futuristic solutions​.",
       button: "read"
    },
    {
       id: 4,
       phase: "04. Phase",
       name: "Recommend",
       src: phase4,
       review: "Insights are only as good as their execution. We deliver sharp, actionable recommendations that address root issues while building a foundation for long-term growth.​",
       button: "read"
    },
    {
       id: 5,
       phase: "05. Phase",
       name: "Strategize",
       src: phase5,
       review: "We create a roadmap with senior leaders. This is not just about what to do but when and how to do it. Every plan is built to adapt to the challenges of 2025's fast-paced business landscape.​",
       button: "read"
    },
    {
       id: 6,
       phase: "06. Phase",
       name: "Execute",
       src: phase5,
       review: "We don't stop at planning. We work shoulder-to-shoulder with teams to implement changes seamlessly, ensuring every step is actionable, measurable, and aligned with the vision.​",
       button: "read"
    },
    {
       id: 7,
       phase: "07. Phase",
       name: "Monitor & Evolve​",
       src: phase5,
       review: "In 2025, standing still isn’t an option. We continuously monitor the results, fine-tune strategies, and adapt to new challenges, ensuring our solutions stay relevant and impactful.​",
       button: "read"
    },
 ];

export default function Process() {
	const [activeAccordion, setActiveAccordion] = useState(
		serviceProcessItems[0].id,
	);
	const toggleAccordion = (itemId: any) => {
		setActiveAccordion((prev) => (prev === itemId ? null : itemId));
	};

	return (
		<section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
			<div className="w-full padding-x mb-[40px]">
				<h1 className="sub-heading font-medium font-NeueMontreal text-secondry">
					At Influidity, we believe true growth is about leaving room for targets and keeping the things that matter. Our foundation is based on values that define every decision, partnership, and milestone made. ​

				</h1>
			</div>
			{serviceProcessItems.map((item) => (
				<div
					key={item.id}
					className={`w-full flex py-[10px] flex-col ${
						item.id == 1
							? "border-y border-[#21212155]"
							: "border-b border-[#21212155]"
					}`}>
					<div className="w-full flex items-center justify-between py-[10px] padding-x">
						<div className="w-[50%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.phase}
							</h3>
						</div>
						<div className="w-[40%] sm:w-full xm:w-full">
							<h3 className="paragraph font-normal font-NeueMontreal text-secondry">
								{item.name}
							</h3>
						</div>
						<div className="w-[10%] sm:w-full xm:w-full flex items-end justify-end">
							<button
								className={`paragraph font-normal font-NeueMontreal uppercase transition-all duration-200 ease-in-out ${
									activeAccordion === item.id
										? "text-gray-300"
										: "text-secondry link-flash"
								}`}
								onClick={() => toggleAccordion(item.id)}>
								{item.button}
							</button>
						</div>
					</div>
					<div
						className={`w-full flex justify-between padding-x sm:flex-col xm:flex-col`}>
						<div className="w-[50%] sm:hidden xm:hidden" />
						<div className="w-[40%] sm:w-full xm:w-full">
							<AnimatePresence>
								{activeAccordion === item.id && (
									<motion.div
										initial={{ opacity: 0, height: 0 }}
										animate={{ opacity: 1, height: "auto" }}
										exit={{ opacity: 0, height: 0 }}
										transition={{
											ease: [0.4, 0, 0.2, 1],
											duration: 1.3,
										}}>
										<div className="flex flex-col gap-[20px] py-[30px]">
											<div className="w-[130px] h-[130px]">
												<Image
													src={item.src}
													alt="clientImg"
													className="w-full h-full object-cover rounded-[10px]"
												/>
											</div>
											<div>
												<p className="paragraph tracking-wider font-normal font-NeueMontreal text-secondry">
													{item.review}
												</p>
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<div className="w-[10%]" />
					</div>
				</div>
			))}
		</section>
	);
}
