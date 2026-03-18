"use client";
import Lottie from "lottie-react";

interface AnimationLottieProps {
  animationPath: any;
  width?: string;
}

const AnimationLottie = ({ animationPath, width }: AnimationLottieProps) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '100%',
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
