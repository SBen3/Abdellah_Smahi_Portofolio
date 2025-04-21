import React, { useRef , useEffect} from "react";
import { motion, useAnimation, useInView } from "motion/react";

function RevealScroll({ children  , state}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const runAnimation = useAnimation();
  useEffect(() => {
    if (isInView) runAnimation.start("visible");
  });
  return (
    <motion.div
      ref={ref}
      variants={{ hidden:{ opacity: 0 , translateY:50 }, visible: { opacity: 1 , translateY:0} }}
      initial="hidden"
      animate={runAnimation}
      transition={{duration:1 , delay: 0.2}}
    >
      {children}
    </motion.div>
  );
}

export default RevealScroll;
