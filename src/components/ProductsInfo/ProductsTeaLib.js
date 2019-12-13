import React, {useState} from 'react';


const ProductsTeaLib = (props) => {

    var productTeas = [
        {
        title: "Pai Mu Tan",
        url: "../../assets/images/products/paimutan.png", 
        description: "Pai Mu Tan er mild, søt og lett floral. En ren og delikat hvit te som er blant verdens mest populære innen sin kategori. Den har en lys grønn farge i koppen. Pai Mu Tan plukkes om våren i den berømte Fujian-provinsen i Kina.",
        productID: "Te",
        type: "Hvit te",
        ingredients: "ren hvit te fra Fujian, Kina."
        },
        {
        title: "Sjasmin tai Mu Long",
        url: "../../assets/images/products/sjasmintaimulong.png", 
        description: 'Disse mytiske "dragekulene" har rullet seg gjennom 100 års kinesisk historie. De håndrullede tebladene aromatisert med nyinnhøstede sjasminblomster er en unik kvalitet fra teverdens skattekammer.Tai Mu Long er lett, søt og saftig med balansert smak av sjasmin. Den består av håndrullede kuler som åpner seg under brygging. Teen har en delikat og lys farge i koppen med en nydelig og floral duft.',
        productID: "Te",
        type: "Hvit te",
        ingredients: "ren hvit te fra Kina, naturlig smaksatt med sjasminblomster."
        },
        {
        title: "Yin Zhen/Silver Needle",
        url: "../../assets/images/products/silverNeedle.png", 
        description: 'Silver needle er first flush te, håndplukkede knopper som gjør teen delikat, frisk og floral. Hvit te kommer fra den umodne knoppen, fortsatt beskyttet av lyst "hår" som gir teen den distinktive fargen og formen. Dette er en delikat, frisk og floral te med lett sødme og en behagelig ettersmak.',
        productID: "Te",
        type: "Hvit te",
        ingredients: "ren hvit te fra Fujian, Kina."
        },
        {
        title: "Formosa Oolong",
        url: "../../assets/images/products/formosaOolong.png", 
        description: "Formosa Oolong er en mørkere oolongkvalitet fra Taiwan, som består av mørkebrune blader og kvister fra teplanten. Teen har en søtlig smak og lett munnfølelse. Den har et hint av tanniner, uten bitterhet. Oolong-te er ristet og oksidert mellom 50-70%, som gjør den til en mellomting mellom grønn og sort te.",
        origin: "Taiwan",
        productID: "Te",
        type: "Oolong",
        ingredients: "Ren oolong-te."
        },
        {
        title: "Milky Oolong",
        url: "../../assets/images/products/MilkyOolong.png", 
        description: "Denne teen har florale og fruktige noter som flommer ut av koppen med en tiltrekkende aroma av søt melk.",
        origin: "Kina",
        productID: "Te",
        type: "Oolong ",
        ingredients: "Oolong te, smakstilsetninger"
        },
        {
        title: "Taiwan Wen-Shan Pouchong Olong",
        url: "../../assets/images/products/taiwanwenshan.png", 
        description: "En stedsegen oolong-te med duft av syrin. Smaksforventninger til tropisk frukt og noe bitterhet som i grapefrukt.",
        origin: "Taiwan",
        productID: "Te",
        type: "Oolong",
        ingredients: "Ren oolong-te fra Taiwan."
        },
        {
        title: "Rooibos med nordiske bær",
        url: "../../assets/images/products/rooibosNordiskebaer.png", 
        description: "En bærbombe med smak av bjørnebær, solbær, tranebær, bringebær og blåbær. Lett krydret avslutning med einebær og tyttebær. Denne teen inneholder ikke koffein, og passer dermed godt til å nyte på kvelden.",
        productID: "Te",
        type: "Rooibos, smaksatt",
        ingredients: "Rooibos, einebær, bjørnebær, bjørnebærblader, solbærblader, tranebær, bringebær, blåbær, tyttebær."
        },
        {
        title: "Roooibos Naturell",
        url: "../../assets/images/products/roooibosNaturell.png", 
        description: "Rooibos er mild, delikat og lett søtlig i koppen. Teen kommer fra den sørafrikanske Rooibosbusken og inneholder ikke koffein. Rooibos betyr rød busk og navnet har hollandsk herkomst. Busken tilhører plantegruppen Aspalathus Linearis og finnes kun i Sør-Afrika.",
        productID: "Te",
        type: "Rooibos",
        ingredients: "Ren rooibos fra Sør-Afrika."
        },
        {
        title: "Rooibos Fireside",
        url: "../../assets/images/products/rooibosFireside.png", 
        description: "Rooibos med et lunt preg av kanel og appelsin. Koffeinfri. Rooibos betyr rød busk og navnet har hollandsk herkomst. Busken tilhører plantegruppen Aspalathus Linearis og finnes kun i Sør-Afrika. Planten inneholder ikke koffein.",
        productID: "Te",
        type: "Rooibos, smaksatt",
        ingredients: "rooibos-te, aroma, nellik."
        },
        {
        title: "Monkey",
        url: "../../assets/images/products/monkey.png", 
        description: "Monkey er kinesisk, håndrullet spesialitet fra Fukien-provinsen. Blant grønne teer er denne honninggule favoritten usedvanlig søt og floral. Teen er voluminøs med mye toppskudd og er av høy kvalitet. Minner om hvit te på grunn av de dunete knoppene.",
        productID: "Te",
        type: "Ren grønn te",
        ingredients: "ren grønn te fra Fuijan, Kina."
        },
        {
        title: "Sencha",
        url: "../../assets/images/products/sencha.png", 
        description: "Sencha er kanskje den mest berømte blant grønne tekvaliteter. Teen har røtter tilbake til den japanske tekulturens opprinnelse, da munken Eisai på 1100-tallet tok med tefrø fra Kina til Japan og plantet de i Kyoto. Dette er en svært karakteristisk grønn te, både på utseende og smak. Bladene er flate og varierer i størrelse, i motsetning til de karakteristiske rullede formene vi forbinder med te. Smaken er vegetal og saltaktig med mye umami. Teen har en lett, søtlig munnfølelse og noe tanniner. Irrgrønn farge i koppen.",
        productID: "Te",
        type: "Ren grønn te",
        ingredients: "ren grønn te fra Japan."
        },
        {
        title: "Ananas & Gurkemeie",
        url: "../../assets/images/products/ananasGurkemeie.png", 
        description: "En lett og saftig grønn te med smak av søt ananas og lune toner av gurkemeie.",
        productID: "Te",
        type: "Grønn te",
        ingredients: " grønn te (Sencha, Chun Mee), kandiserte anansbiter (ananas, sukker, sitronsyre), aroma, gurkemeiepulver, teblomster."
        },
        {
        title: "Energi te med Goji og Acai",
        url: "../../assets/images/products/gojiAcai.png", 
        description: "Denne saftige og friske teen fyller opp reservene med en energigivende blanding av grønn te, gojibær, bringebær, eple og acai.",
        productID: "Te",
        type: "Grønn smaksatt te",
        ingredients: "grønn te, hibiskus, nypeskall, eplebiter, gojibær, aroma, bringebærbiter og acaipulver (acai, maltodekstrin, antiklumpemiddel: silisiumdioksid)."
        },
        {
        title: "Eple & Kanel",
        url: "../../assets/images/products/epleKanel.png", 
        description: "En deilig grønn te med en delikat smak av søte epler og et hint av varmende kanel.",
        productID: "Te",
        type: "Grønn smaksatt te",
        ingredients: "grønn te, aroma, eplebiter, kanel, mandelbiter og biter av vaniljeekstrakt. Allergener: mandler. Kan inneholde spor av andre nøtter."
        },
        {
        title: "Japan Genmaicha",
        url: "../../assets/images/products/japanGenmaicha.png", 
        description: "En balansert blanding av to japanske favoritter: grønn te og ristet ris. En velsmakende te med en lett røket smak som passer utmerket til sushi. Lett munnfølelse, elegant og lys i koppen.",
        productID: "Te",
        type: "Ren grønn te",
        ingredients: "økologisk ren grønn te med ristet ris."
        },
        {
        title: "Morgenfrisk Sitrus",
        url: "../../assets/images/products/morgenfriskSitrus.png", 
        description: "Den perfekte start på dagen. En oppkvikkende grønn te med pirrende innslag av lime, urter og ingefær. Teen er økologisk.",
        productID: "Te",
        type: "Grønn smaksatt te",
        ingredients: "grønn te, sitrusskall, ingefær, kanel, sitronmyrtel, gulrot, lakrisrot, naturlig aroma."
        },
        {
        title: "Myrtel Ingefær",
        url: "../../assets/images/products/myrtelingefaer.png", 
        description: "Blant våre favoritter av smaksatte, grønne teer. Ren og kraftig smak av naturlig ingefær med friske innslag av sitrus og urter.",
        productID: "Te",
        type: "Grønn smaksatt te",
        ingredients: "grønn te, sitronmyrt, sitrusskall, ingefær, sitrongress, appelsinbiter, teblomster, aroma."
        },
        {
        title: "Tranebær & Granateple",
        url: "../../assets/images/products/tranebaerGranateple.png", 
        description: "En mild og velbalansert grønn te med smak av syrlig granateple og saftige tranebær.",
        productID: "Te",
        type: "Grønn te",
        ingredients: "grønn te (Sencha, Chun Mee), eplebiter, hibiskus, bjørnebærblader, rødbetebiter, aroma, roseblader, granateplekjerner, tranebærskiver."
        },
    ]

    
}

export default ProductsTeaLib