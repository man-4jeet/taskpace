import styles from "./styles/stars.module.scss";
import gstyles from "./styles/gradient.module.scss";
import { Navbar } from "./component/navbar";
import { Hero } from "./component/hero";
import { AboutMe } from "./component/aboutme";
import { Experience } from "./component/experience";
import { RecentProject } from "./component/recentproject";

export default function Home() {
  return (
  <div>
    <div className="absolute h-full w-full overflow-hidden -z-10">
      <div className={styles.star}></div>
      <div className={gstyles.gradient}></div>
    </div>
    <Navbar/>
    <Hero/>
    <AboutMe/>
    <Experience/>
    <RecentProject/>
  </div>
);
}