import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PcaHero from "../components/pcaHero";
import Workout from "../components/workout";

const Workouts = () => {
  return (
    <div>
      <Navbar />
      <PcaHero heading="Workouts" />
      <Workout/>
      <Footer />
    </div>
  );
};

export default Workouts;
