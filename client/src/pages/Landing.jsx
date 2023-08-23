import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage.js";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import Logo from "../components/Logo.jsx";

const Landing = () => {
   return (
      <Wrapper>
      <nav>
      <Logo/>
      </nav>
         <div className="container page">
            <div className="info">
               <h1>
                  Job <span> Tracking</span> app
               </h1>
               <p>
               Are you tired of juggling multiple job applications, interviews, and follow-ups? Introducing Jobify – your all-in-one solution to effortlessly manage your job search journey. Whether you are a recent graduate or a seasoned professional, Jobify empowers you to stay organized, focused, and ahead in your career aspirations.
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
