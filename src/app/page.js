import AllVolunteers from "@/Components/AllVolunteer/AllVolunteers";
import Banner from "@/Components/Banner/Banner";
import CommonQuestion from "@/Components/CommonQuestion/CommonQuestion";
import Difference from "@/Components/Difference/Difference";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Difference></Difference>
      <AllVolunteers></AllVolunteers>
      <CommonQuestion></CommonQuestion>
    
    </div>
  )
}


export default Home;
