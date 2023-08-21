/* eslint-disable react/prop-types */
import SectionWrapper from "../hoc/sectionWrapper";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full hover:brightness-105">
      <div className="relative w-full h-[230px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
        <div className="absolute inset-0 flex justify-end m-3 card_img_hover">
          <div
            onClick={() => window.open(source_code_link, "_blank")}
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
          >
            <img
              src={github}
              alt="Github"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-white font-bold text-[24px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <span className="text-[15px] text-gray-300">Tech used: </span>
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] text-secondary`}>
            {tag.name}
          </p>
        ))}
      </div>
    </div>
  </motion.div>
);

const Works = ({t}) => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>{t('my_work')}</p>
        <h2 className={`${styles.heroHeadText} mt-8`}>{t('projects')}</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-10 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {t('work_showcase')}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.length >= 1 ? (
          <>
            {projects.map((project, index) => (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                {...project}
              />
            ))}
          </>
        ) : (
          <div className="bg-tertiary p-5 rounded-2xl sm:w-[360px] md:w-full hover:brightness-105">
            <div className="relative w-full h-fit">
              <h3 className={`${styles.paddingX} pt-8 text-lg`}>{t('coming_soon')}</h3>
              <div className="w-full px-8 md:px-6 py-16 md:py-10 text-xl">
                <p>{t('work_check_out')} &nbsp;<a className="blue-text-gradient !underline hover:underline" href="https://codepen.io/rick1295/">Codepen.io</a> &nbsp; {t('work_check_out_end')}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
