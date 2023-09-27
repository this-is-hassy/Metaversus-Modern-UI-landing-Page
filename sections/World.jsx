"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import styles from "../styles";
import { staggerContainer, fadeIn} from "../utils/motion";
import { TitleText, TypingText } from "../components";

const World = () => {
  const MotionImage = motion(Image);
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: "false", amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col `}
      >
        <TypingText title="| People on the World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Track friends around you and invite them to play together in the
              same world
            </>
          }
          textStyles="text-center"
        />
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className="relative mt-[68px] flex w-full h-[550px]"
        >
          <MotionImage
            height={1500}
            width={1500}
            src="/map.png"
            alt="map"
            className="w-full h-full object-cover"
          />
          <div className="shadow-[0px_10px_60px_1px_rgb(246,98,62)] absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <MotionImage
              height={1500}
              width={1500}
              src="/people-01.png"
              alt="people"
              className="w-full h-full "
            />
          </div>
          <div className="shadow-[0px_10px_60px_1px_rgb(223,43,84)]  absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <MotionImage
              height={1500}
              width={1500}
              src="/people-02.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
          <div className="shadow-[0px_10px_60px_1px_rgb(173,182,215)] absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
            <MotionImage
              height={1500}
              width={1500}
              src="/people-03.png"
              alt="people"
              className="w-full h-full"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default World;
