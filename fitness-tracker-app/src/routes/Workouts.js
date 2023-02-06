import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import Weight from "../components/weight";
import Workout from "../components/workout";
// import weightrack from "../assets;"

import { Query_Sets } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Workouts = () => {
  const { loading, data } = useQuery(Query_Sets);
  const sets = data?.sets || [];

  return (
    <div>
      <Navbar />
      <Weight heading="Workouts" />
      {loading ? (
        <div>loading</div>
      ) : (
        <Workout
          sets={sets}
        />
      )}
      <Workout/>
      <Footer />
    </div>
  );
};

export default Workouts;
