import "./Main.css";
import img2 from "../Assests/image/logo.png";
import img3 from "../Assests/image/image 3.png";
import { Link } from "react-router-dom";

const Home = () => {
    return (
     <>
     
     <div className="main-page">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="main-box">
                <div className="box-logo">
                  <img src={img2} className="img-fluid w-50" alt="" srcSet="" />
                </div>
                <div className="box-img">
                  <img src={img3} className="img-fluid" srcSet="" />
                </div>
                <div className="box-link">
                  <Link to="">I am a Teacher</Link>
                  <Link to="">I am a Student</Link>
                </div>
                <div className="box-account-link">
                  <p>
                    Have an account ? <Link to="/Login">Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     </>
    );
};

export default Home;