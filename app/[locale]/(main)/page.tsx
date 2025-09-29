import Main from "../_components/Main";
import About from "../_components/About";
import Carousel from "../_components/Carousel";
import CEO from "../_components/CEO";
import Services from "../_components/Services";

export default function Home() {

  return (
    <div className="flex flex-col">
      <Main />
      <About />
      <CEO />
      <Services />
      <Carousel />
    </div>
  );
}