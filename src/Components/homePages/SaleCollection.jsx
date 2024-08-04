import FeaturedCollectionCard from "../homePagesReuseable/FeaturedCollectionCard";


function SaleCollection() {
    
  
    return (
      <>
    <div className=" text-center text-2xl font-semibold lg:text-3xl  mt-[rem] mb-[3rem]">SALE</div>
    <div className="flex justify-center items-center rounded-sm">
          <div className="carousel space-x-2 md:space-x-12">
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Tshirt4"} Item4={"https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"}
               Item3={"https://itsinji.com/cdn/shop/files/0DA54DEE-AD7F-4BBC-86E4-A7670A1230A5_540x.jpg?v=1717322015"}/>
            </div>
            <div className="carousel-item">
            <FeaturedCollectionCard Item1={"Tshirt5"} Item4={"https://itsinji.com/cdn/shop/files/0DA54DEE-AD7F-4BBC-86E4-A7670A1230A5_540x.jpg?v=1717322015"}
            Item3={"https://itsinji.com/cdn/shop/files/CF1FAB2D-5ACD-45A2-80A3-B64E82EDC003_540x.jpg?v=1717322310"}/>
            </div>
            <div className="carousel-item">
            <FeaturedCollectionCard Item1={"Tshirt6"} Item4={"https://itsinji.com/cdn/shop/files/CF1FAB2D-5ACD-45A2-80A3-B64E82EDC003_540x.jpg?v=1717322310"}
              Item3={"https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"}/>
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