import React from 'react';
import Header from '../Header/Header';
import './Layout.css';


const Layout = (props) => (
    <div className="container-fluid">
    <div>
        <Header />
       {/*  <Cursor /> */}

    </div>
    <main>
        {props.children}
    </main>
    </div>
)

export default Layout;