import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PcaHero from "../components/pcaHero";
import Workcard from "../components/workcard";
import Work from "../components/work";

const Project = () => {
  return (
    <div>
      <Navbar />
      <PcaHero heading="PROJECTS" text="Some of my recent creations" />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
