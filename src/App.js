import './App.css';
import './scss/main.css';
import React from 'react';

import logo from './img/logo.png';

function App () {

  function clickHandler(url) {

    if (document.querySelector('#response'))
      document.querySelector('#response').innerHTML = 'Please wait...';

    let GETURL = 'http://localhost/src/scripts/load.php?type=';
    GETURL += url;

    console.log(GETURL);

    fetch(GETURL, {
      method: 'POST',
      body: JSON.stringify({ action: 1})
    })
    .then (response => response.text())
    .then (response => {
      document.querySelector('#response').innerHTML = response;

      if (document.querySelector('#response').innerHTML === '') {
        document.querySelector('#response').innerHTML = 'Your search parameters did not match any partners. Please try different search.';
      }
    })
  }

  clickHandler('');

  const requestPartner = (event) => {
    clickHandler(event.target.value);
 };

  return (
    <div>
      <header className="header"><div className="header__logo"><img src={logo} alt={"logo"} /></div></header>
      <div className='main'>
        <h1 className='main__h1'>Netwrix Partner Locator</h1>
        <h2 className='main__h2'>Hundreds of Netwrix partners around the world are standing by to help you. 
        <br /> 
        With our Partner Locator you can easily find the list of authorized partners in your area.</h2>
        <div>
          <input type="text" className='main__text-input' placeholder='Search by company name or adress..'></input>
          <div className='main__form'>
            <div className='main__form--input'>
              <select onChange = {requestPartner}>
                <option selected disabled>Type</option>
                <option value="Preferred%20Partner">Preferred Partner</option>
                <option value="MSP%20Partner">MSP Partner</option>
                <option value="Distributor">Distributor</option>
                <option value="Elite%20Partner">Elite Partner</option>
                <option value="Premium%20Partner">Premium Partner</option>
                <option value="Nobody">Пустой результат (для наглядности)</option>
                <option value="">Показать всё</option>
              </select>
            </div>
            <div className='main__form--input'>
              <select disabled>
                <option>Country</option>
              </select>
            </div>
            <div className='main__form--input'>
              <select disabled>
                <option>State</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div id="response"></div>
    </div>
  );

}

export default App;
