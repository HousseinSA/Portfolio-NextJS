export const userImageAnimate = {
  hidden: {scale: 0},
  show: {
    scale: 1,
    transition: {
      delay: 1.8,
      duration: 0.8,
      type: "spring",
      ease: "easeOut",
      bounce: 0.3,
    },
  },
}
export const containerIcon = {
  hidden: {opacity: 0.8},
  show: {
    transition: {
      repeat: "Infinity",
      repeatDelay: 1.6,
      duration: 5,
      repeatType: "mirror",
      ease: "easeInOut",
      staggerChildren: 1,
    },
  },
}

export const iconsAnimation = {
  hidden: {opacity: 0, scale: 0.5},
  show: {
    opacity: 1,
    scale: 0.8,
    transition: {
      repeat: "Infinity",
      repeatType: "mirror",
      duration: 2,
      ease: "linear",
    },
  },
}
