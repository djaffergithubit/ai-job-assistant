import Hero from '../components/Home/Hero'
import Functionalities from '../components/Home/Functionalities'
import ProcessComponent from '../components/Home/ProcessComponent'
import NavBar from '../components/NavBar'

const Home = () => {
  return (
    <main>
        <div className=' w-full'>
          <NavBar />
        </div>
        <Hero />
        <Functionalities />
        <ProcessComponent />
    </main>
  )
}

export default Home