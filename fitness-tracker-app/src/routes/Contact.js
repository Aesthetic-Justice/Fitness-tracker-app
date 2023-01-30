import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import PcaHero from "../components/pcaHero";
import Form from "../components/form";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <PcaHero heading="Contact" text="Have any questions? Ill answer them!" />
      <Form />
      <Footer />
    </div>
  );
};

export default Contact;
