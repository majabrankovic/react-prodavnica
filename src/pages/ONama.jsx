import {RiQuestionnaireFill} from "react-icons/ri"
import './ONama.css';

function ONama() {
    return (
      <div  className='onama'>

      <div className="onama-text">
          <> O nama <RiQuestionnaireFill></RiQuestionnaireFill></>
      </div>

      <br /><br /><br /><br /><br />
     
      <div className="flex-container">
          <div className="kontejner">
              <h2 className="naslov">Cilj sajta:</h2>
              <p className="tekst"> Handbag Heaven je vodeća destinacija za modno osvezene pojedince koji traže ultimativno u luksuznim torbicama. 
                Ovaj sofisticiran i stiliziran butik nudi širok izbor visokokvalitetnih torbi i dodataka, 
                svaki ručno odabran kako bi se osigurala izvanredna kvaliteta i izrada.<br></br> <br></br>
                U Handbag Heaven-u, kupci se mogu opustiti uz najnovije modne trendove i stilove,
                 birajući iz širokog spektra materijala, uključujući kožu, suede i egzotične kože.
                  Stručni tim stilista butika spreman je pružiti savjet i uputstva, osiguravajući da 
                  svaki kupac pronađe savršenu torbu koja odgovara njihovom ličnom ukusu i stilu.<br></br> <br></br>
                  Gucci, Prada, Guess, Louis Vuitton i Michael Kors su neka od najpoznatijih i traženih
                   modnih brendova u svijetu, poznati po svojim luksuznim i stiliziranim torbama. 
                   Ovi dizajnerski brendovi nude širok raspon torbi koje su istovremeno funkcionalne i modne,
                    svaki sa svojim jedinstvenim izgledom i stilom.
                 </p>
          </div>
          <div className="onama-slika">
            <img className="slika"src="https://images.squarespace-cdn.com/content/v1/5e8a64d2219c891ea2e21cb9/1626836795726-4WJ4SG1NADIJHFESPGE9/3.png" alt="torbe" />
          </div>

        </div>  

    </div>

    );
  }

export default ONama