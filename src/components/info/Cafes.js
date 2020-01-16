import React from 'react'
import '../info/infoDiv.css'

import macbookCoffee from '../../images/macbookCoffee.jpg'
import redChairs from '../../images/redChairs.jpg'

const Cafes = () => {
    return(
        <div>
            <div className="infoDiv">
                <div className="infoDivImgContainter">
                    <img src={macbookCoffee}/>
                </div>
                <div>
                    <h4>Kaffemakeriet Metro</h4>
                    <p>Du er strandet på en øy. En øy du kun kan spise iskrem, drikke deilig kaffe og nyte sjokolade av høy kvalitet. Øya du befinner deg på er Kaffemakeriet på Metro. Du var egentlig på vei til en bestemt butikk for å ordne noe, men fikk lyst på noe godt å drikke på veien, og du stoppet da du ble blendet av gjenspeilet og det nærmest ultrablå lyset fra det du etterhvert innså var en svær kaffemaskin. Kaffemakern foran hiver melk i kanner og espresso i bajonetter, den ansatte er rask og du må snart bestemme deg. Egentlig vil du ha kaffe, men du legger merke til milkshaken som blir servert til kunden foran, og smoothien etter det. Du må nesten stoppe vannet som samler seg i munnen din. «Hei hei, kan jeg hjelpe deg?» lyder det foran deg, og du er klar!
                    Velkommen til Kaffemakeriet Metro.</p>
                </div>
            </div>
            <div className="infoDiv img2">
                <div>
                    <h4>Kaffemakeriet Jessheim</h4>
                    <p>Du er på Jessheim storsenter når du kjenner kaffetørsten sniker seg innpå ved lukten av nykvernet kaffe og ferske bakevarer. Du kikker deg rundt og får øye på noe som ligner en frisk og hyggelig oase. Når du nærmer deg er det som en åpenbaring av fristende produkter, kaffe i alle varianter, smoothie, sjokolade og is. Interiøret er innbydende og sitteplassene mange. Her er det noe for enhver smak og resten av familien har allerede benket seg ned på det store langbordet. Kaffemakeren bak disken smiler og spør hva du ønsker, å kommer med fristende anbefalinger.
                    Velkommen til Kaffemakeriet Jessheim.</p>
                </div>
                <div className="infoDivImgContainter">
                    <img src={redChairs}/>
                </div>
                
            </div>
        </div>
    )
}

export default Cafes