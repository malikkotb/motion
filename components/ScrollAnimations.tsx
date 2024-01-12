"use client";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
export default function ScrollAnimations() {
  const { scrollYProgress } = useScroll();

  //  to add spring to the progress bar: useSpring hook
  const scaleX = useSpring(scrollYProgress); // takes in a static motion value

  const background = useTransform(
    scrollYProgress,
    // 2nd argument is an array of values that you want to map from
    [0, 1],
    // 3rd argument is array of values that you want to map to (outputRange)
    ["rgb(96, 1, 245)", "rgb(1, 245, 123)"]
  );

  return (
    <div>
      <motion.div
        style={{
          // scaleX: scrollYProgress,
          scaleX: scaleX,
          background: background,
        }}
        className=" origin-left sticky top-0 w-full h-5 "
      ></motion.div>

      <div className=" max-w-[700px] m-auto gap-4 flex flex-col p-5">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis quis quos recusandae sunt
          atque porro, ab iure debitis iste ipsa corrupti dicta dolorem
          doloremque adipisci officiis fuga quas consequatur aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis quis quos recusandae sunt
          atque porro, ab iure debitis iste ipsa corrupti dicta dolorem
          doloremque adipisci officiis fuga quas consequatur aperiam. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quis
          quos recusandae sunt atque porro, ab iure debitis iste ipsa corrupti
          dicta dolorem doloremque adipisci officiis fuga quas consequatur
          aperta dolorem doloremque adipisci officiis fuga quas consequatur
          aperiam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perf
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis quis quos recusandae sunt
          atque porro, ab iure debitis iste ipsa corrupti dicta dolorem
          doloremque adipisci officiis fuga quas consequatur aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis isrecusandae sunt atque porro, ab iure debitis iste
          ipsa corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis quis quos recusandae sunt
          atque porro, ab iure debitis iste ipsa corrupti dicta dolorem
          doloremque adipisci officiis fuga quas consequatur aperiam. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quis
          quos recusandae sunt atque porro, ab iure debitis iste ipsa corrupti
          dicta dolorem doloremque adipisci officiis fuga quas consequatur
          aperiam.
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis isrecusandae sunt atque porro, ab iure debitis iste
          ipsa corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis quis quos recusandae sunt
          atque porro, ab iure debitis iste ipsa corrupti dicta dolorem
          doloremque adipisci officiis fuga quas consequatur aperiam. Lorem
          ipsum dolor sit, amet consectetur adipisicing elit. Perferendis quis
          quos recusandae sunt atque porro, ab iure debitis iste ipsa corrupti
          dicta dolorem doloremque adipisci officiis fuga quas consequatur
          aperiam.
        </p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis
          quis quos recusandae sunt atque porro, ab iure debitis iste ipsa
          corrupti dicta dolorem doloremque adipisci officiis fuga quas
          consequatur aperiam. Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Perferendis quis quos recusandae sunt atque porro,
          ab iure debitis iste ipsa corrupti dicta dolorem doloremque adipisci
          officiis fuga quas consequatur aperiam. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Perferendis quis quos recusandae sunt
          atque porro, ab iure debitis iste ipsa corrupti dicta dolorem
          doloremque adipisci officiis fuga quas consequatur aperiam.
        </p>
      </div>
    </div>
  );
}
