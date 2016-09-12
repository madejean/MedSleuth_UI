import React from 'react';

/*------------------[MAIN LAYOUT]-----------------*/
class Body extends React.Component {
/*handles the user clicking on buttons*/
  yes () {
    alert('cliked yes');
    console.log('the user cliked yes');
  }
  no () {
    alert('clicked no');
    console.log('the user cliked no');
  }
  render () {
    /*------------------[STYLING]-----------------*/
    var borderColor = '#e6e3e3';
    var styles = {
      body : {
        padding: '10px 30px 10px 20px',
        //borderRadius: '3px',
        //border: '1px solid' + borderColor,
        height: '100%',
        background: '',
      },
      FormBox: {
        border: '3px solid' + borderColor,
        height: '400px',
        padding: '10px 50px 10px 20px',
      },
      questions: {
        display: 'flex',
        flexWrap: 'wrap',
        float:'left',
        width: '800px',
      },
      h1: {
        fontFamily: 'Open Sans',
      },
      h2: {
        fontFamily: 'Open Sans',
      },
      q: {
        overflow: 'hidden',
        display:'block',
        fontFamily: 'Open Sans',
        fontSize: '12pt',
        color: '#e56100',
        float: 'left',
      },
      p: {
        overflow: 'hidden',
        display: 'block',
        fontFamily: 'Open Sans',
        fontSize: '11pt',
        color: 'black',
        width:'600px',
      },

      buttons: {
        width: '60px',
        height: '50px',
        color: '#FFF',
        background: '#7bab96',
        display: 'block',
        float: 'right',
      },
    }
    return (
      /*------------------[APP BODY]-----------------*/
      <div style={styles.body}>
        <h1 style={styles.h1}>{this.props.title}</h1>
        <div style={styles.FormBox}>
        <h2 style={styles.h2}>{this.props.main}</h2>
        <br/>
        <div className="questions" style={styles.questions}>
        <div style={styles.q}>{this.props.question2} </div>
        <p>(for example, Asthma, Chronic, Cough, Difficulty Opening My Mouth, Sleep Apnea, Restrictive Lung Disease, Vocal Cord Polyps, I wear Oxygen to help me breathe, Pulmonary Fibrosis, Pneumothorax (Collapsed Lung), Interstitial Lung Disease(ILD))?</p>
        </div>
        <button style={styles.buttons} onClick={this.no}>No</button>
        <button style={styles.buttons} onClick={this.yes}>Yes</button>
        <div className="questions" style={styles.questions}>
        <div style={styles.q}>{this.props.question3}</div>
        <p>(for example, I have or had a clot in my leg (DVT), Hemophilia A (Factor VIII Deficiency), Von Willebrand Disease, Hypercoagulable State, Thalassemia, Heparin-Inducted Thrombocytopenia (HIT), Blood Transfusion, Idiopathic Thrombocytopenic Purpura (ITP), Antiphospholipid Antibody Syndrome)?</p>
        </div>
        <button style={styles.buttons} onClick={this.no}>No</button>
        <button style={styles.buttons} onClick={this.yes}>Yes</button>
        <div className="questions" style={styles.questions}>
        <p style={styles.q}>{this.props.question1}</p>
        </div>
        <br/>
        <button style={styles.buttons} onClick={this.no}>No</button>
        <button style={styles.buttons} onClick={this.yes}>Yes</button>
        </div>
      </div>
    )
  }
}

export default Body;
