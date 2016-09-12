import React from 'react';

class Header extends React.Component {
  render() {
    var styles = {
      header : {
        height: '100px',
        marginLeft: '5px',
        marginRight: '5px',
        background:'#f5f5eb',
      },
      logo : {
        position: 'absolute',
        width: '300px',
        height: '90px',
        top: '15px',
        padding: '0px 10px 0px 10px',
      },
  };

  return (
    <div style={styles.header}>
      <img src='http://demo.webprepare.org/media/logo.png' style={styles.logo}/>
    </div>
    )
  }
}

export default Header;
