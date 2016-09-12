import React from 'react';

class Footer extends React.Component {
  render() {
    var borderColor = '#e6e3e3';
    var styles = {
      footer : {
        //borderRadius: '3px',
        //border: '1px solid ' + borderColor,
        height: '40px',
        marginLeft: '10px',
        padding: '0px 10px 0px 10px',
        display: 'block',
        //background: '#f5f5eb',
        bottom: '0px',
        }
      }

   return (
        <div style={styles.footer}>
        <p>© 2016 MedSleuth, Inc.   All rights reserved.</p>
          </div>
    );
  }
}

export default Footer;
