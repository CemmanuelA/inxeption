import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import AppContext from '../../../appContext/appContext';

const Layout = (props) => {
    return (
        <div style={{paddingTop: 10 + 'vh'}}>
            <Router>
                <AppContext>
                        <Header/>
                        {props.children}
                        <Footer />
                </AppContext>
            </Router>
        </div>
    );
}
export default Layout;