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
        <div className="flex justify-center items-center rounded-sm">
          <div className="carousel space-x-2 md:space-x-12">
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Universality"} 
              Item3={img2} 
              Item4={img} />
            </div>
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Lifeless innovation"} 
              Item3={"https://genzairewardrobe.netlify.app/Images/Lifeless.jpeg"} 
              Item4={"https://via.placeholder.com/300"} />
            </div>
            <div className="carousel-item">
              <FeaturedCollectionCard Item1={"Dejection"}
              Item3={"https://genzairewardrobe.netlify.app/Images/Dejection.jpeg"} 
              Item4={"https://via.placeholder.com/300"} />
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
