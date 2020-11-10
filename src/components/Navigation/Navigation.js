import React from 'react';
import './Navigation.css';

const Navigation = (props) => (
    <nav className={props.navBar}>
    <ul className="nav-links">
    <h3><a href="https://twitter.com/" target="blank">Twitter</a></h3>
    <h3><a href="https://www.youtube.com/" target="blank">Youtube</a></h3>
    <h3><a href="https://instagram.com/" target="blank">Instagram</a></h3>
    </ul>
    <div className="contact">
      <h2>Stay in touch.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dolorem
        praesentium ea amet error quidem natus. Magnam explicabo sed tenetur?
      </p>
    </div>
  </nav>
)
export default Navigation;