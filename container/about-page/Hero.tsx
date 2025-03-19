"use client";
import { motion, useScroll, useTransform, useAnimation } from "framer-motion";
import { useEffect } from "react";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -500]);

  // Split the text into lines for staggered animation
  const textLines = [
    `Business is not checking boxes or templates. It is solving real problems,
     responding to change, and building something that lasts.
     That is what Influidity Solution is all about. Founded in 2017,
     we built our name on two ideas: Infinity for endless possibilities,
     and Fluidity for adaptability. What does that mean for you?
     It means strategies that grow as you grow, ideas that solve problems before they arise,
     and a partner that sticks with you for the long haul. We're here to help you launch your new start-up,
     scale your small or medium enterprise, or redefine your corporate legacy.
     We cut through the noise to deliver what works.`,
  
    `No fluff. No jargon. Just solutions designed to make your business move smarter,
     adapt faster, and grow stronger. We are not in the business of selling services.
     We are in the business of getting you where you need to be—through strategies
     that do not just work on paper but thrive in the real world. At Influidity,
     we believe that growth should feel as natural, seamless, and inevitable as possible.
     For when you get it right, success doesn't have to be forced. It just flows.`,
  
    `The rules of business have changed. In a world where speed and precision are everything,
     there’s no room for half-measures. Influidity Solution understands this.
     We don't just advise; we build solutions that work in the real world, where challenges are constant,
     and outcomes are what count. We have, since 2017, assumed that every organization is unique with its needs being different.
     To this end, our strategies are well designed to take into account a business, specific goals, or challenges.`,
  
    `Never shortcuts and absolutely no "one-size-fits-all." Our approach is based on the concept of "Perfection along Constraints."
     Whether it's identifying inefficiencies, improving customer experiences, or reducing costs that don't add value,
     we focus on what moves the needle for you. We help organizations do more than adapt to change—we help them thrive in it.
     We are not just service providers at BPI. We are a partner that cares for the success as much as you do.
     We go further because your success is our success.`,
  ];

  // Animation controls for each line
  const controls = textLines.map(() => useAnimation());

  useEffect(() => {
    // Function to animate lines sequentially
    const animateLines = async () => {
      for (let i = 0; i < textLines.length; i++) {
        await controls[i].start((index) => ({
          opacity: 1,
          transition: { delay: index * 0.002, duration: 0.1 },
        }));
      }
    };

    animateLines();
  }, [controls, textLines]);

  return (
    <section className="w-full relative z-30 padding-y rounded-t-[20px] bg-background">
      <div className="w-full flex flex-col justify-between">
        <div className="w-full flex flex-col">
          <div className="w-full margin padding-x">
            <div>
              <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase pt-12 pb-12">
              We are Influidity Soluation <br />
                <div className="flex items-center gap-[5px]">
                  <motion.span
                    initial={{ width: 0 }}
                    animate={{ width: "auto" }}
                    transition={{
                      ease: [0.86, 0, 0.07, 0.995],
                      duration: 1,
                      delay: 1.5,
                    }}
                  >
                  </motion.span>
                  <h1 className="heading tracking-[-1.3px] text-[#212121] font-semibold font-FoundersGrotesk uppercase">
                    
                  </h1>
                </div>
              </h1>
            </div>
          </div>
          <div className="w-full border-t border-[#21212155] pt-[20px]">
            <div className="w-full flex justify-between padding-x sm:flex-col xm:flex-col gap-[20px]">
              <div className="w-[30%] sm:w-full xm:w-full mt-20 flex justify-center">
                <h3 className="font-semibold text-secondry text-6xl font-NeueMontreal">
                  About us
                </h3>
              </div>

              <motion.div
                className="w-[70%] sm:w-full xm:w-full mt-10"
                style={{ y }}
              >
                <div className="flex flex-col gap-y-[20px]">
                  {textLines.map((line, lineIndex) => (
                    <motion.div
                      key={lineIndex}
                      initial={{ opacity: 0 }}
                      animate={controls[lineIndex]}
                    >
                      <p className="text-xl font-NeueMontreal text-secondry">
                        {line.split("").map((char, charIndex) => (
                          <motion.span
                            key={charIndex}
                            custom={charIndex}
                            initial={{ opacity: 0 }}
                            animate={controls[lineIndex]}
                          >
                            {char}
                          </motion.span>
                        ))}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}