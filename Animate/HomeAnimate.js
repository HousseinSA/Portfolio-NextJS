export const hi = {
  hidden: {opacity: 0, y: 100},
  show: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.4,
      duration: 1,
      bounce: 0.4,
      type: "spring",
      ease: "linear",
    },
  },
}

export const homeLogo = {
  hidden: {scale: 0, opacity: 0, rotate: 45},
  show: {
    opacity: 0.1,
    scale: 0.8,
    transition: {
      repeat: "Infinity",
      repeatType: "reverse",
      duration: 2,
      repeatDelay: 2,
      ease: "easeOut",
    },
  },
}
export const animation = {
  hidden: {opacity: 0, y: -100},
  show: {
    opacity: 1,
    y: 0,
    transition: {duration: 1, delay: 1.2, type: "spring", ease: "linear"},
  },
}

