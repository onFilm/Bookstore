import React from 'react';
import { Route, Switch } from 'react-router-dom';
    import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Viewbooks from './components/Viewbooks'
import Addbook from './components/addbook'
import Updatebook from './components/updatebook'

const Routes = () => {
    return (
        <BrowserRouter>
          <div>
            <Header/>
                <Routes />
                    <Switch>
                            <Route path="/Viewbooks" component={Viewbooks}/>
                            <Route path="/addbook" component={Addbook}/>
                            <Route path="/updatebook" component={Updatebook}/>
                            <Route path="/" exact component={Routes}/>
                    </Switch>
            <Footer/>
         </div>
    </BrowserRouter>
      
            
                
            
      
    )
};

export default Routes;