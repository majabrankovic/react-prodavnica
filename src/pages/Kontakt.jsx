import React from 'react'
import kontakt from '../images/kontakt.jpg';
import './Kontakt.css';
import { useState } from "react";

function Kontakt() {

  const [showMessage, setShowMessage] = useState(false);


  const poruka = (event) => {
    event.preventDefault();
    setShowMessage(true);
    alert("Uspesno ste poslali poruku.");
    event.target.reset();
  };

  return (
      <div className='kontakt'>
          <div className='kontaktLeftColumn'>
              <h2>Imate pitanje? Pišite nam!</h2>
              <form id='kontaktForm' onSubmit={poruka}>
                  <label htmlFor='ime'>Ime i prezime</label>
                  <br></br>
                  <input name='ime' placeholder='Unesite ime i prezime...' type='text' required />
                   <label htmlFor='email'>Email adresa</label>
                   <br></br>
                  <input name='email' placeholder='Unesite email adresu...' type='email' required />
                  <label htmlFor='komentar'>Komentar</label>
                  <textarea name='komentar' rows='5' placeholder='Unesite poruku...' required></textarea>
                  <button type='submit'>Pošalji</button>
                  {showMessage}
              </form>
          </div>

          <div className='kontaktRightColumn' style={{ backgroundImage : `url(${kontakt})` }}></div>
    </div>
  )
}

export default Kontakt