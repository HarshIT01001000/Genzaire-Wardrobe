import React, { useState } from 'react';

function FeaturedCollectionCard({ Item1, Item3, Item4 }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="card bg-base-100 w-96 shadow-xl transition-transform duration-300 hover:scale-110"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <figure>
        <img
          src={isHovered ? Item3 : Item4}
          alt="example"
          className="transition-transform duration-500 h-[18rem] w-[14rem]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Item1}</h2>
        <p>T-shirt that tells us story</p>
        <div className="card-actions justify-end">
          <button className="btn bg-slate-400">Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCollectionCard;
