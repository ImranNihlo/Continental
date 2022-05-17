import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Navbar'
import Carousel from './Carousel'
import "./app.css"
import Footer from './Footer'
import Router from './Router'

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Router />
      <Footer />
    </div>
  );
}

export default App;
