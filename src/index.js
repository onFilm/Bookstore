import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';



const App = () =>{
    return(
        <div>
            <Routes/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));



