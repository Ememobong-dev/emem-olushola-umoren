"use client";

import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

type MotionWrapperProps = HTMLMotionProps<"div">;

export const MotionWrapper = React.forwardRef<
  HTMLDivElement,
  MotionWrapperProps
>((props, ref) => {
  return <motion.div ref={ref} {...props} />;
});

MotionWrapper.displayName = "MotionWrapper";