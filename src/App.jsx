import './App.css'
import Header from './component/header/header'
import Navbar from './component/navbar/Navbar'
import Service from './component/service/Service'
import Destination from './component/Destination/Destination'
import Book from './component/Book/Book'
import Testimonial from './component/Testimonial/Testimonial'
import Logo from './component/Logo/Logo'
import Newsletter from './component/Newletter/Newsletter'
import Footer from './component/Footer/Footer'

function App() {

  return (
    <div className="App">
      <div>
        
        <h1>Wlcome</h1>
        <Navbar />
        <Header />
        <Service />
        <Destination />
        <Book />
        <Testimonial />
        <Logo />
        <Newsletter />
        <Footer />
        
      </div>
    </div>
  )
}

export default App
