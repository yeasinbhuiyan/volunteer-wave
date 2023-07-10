import AllVolunteers from "@/Components/AllVolunteer/AllVolunteers";
import Banner from "@/Components/Banner/Banner";
import CommonQuestion from "@/Components/CommonQuestion/CommonQuestion";
import Difference from "@/Components/Difference/Difference";
import FundraisingCommunity from "@/Components/FundraisingCommunity/FundraisingCommunity";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Difference></Difference>
      <AllVolunteers></AllVolunteers>
      <CommonQuestion></CommonQuestion>
      <FundraisingCommunity></FundraisingCommunity>
    
    </div>
  )
}


export default Home;
