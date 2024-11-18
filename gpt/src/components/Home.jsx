import Hero from "./Hero"
import Navbar from "./Navbar"
import Products from "./Products"


const Home = () => {
  return (
    <div  className="bg-green-600">
      <Navbar/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default Home
