import "./Aside.css";

function Aside() {
  return (
    <aside className="card-aside p-3 d-grid">
      <p className="card-aside-title display-6">New</p>

      <div className="border-bottom">
        <h5 className="text-white aside-subtitle ">
          Hydrogen VS Electric Cars
        </h5>
        <p className="text-aside mb-md-0">
          Will hydrogen-fueled cars ever catch up to EVs?
        </p>
      </div>
        
      <div className="border-bottom ">
        <h5 className="text-white aside-subtitle mt-3">
          The Downsides of AI Artistry
        </h5>
        <p className="text-aside">
          {" "}
          What are the possible adverse effects of on-demand AI image
          generation?
        </p>
      </div>

      <div className="">
        <h5 className="text-white aside-subtitle mt-3">
          Is VC Funding Drying Up?
        </h5>
        <p className="text-aside">
          {" "}
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </div>
    </aside>
  );
}

export default Aside;
