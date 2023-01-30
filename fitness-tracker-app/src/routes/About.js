import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PcaHero from "../components/pcaHero";
import Aboutcontent from "../components/aboutcontent";

const About = () => {
  return (
    <div>
      <Navbar />
      <PcaHero
        heading="ABOUT ME"
        text="I am a Full-Stack Developer, Videographer, and Video Editor"
      />
      <Aboutcontent />
      <Footer />
    </div>
  );
};

export default About;
