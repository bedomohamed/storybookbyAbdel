import './Navbar.css';


export const Navbar = () => {
    return (<div>
        <ul className="nav">
            <li className="nav-item slam-left"><a href="#">Brand</a></li>
            <li className="nav-item"><a href="#">Home</a></li>
            <li className="nav-item"><a href="#">About</a></li>
            <li className="nav-item"><a className="contact" href="#">Contact</a></li>
        </ul>
    </div>
);
  }
  