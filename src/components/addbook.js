import React from 'react';
import '../index.css';

export default class Addbook extends React.Component {
  render() {
    return (
     <div>
         <form>
             <div>
                 <label>Enter the Title of book:</label>
                <input type='text' ></input>
            </div>
            <div>
                 <label>Enter the Author of book:</label>
                <input type='text' ></input>
            </div>
            <div>
                 <label>Enter the ISBN of book:</label>
                <input type='text' ></input>
            </div>
            <div>
                 <label>Enter the Publication Date of book:</label>
                <input type='text' ></input>
            </div>
            <div>
                 <label>Enter the Publisher of book:</label>
                <input type='text' ></input>
            </div>
            <div>
                 <label>Enter the Price of book:</label>
                <input type='text' ></input>
            </div>
         </form>

     </div>
    );
  }
}