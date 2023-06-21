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
      <Navbar/>
      <Hero/>
      <section className="row g-0 mt-5 gap-5 gap-md-3 gap-lg-0 mb-5">
        <div className="col-lg-4 col-12 d-md-flex justify-content-md-center">
          <Card
            sourceImage={retroPcs}
            number='01'
            title="Reviving Retro PCs"
            text="What happens when old PCs are given modern upgrades?"
          />
        </div>
        <div className="col-lg-4 col-12 d-md-flex justify-content-md-center">
          <Card
            sourceImage={topLaptops}
            number='02'
            title='Top 10 Laptops of 2022 '
            text='Our best picks for various needs and budgets.'
          />
        </div>
        <div className="col-lg-4 col-12 d-md-flex justify-content-md-center">
          <Card
            sourceImage={growhtGaming}
            number='03'
            title='The Growth of Gaming'
            text='How the pandemic has sparked fresh opportunities.'
          />
        </div>
      </section>
    </div>
  );
}

export default App;
