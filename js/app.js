import React from 'react';
import ReactDOM from 'react-dom';
import Request from 'superagent';

import Header from './Components/Header.js';
import Body from './Components/Body.js';
import Footer from './Components/Footer.js';

ReactDOM.render(
  (
    <div>
      <Header />
      <Body title="Patient History" main="Do you have or have had any of the following medical conditions?" question1="Cancer, Chemotherapy, and/or Radiation Therapy?" question2="Air and/or Lungs " question3="Blood Disorder (Abnormal Bruising, Bleeding, or Clotting) " />
      <Footer />
    </div>
  ),
document.getElementById('main')
);
