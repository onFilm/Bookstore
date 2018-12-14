import React from 'react';
import '../index.css';

export default class Header extends React.Component {
  render() {


   const styles= {
            footer : {
              backgroundColor : "black",
              position: "fixed",
              color : "white",
              textAlign : "center",
              bottom: 0,
              width: "100%"
            }
   }
   
   return (
      <footer style={styles.footer}>
        <p>Footer</p>
      </footer>
    );
  }
}