import 'bootstrap/dist/css/bootstrap.min.css'
import './Front.css';
import { Link } from 'react-router-dom';
import Video from '../video/Intro.mp4';

function App() {
  return (
    <>

<div className='myvideo'>
      <video src={Video} autoPlay loop muted />
      
      <div className="content">
<div className='nav1 w-100'>
      <nav className="navbar navbar-expand-lg navbar-light  position-absolute">
  <div className="container-fluid">
    <a className="navbar-brand" href="#" style={{color:"white"}}>Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse"id="navbarNavDropdown">
      <ul className="navbar-nav" style={{paddingLeft:810,color:"white"}}>
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="Books">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Features</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</div>

      <div className="text-center">

      <h1 style={{fontSize:70,fontWeight:'bold',}}>Your <span className='text-danger' style={{fontSize:80}}>Window </span>to <span className='text-danger' style={{fontSize:80}}>Infinite</span> Words</h1>
      <p style={{padding:10,backgroundColor:"transparent"}}>
Welcome to [Your Bookstore Name], where the magic of storytelling awaits! Dive into our curated collection of books spanning across genres, from captivating classics to thrilling bestsellers. Our dedicated team is here to guide you to your next literary adventure, offering personalized recommendations and exceptional service. Join our vibrant community of book lovers and stay updated on the latest arrivals, author events, and exclusive offers by subscribing to our newsletter. </p>

      <button className='bg-warning text-center' style={{border :'2px solid blue',borderRadius:"10px",width:'130px',height:'40px',fontWeight:"normal",fontSize:'20px',letterSpacing:'2px'}}><Link to="/signup">Explore</Link></button>
      </div>
     
      </div>
      </div>

  



 
  </>
  );
}

export default App;

