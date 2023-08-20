import {motion} from "framer-motion"
export const HeaderAnimate = ({children}) => {
  const animate = {
    hidden: {opacity: 0, y: 100},
    show: {opacity: 1, y: 0, transition: {delay: 1.2, duration: 0.5}},
  }
  return (
    <motion.div variants={animate} initial="hidden" animate="show">
      {children}
    </motion.div>
  )
}


