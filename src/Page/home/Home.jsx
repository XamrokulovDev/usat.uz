import Main from "../../components/main/Main"
import Header from "../header/Header"

const Home = () => {
  return (
    <div className="home">
      <Header/>
      <main className="container z-50 mt-[110vh] max-md:mt-[75vh] max-lg:mt-[75vh] max-md:mt-[15vh] max-lg:mt-[80vh]">
        <Main/>
      </main>
    </div>
  )
}

export default Home
