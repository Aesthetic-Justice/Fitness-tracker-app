import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Weight from "../components/weight";
import Workout from "../components/workout";
// import weightrack from "../assets;"

const Workouts = () => {
  return (
    <div>
      <Navbar />
      <Weight heading="Workouts" />
      <Workout/>
      <Footer />
    </div>
  );
};

export default Workouts;
