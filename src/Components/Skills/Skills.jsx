import { imageData } from "../../../public/Data.js";
import Skills from "./Skills.module.css";
export const SkillPage = () => {
  const card = imageData;
  return (
    <div className={Skills.S_Container}>
      <div className={Skills.S_Left}>
        <h1 className={Skills.S_Title}>Professional Skills</h1>
      </div>
      <div className={Skills.S_Grid}>
        {card.map(({ src, id, alt }) => (
          <div className={Skills.S_Card} key={id}>
            <img src={src} alt={alt} />
          </div>
        ))}
      </div>
    </div>
  );
};
