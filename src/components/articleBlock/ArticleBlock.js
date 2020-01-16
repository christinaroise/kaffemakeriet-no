import React from 'react'
import './articleBlock.css'
import BlogpostLib from '../BlogpostLib/BlogpostLib'

import cafe from '../../images/cafe.jpg'
import artCappuccino from '../../images/artCappuccino.jpg'
import cafeDate from '../../images/cafeDate.jpg'

const ArticleBlock = (props) =>{

    const blogposts = [
        {
            title: "Sommerens beste iskaffe",
            url: cafe,
            date: "Juni 2018",
            description: "Vi vet ikke med deg, men her hos oss nyter vi lange, varme sommerdager med et glass kald iskaffe. Spesielt godt er det med en dæsj av en kanskje litt overranske ingrediens."
        },
        {
            title: "Kan vi friste med et kurs?",
            url: artCappuccino,
            date: "Mai 2018",
            description: "Det er ingen ting som slår en virkelig god kaffe. Det er en kunst å få til den perfekte koppen, men ingen vitenskap. Med andre ord, vi ønsker å dele vår kunnskap med DEG."
        },
        {
            title: "Live + Tore = Sant",
            url: cafeDate,
            date: "April 2018",
            description: "Noen ganger, så tikker det inn fine meldiger fra våre besøkende, men denne historien er virkelig nydelig. Tenk at det blir et Kaffemakeriet bryllup!"
        }
    ]

    // The thought here is that each Blogtitle on Home will lead to a blogpost. 

    return(
        <div className="articleBlock-columns">
            {
            blogposts.map(
              (blogpost, i) =>
                <BlogpostLib 
                  key={i}
                  url={blogpost.url}
                  title={blogpost.title}
                  description={blogpost.description}
                  date={blogpost.date}
                />
            ) 
            }
        </div>
    )
}
 
export default ArticleBlock