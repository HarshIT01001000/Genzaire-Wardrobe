import FeaturedCollectionCard from "../homePagesReuseable/FeaturedCollectionCard";


function SaleCollection() {
    
  
    return (
      <>
    <div className=" text-center text-2xl font-semibold lg:text-3xl  mt-[3rem] mb-[3rem]">SALE</div>
    <div className="flex justify-center items-center rounded-sm">
          <div className="carousel space-x-2 md:space-x-12">
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Tshirt4"} />
            </div>
            <div className="carousel-item">
            <FeaturedCollectionCard Item1={"Tshirt5"} />
            </div>
            <div className="carousel-item">
            <FeaturedCollectionCard Item1={"Tshirt6"} />
            </div>
          </div>
        </div>

        {/* button */}
       <div className="flex justify-center items-center mt-[3rem]"> 
        <button className="btn bg-white">Shop Now</button>
       </div>
      </>
    )
  }
  
  export default SaleCollection