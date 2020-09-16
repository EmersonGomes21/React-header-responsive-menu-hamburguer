import React, {useState} from 'react';
import { FiLogOut } from 'react-icons/fi';
import './styles.css';

const Header = () => {

const [classOn, setClassOn] = useState(false);
      
  return (
    <header>
    <div className="container">
      <img className="logo-cyan" src="https://avatars0.githubusercontent.com/u/28929274?s=200&v=4" alt="logo Cyan"/>

      <div className = { classOn ? 'menu-section on' : 'menu-section'} onClick={() => setClassOn(!classOn)}>
           <div className="menu-toggle">
              <div className="one"></div>
              <div className="two"></div>
              <div className="three"></div>
           </div>

           <nav>
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/">MISSÂO</a>
              </li>
              <li>
                <a href="/">PRODUTOS</a>
              </li>
              <li>
                <a href="/">SOBRE NÓS</a>
              </li>
              <li>
                <a href="/">CONTATO</a>  
              </li>
              <li>
                <a className={classOn ? 'show' : 'hide'} href="/login">SAIR <FiLogOut className="FiLogOut" /> </a>
             
              </li>
            </ul>
          </nav>

          </div>
        </div>

      </header>

      )
    }
    
export default Header;
