import Header from "../../components/header/Header"
import Main from "../../components/main/Main"
import SwiperVertical from "../Swiper/Swiper"

const Home = () => {
  return (
    <div className="home">
      <Header/> 
      <div className="h-[70vh] w-[80vw] max-sm:w-[100vw] mx-auto max-lg:px-1 relative">
      <SwiperVertical/>
      </div>
      <main className="container z-50 mt-[35vh] max-md:mt-[15vh] max-lg:mt-0">
        <Main/>
      </main>
    </div>
  )
}

export default Home
