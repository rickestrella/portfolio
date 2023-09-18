import { motion } from "framer-motion";
import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[65px] md:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {t("hero_greeting")} <span className="text-[#915eff]">Ricardo</span>
          </h1>
          <p className={`text-2xl mt-8 text-white-100`}>{t("hero_text")}</p>
        </div>
      </div>

      <motion.div className="xl:flex-1 md:h-[56rem] xxl:h-[82rem] h-[150px]">
        <ComputersCanvas />
      </motion.div>

      <div className="absolute xs:bottom-10 bottom-8 md:bottom-12 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-center">
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 1.75,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-4"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
