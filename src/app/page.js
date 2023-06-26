import AllVolunteers from "@/Components/AllVolunteer/AllVolunteers";
import Banner from "@/Components/Banner/Banner";
import CommonQuestion from "@/Components/CommonQuestion/CommonQuestion";
import Difference from "@/Components/Difference/Difference";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Difference></Difference>
      <CommonQuestion></CommonQuestion>
      <AllVolunteers></AllVolunteers>
    
    </div>
  )
}


export default Home;
