import { useState } from "react";
import { useLocation } from "react-router-dom";

function PageBuyCart() {
  const location = useLocation();
  const { item1, item2, item3 } = location.state || {}; // Destructure the passed props from the location state

  const [count, setCount] = useState(1);

  function aDD() {
    setCount(count + 1);
  }

  function sUB() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img src={item3} className="max-w-sm rounded-lg shadow-2xl h-[20rem]" alt="Product" />
        <div className="flex flex-col space-y-5 ml-2">
          <h1 className="text-5xl font-semibold">{item1}</h1>
          <h3 className="text-3xl">{item2}</h3>

          {/* Size buttons */}
          <div className="space-x-3">
            <input type="radio" name="radio-2" className="radio radio-primary" defaultChecked />
            <input type="radio" name="radio-2" className="radio radio-primary" />
            <input type="radio" name="radio-2" className="radio radio-primary" />
            <input type="radio" name="radio-2" className="radio radio-primary" />
          </div>

          {/* Size options */}
          <div className="flex space-x-7 font-bold">
            <p>S</p>
            <p>M</p>
            <p>L</p>
            <p>XL</p>
          </div>

          {/* Add To Cart */}
          <div className="flex space-x-4">
            <div className="flex">
              <button className="btn btn-square btn-outline" onClick={sUB}>
                <div className="text-4xl">-</div>
              </button>
              <div className="text-center font-semibold text-3xl p-4 mt-[-0.6rem]">
                {count}
              </div>
              <button className="btn btn-square btn-outline" onClick={aDD}>
                <div className="text-4xl">+</div>
              </button>
            </div>
            <button className="btn bg-slate-500 ">Add To Cart</button>
          </div>

          <button className="btn btn-primary ">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default PageBuyCart;
