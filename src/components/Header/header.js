import React from 'react';
import Logo from './assets/logo.png';
import classes from './header.module.css';

const Header = () => {

     return <>
          <div className={classes.root}>
               <div className={classes.header}>
                    <div className={classes.logo}>
                         <img src={Logo} alt=""/>
                    </div>
                    <div className={classes.navigation}>
                         <ul>
                              <li>
                                   <a href='/'>
                                        Home
                                   </a>
                              </li>
                         </ul>
                    </div>
               </div>
          </div>
     </>
}

export default Header;