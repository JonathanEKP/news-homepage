import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Hero from "./Components/HeroWithText/Hero";
import Card from "./Components/Cards/Card";
import retroPcs from "./assets/images/image-retro-pcs.jpg";
import topLaptops from "./assets/images/image-top-laptops.jpg";
import growhtGaming from "./assets/images/image-gaming-growth.jpg";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Hero />
      <div>
        <Card
          sourceImage={retroPcs}
          number='01'
          title="Reviving Retro PCs"
          text="What happens when old PCs are given modern upgrades?"
        />
      </div>
    </div>
  );
}

export default App;
