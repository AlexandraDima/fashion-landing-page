import React, {useState, useEffect, useRef} from 'react';
import Navigation from '../Navigation/Navigation';
import { TimelineMax} from "gsap";
import classes from "./Header.module.css";
const Header  = () => {
    const [navigationState, setToggleNav]= useState({
        showNavigation: false,
        button: false
    });
    const line1 = useRef();
    const line2 = useRef();
    const logo = useRef();
    const navBarSelect =  useRef();
    const show = navigationState.showNavigation;
    const tl = new TimelineMax();

    useEffect(() => {
      onToggleNav();
    }, []);
    const onToggleNav = () => {
      setToggleNav({showNavigation: !navigationState.showNavigation});
      if(show===true){
        tl.to(line1.current, 0.5, { rotate: "45", y: 5, background: "#58aeda" });
        tl.to(line2.current, 0.5, { rotate: "-45", y: -5, background: "#58aeda" });
        tl.to(logo.current, 1, {color: "#58aeda" }); 
        tl.to(navBarSelect.current, 1, { clipPath: "circle(2500px at 100% -10%)" }); 
       
      } else{
        tl.to(line1.current, 0.5, { rotate: "0", y: 0, background: "black" });
        tl.to(line2.current, 0.5, { rotate: "0", y: 0, background: "black" });
         tl.to(logo.current, 1, { color: "black" }); 
        tl.to(navBarSelect.current, 1, { opacity:0, clipPath: "circle(50px at 100% -10%)" });
      }
    }
    
   
    return(
    
        <header className={classes.navHeader} >
        <h1 id={classes.logo}><a href="/" ref={logo}>fashion.</a></h1>
        {/* Burger onClick show Navigation */}
        <span className={classes.burger}  onClick={onToggleNav} >
          <div className={classes.line1} ref={line1}></div>
          <div className={classes.line2} ref={line2}></div>
        </span>
        { !show ? <Navigation navBar={classes.navBar} ref={navBarSelect} /> : ''}
      </header>
    )
}

export default Header;