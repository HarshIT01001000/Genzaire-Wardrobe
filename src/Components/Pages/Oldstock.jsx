import FeaturedCollectionCard from "../homePagesReuseable/FeaturedCollectionCard";

function Oldstock(){
    return(

        <>
       <div className="flex justify-center space-x-8 mt-[5rem] mb-[5rem]">
       <FeaturedCollectionCard></FeaturedCollectionCard>
        <FeaturedCollectionCard></FeaturedCollectionCard>
        <FeaturedCollectionCard></FeaturedCollectionCard>
       </div>
        </>
    )
}
export default Oldstock