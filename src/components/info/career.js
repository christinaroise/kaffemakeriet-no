import React from 'react'
import '../info/infoDiv.css'

import greenCoffeeCup from '../../images/greenCoffeeCup.jpg'

//On mobile, the way this HTML is built creates a challenge: elements are show in the wrong order. It should be img, txt, img, txt. I know how to fix it, I just didn't have time. 

const Career = () => {
    return(
        <div className="infoDiv">
                <div className="infoDivImgContainter">
                    <img src={greenCoffeeCup}/>
                </div>
                <div>
                    <h4>Ønsker du å bli en kaffemaker?</h4>
                    <h5>Som en kaffemaker i Kaffemakeriet er du en del av et fellesskap som alltid er i utvikling.</h5>
                    <p>Kaffemakeriet er mye mer enn kaffe fra en trakter elle en espressomaskin. Vi søker det lille ekstra i den du er og ønsker det beste i hva du er for kunder og kolleger. For å bli en ekte kaffemaker vil du gjennom vårt kunnskapskurs få full opplæring i Kaffemakeriets hverdag. Vi er opptatt av dine grunnleggende egenskaper som menneske, og ønsker at du trives i en hektisk hverdag hvor du setter god kundeservice i høysetet. Du har en brennende lidenskap for godt håndverk og selvfølgelig liker du kaffe. Høres dette spennende ut? Da vil vi gjerne høre mer om deg. Send gjerne en søknad til: <a>post@kaffemakeriet.no</a></p>
                    <h5>God kaffe med en god opplevelse skapes rett og slett av flink folk.</h5>
                </div>
            </div>
    )
}

export default Career