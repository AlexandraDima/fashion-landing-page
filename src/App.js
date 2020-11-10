import React from 'react';
import Blog from './containers/Blog/Blog';
import Cursor from './components/Cursor/Cursor'; 
import Layout from './components/Layout/Layout';
import './App.css';

function App() {
  
  return (
    <div className="App">
       <Cursor /> 

      <Layout>
 
      <Blog />

      </Layout>

    </div>
  );
}

export default App;
