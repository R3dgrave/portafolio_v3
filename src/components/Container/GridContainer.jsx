import { useMediaQuery } from "../hooks/useMediaQuery";
import AboutMe2x2 from "../items/AboutMe2x2";
import Codegif1x1 from "../items/Codegif1x1";
import Github1x1 from "../items/Github1x1";
import Header from "../items/Header";
import Linkedin1x1 from "../items/Linkedin1x1";
import Mail1x1 from "../items/Mail1x1";
import PDF1x1 from "../items/PDF1x1";
import Presentation2x1 from "../items/Presentation2x1";
import Presentation3x1 from "../items/Presentation3x1";
import Presentation4x1 from "../items/Presentation4x1";
import Project1_2x2 from "../items/Project1_2x2";
import Project2_2x2 from "../items/Project2_2x2";
import Project3_2x2 from "../items/Project3_2x2";
import Project4_2x2 from "../items/Project4_2x2";
import Project5_2x2 from "../items/Project5_2x2";
import Skill1_1x1 from "../items/Skill1_1x1";
import Skill2_1x1 from "../items/Skill2_1x1";
import Skill3_1x1 from "../items/Skill3_1x1";
import User from "../items/User";
import WorkExperience2x2 from "../items/WorkExperience2x2";
import "./Tailwind.css";

export default function GridContainer() {
  // 🔹 Usando breakpoints de Tailwind con useMediaQuery
  const isMobilePortrait = useMediaQuery("(max-width: 479px)");
  const isMobileLandscape = useMediaQuery(
    "(min-width: 480px) and (max-width: 599px)"
  );
  const isSmallTabletPortrait = useMediaQuery(
    "(min-width: 600px) and (max-width: 799px)"
  );
  const isTabletPortrait = useMediaQuery(
    "(min-width: 800px) and (max-width: 1023px)"
  );
  const isTabletLandscape = useMediaQuery("(min-width: 1024px)");

  let gridClasses = "grid-cols-2"; // Default para móviles
  let componentsToRender = [];

  if (isMobilePortrait || isMobileLandscape) {
    gridClasses = "grid-cols-2";
    componentsToRender = [
      <User key="user" />,
      <Presentation2x1 key="presentation" />,
      <Linkedin1x1 key="Linkedin" />,
      <Github1x1 key="Github" />,
      <Mail1x1 key="Gmail" />,
      <PDF1x1 key="Pdf" />,
      <WorkExperience2x2 key="WorkExperience" />,
      <AboutMe2x2 key="AboutMe" />,
      <Skill1_1x1 key="Skills1" />,
      <Skill2_1x1 key="Skills2" />,
      <Skill3_1x1 key="Skills3" />,
      <Codegif1x1 key="Gif" />,
      <Project1_2x2 key="Project1" />,
      <Project2_2x2 key="Project2" />,
      <Project3_2x2 key="Project3" />,
      <Project4_2x2 key="Project4" />,
      <Project5_2x2 key="Project5" />,
    ];
  }

  if (isSmallTabletPortrait || isTabletPortrait) {
    gridClasses = "grid-cols-4";
    componentsToRender = [
      <User key="user" />,
      <Presentation3x1 key="presentation" />,
      <WorkExperience2x2 key="WorkExperience" />,
      <AboutMe2x2 key="AboutMe" />,
      <Linkedin1x1 key="Linkedin" />,
      <Github1x1 key="Github" />,
      <Skill1_1x1 key="Skills1" />,
      <Skill2_1x1 key="Skills2" />,
      <Mail1x1 key="Gmail" />,
      <PDF1x1 key="Pdf" />,
      <Skill3_1x1 key="Skills3" />,
      <Codegif1x1 key="Gif" />,
      <Project1_2x2 key="Project1" />,
      <Project2_2x2 key="Project2" />,
      <Project3_2x2 key="Project3" />,
      <Project4_2x2 key="Project4" />,
      <Project5_2x2 key="Project5" />,
    ];
  }

  if (isTabletLandscape) {
    gridClasses = "grid-cols-6";
    componentsToRender = [
      <User key="user" />,
      <Presentation3x1 key="presentation" />,
      <Linkedin1x1 key="Linkedin" />,
      <Github1x1 key="Github" />,
      <WorkExperience2x2 key="WorkExperience" />,
      <AboutMe2x2 key="AboutMe" />,
      <Mail1x1 key="Gmail" />,
      <PDF1x1 key="Pdf" />,
      <Skill1_1x1 key="Skills1" />,
      <Skill2_1x1 key="Skills2" />,
      <Presentation4x1 key="Mp3" />,
      <Skill3_1x1 key="Skills3" />,
      <Codegif1x1 key="Gif" />,
      <Project1_2x2 key="Project1" />,
      <Project2_2x2 key="Project2" />,
      <Project3_2x2 key="Project3" />,
      <Project4_2x2 key="Project4" />,
      <Project5_2x2 key="Project5" />,
    ];
  }

  return (
    <>
      <Header></Header>
      <div className={`grid-container ${gridClasses}`}>
        {componentsToRender}
      </div>
    </>
  );
}
