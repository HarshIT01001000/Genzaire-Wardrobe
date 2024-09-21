import FeaturedCollectionCard from "../homePagesReuseable/FeaturedCollectionCard";
import { Link } from "react-router-dom";


function SaleCollection() {
    
  
    return (
      <>
    <div className=" text-center text-2xl font-semibold lg:text-3xl mt-[-6rem]  md:mt-[-3rem] mb-[5rem]">SALE</div>

    {/* collection start here */}
       <div className="flex justify-center items-center rounded-sm">
          <div className="carousel space-x-2 md:space-x-12">
            <div className="carousel-item">
            <FeaturedCollectionCard
              Item1={"Tshirt4"}
              Item4={"https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"}
              Item3={"https://itsinji.com/cdn/shop/files/0DA54DEE-AD7F-4BBC-86E4-A7670A1230A5_540x.jpg?v=1717322015"}
              item5={
                <>
                  <Link
                    to={{
                      pathname: "/BuyNow", // Define the route
                    }}
                    state={{
                      item1: "Tshirt4", // Pass the item details as state
                      item2: "$29.99", // Example price
                      item3: "https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"
                    }}
                  >
                    <button className="btn bg-slate-400">Buy Now</button>
                  </Link>
                </>
              }
            />
            </div>
            <div className="carousel-item">
            <FeaturedCollectionCard Item1={"Tshirt5"} Item4={"https://itsinji.com/cdn/shop/files/0DA54DEE-AD7F-4BBC-86E4-A7670A1230A5_540x.jpg?v=1717322015"}
            Item3={"https://itsinji.com/cdn/shop/files/CF1FAB2D-5ACD-45A2-80A3-B64E82EDC003_540x.jpg?v=1717322310"}
            item5={<>  <Link
              to={{
                pathname: "/BuyNow", // Define the route
              }}
              state={{
                item1: "Tshirt4", // Pass the item details as state
                item2: "$29.99", // Example price
                item3: "https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"
              }}
            >
              <button className="btn bg-slate-400">Buy Now</button>
            </Link></>}

            />
            </div>
            <div className="carousel-item">
            <FeaturedCollectionCard Item1={"Tshirt6"} Item4={"https://itsinji.com/cdn/shop/files/CF1FAB2D-5ACD-45A2-80A3-B64E82EDC003_540x.jpg?v=1717322310"}
              Item3={"https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"}
              item5={<>  <Link
                to={{
                  pathname: "/BuyNow", // Define the route
                }}
                state={{
                  item1: "Tshirt4", // Pass the item details as state
                  item2: "$29.99", // Example price
                  item3: "https://itsinji.com/cdn/shop/files/22BAC874-7BD8-414B-B13E-CC6CE66A951E_540x.jpg?v=1722584447"
                }}
              >
                <button className="btn bg-slate-400">Buy Now</button>
              </Link></>}
              />
            </div>
          </div>
        </div>

        {/* button */}
       <div className="flex justify-center items-center mb-[3rem]"> 
        <button className="btn bg-white">Shop Now</button>
       </div>
      </>
    )
  }
  
  export default SaleCollection