import React from 'react'
import './articleBlock.css'
import BlogpostLib from '../BlogpostLib/BlogpostLib'

import KM1 from '../../images/KM1.png'
import KM2 from '../../images/KM2.png'
import KM3 from '../../images/KM3.png'

const ArticleBlock = (props) =>{

    const blogposts = [
        {
            title: "KAFFEMAKERIET",
            url: KM1,
            date: "30 likes",
            description: "I helgen er det lov å unne seg ekstra god kaffe. Kom innom så hjelper vi deg å finne din favoritt!☕️❤️"
        },
        {
            title: "KAFFEMAKERIET",
            url: KM2,
            date: "25 likes",
            description: "Vi har hyllene fulle av deilig kaffe☕️ har du prøvd vår økologiske sommerkaffe fra Etiopia? Kom innom så hjelper vi deg å finne din favoritt!🤗 #solbergoghansen #coffe #kaffemakeriet"
        },
        {
            title: "KAFFEMAKERIET",
            url: KM3,
            date: "28 likes",
            description: "Sommeren nærmer seg nå! Kom innom og kjøl deg ned med en deilig iskaffe🤤😍 #solbergoghansen #metrosenter #jessheimstorsenter #coffe #summer"
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
                />
            ) 
            }
        </div>
    )
}
 
export default ArticleBlock