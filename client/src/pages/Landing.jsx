import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
import logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

const Landing = () => {
   return (
      <Wrapper>
         <nav>
            <img src={logo} alt="logo jobify" className="logo" />
         </nav>
         <div className="container page">
            <div className="info">
               <h1>
                  Job<span>Tracking</span>app
               </h1>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
                  laborum magni veniam ullam. Dolorem quibusdam maxime maiores
                  dignissimos id recusandae quas illum ratione molestiae!
                  Similique ipsam blanditiis minus expedita eum ab vero,
                  sapiente quibusdam magni sit natus, atque nostrum!.
               </p>
               <Link to="/register" className="btn register-link">
                  Register
               </Link>
               <Link to="/login" className="btn">
                  Login / Demo
               </Link>
            </div>
            <img src={main} alt="job hunt" className="img main-img" />
         </div>
      </Wrapper>
   );
};

export default Landing;
