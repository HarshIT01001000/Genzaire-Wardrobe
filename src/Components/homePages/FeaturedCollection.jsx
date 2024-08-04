import FeaturedCollectionCard from "../homePagesReuseable/FeaturedCollectionCard";
import img from "/ImageUse/Harshit.jpeg"
import img2 from "/ImageUse/Shantanu.png"

function FeaturedCollection() {
  return (
    <>
      <div className="min-h-screen w-full">

        <div className="text-center text-2xl font-semibold lg:text-3xl mt-[3rem] mb-[3rem]">
          Featured Collection
        </div>

        {/* collection start here */}
        <div className="flex justify-center items-center rounded-sm">
          <div className="carousel space-x-2 md:space-x-12">
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Universality"} 
              Item3={"https://itsinji.com/cdn/shop/files/D9A34A3C-1918-470E-A0AF-0EFFB958924D_180x.jpg?v=1721982455"} 
              Item4={"https://itsinji.com/cdn/shop/files/505AE9A2-4479-45DD-855F-052850BBF1FB_180x.jpg?v=1722584425"} />
            </div>
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Lifeless innovation"} 
              Item3={"https://itsinji.com/cdn/shop/files/C5AAD91D-553D-43E5-A2FD-F33CE882CDC3_180x.jpg?v=1722584176"} 
              Item4={"https://itsinji.com/cdn/shop/files/D9A34A3C-1918-470E-A0AF-0EFFB958924D_180x.jpg?v=1721982455"} />
            </div>
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Dejection"}
              Item3={"https://itsinji.com/cdn/shop/files/505AE9A2-4479-45DD-855F-052850BBF1FB_180x.jpg?v=1722584425"} 
              Item4={"https://itsinji.com/cdn/shop/files/C5AAD91D-553D-43E5-A2FD-F33CE882CDC3_180x.jpg?v=1722584176"} />
            </div>
          </div>
        </div>
        
        {/* button */}
       <div className="flex justify-center items-center mt-[3rem]"> 
        <button className="btn bg-white">Shop Now</button>
       </div>
      </div>
    </>
  );
}

export default FeaturedCollection;
