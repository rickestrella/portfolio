import { motion, stagger } from "framer-motion";

import { styles } from "../style";
import { staggerContainer } from "../utils/motion";

import { useTranslation } from "react-i18next";

const SectionWrapper = (Component, idNanme) => function HOC() {
    const {t} = useTranslation();
    return (
        <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
        >
            <span className="hidden md:hash-span" id={idNanme}>
                &nbsp;
            </span>
            <Component t={t}/>
        </motion.section>
    )
}

export default SectionWrapper;