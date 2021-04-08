import './styles/Header.css'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from "react-router-dom";
import Home from './components/Home';
import { createRef, useEffect, useState } from 'react';
import Skills from './components/Skills';
import Contact from './components/Contact';


function App() {

  const [header, setHeader] = useState(false)

  useEffect(() => {
    document.addEventListener('scroll', (e) => {
      console.log('test')
      if(window.scrollY > 0){
        setHeader(true)
      }
      if(window.scrollY === 0){
        setHeader(false)
      }
    })
  }, [])

  const handleTheme = function(){
    let html = document.querySelector('html')
    if(html.getAttribute('theme') === 'black'){
      html.setAttribute('theme', 'white')
    }
    else{
      html.setAttribute('theme', 'black')
    }
  }

  return (
    <Router>
      <div className="App">
        <header className={header ? 'header_app active' : 'header_app'}>
          <div className="header_container center_container">
            <h1 className="header_title"><Link to="/">Quentin Vandevorst</Link></h1>
            <nav className="header_nav">
              <ul className="header_nav_list">
                <li className="header_nav_list_item"><NavLink activeClassName="selected" exact to="/">Accueil</NavLink></li>
                <li className="header_nav_list_item"><NavLink activeClassName="selected" exact to="/skills">Mes compétences</NavLink></li>
                {/* <li className="header_nav_list_item"><NavLink activeClassName="selected" exact to="/achievements">Mes réalisations</NavLink></li> */}
                <li className="header_nav_list_item"><NavLink activeClassName="selected" exact to="/contact">Contactez-moi</NavLink></li>
                <li className="header_nav_list_item"><button onClick={() => handleTheme()} className="header_light"><i className="fas fa-lightbulb"></i></button></li>
              </ul>
            </nav>
          </div>
        </header>
        <main className="main_app">
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/skills" component={Skills}></Route>
          <Route exact path="/contact" component={Contact}></Route>
        </main>
      </div>
    </Router>
  );
}

export default App;
