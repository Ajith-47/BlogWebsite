import React from 'react';
import {Link,Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';


function Layout(){
    return(
        <body>
          <Header />
            <main>
                <Outlet />
            </main>
          <Footer />
        </body>
    );
}

export default Layout;