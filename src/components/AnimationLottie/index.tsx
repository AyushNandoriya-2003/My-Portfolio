"use client";

import dynamic from "next/dynamic";
import { CSSProperties } from "react";
import { LottieOptions } from "lottie-react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

type AnimationLottieProps = {
  animationPath: object; // you can replace with more specific type if needed
  width?: number | string;
  height?: number | string;
};

const AnimationLottie: React.FC<AnimationLottieProps> = ({
  animationPath,
  width,
  height,
}) => {
  const defaultOptions: LottieOptions & { style?: CSSProperties } = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || "95%",
      height: height || "95%",
    },
  };

  return <Lottie {...defaultOptions} />;
};

export default AnimationLottie;
