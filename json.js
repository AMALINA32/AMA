 
 
let hodiphile= [
    { 
"name":"TheMountainClimber", 
 "duration":12, 
 "ratingsAverage":4.7, 
 "price":567, 
 "difficulty":"easy", 
 "ratingsQuantity":13, 
 "summary":"Notforthefaint-hearted.Comeandputittothetest", 
 "description":"loremipsumdolorsitamet,consecteturadipiscingelit.Cumsoc.nomenloremdolor.Loremipsumdolorsitamet,consecteturadipiscingelit", 
 "imageCover":"./images/pure.jpg", 
 "images":["./image/first.jpg","./images/second.jpg","./images/third.jpg"], 
 "startDate":"2021-11-25" 
 }, 
 { 
 "name":"TheForestHiker", 
 "duration":15, 
 "ratingsAverage":4.9, 
 "price":456, 
 "difficulty":"hard", 
 "ratingsQuantity":10, 
 "summary":"Youcanalwaysfindsomethingtotalkabout", 
 "description":"loremipsumdolorsitamet,consecteturadipiscingelit.Cumsoc.nomenloremdolor.Loremipsumdolorsitamet,consecteturadipiscingelit", 
 "imageCover":"./images/pure.jpg", 
 "images":["./image/first.jpg","./images/second.jpg","./images/third.jpg"], 
 "startDate":"2021-11-25" 
  
 }, 
 { 
 "name":"TheDesertCowboy", 
 "duration":12, 
 "ratingsAverage":4.6, 
 "price":345, 
 "difficulty":"easy", 
 "ratingsQuantity":13, 
 "summary":"Walkthetalkandheadfortheeye", 
 "description":"loremipsumdolorsitamet,consecteturadipiscingelit.Cumsoc.nomenloremdolor.Loremipsumdolorsitamet,consecteturadipiscingelit", 
 "imageCover":"./images/pure.jpg", 
 "images":["./image/first.jpg","./images/second.jpg","./images/third.jpg"], 
 "startDate":"2021-11-25" 
  
 }, 
 { 
 "name":"TheRainforestTrekker", 
 "duration":18, 
 "ratingsAverage":4.7, 
 "price":480, 
 "difficulty":"easy", 
 "ratingsQuantity":13, 
 "summary":"Let'sputthoselungstothetest", 
 "description":"loremipsumdolorsitamet,consecteturadipiscingelit.Cumsoc.nomenloremdolor.Loremipsumdolorsitamet,consecteturadipiscingelit", 
 "imageCover":"./images/pure.jpg", 
 "images":["./image/first.jpg","./images/second.jpg","./images/third.jpg"], 
 "startDate":"2021-11-25" 
  
 }, 
 { 
 "name":"TheSnowman", 
 "duration":10, 
 "ratingsAverage":4.8, 
 "price":993, 
 "difficulty":"hard", 
 "ratingsQuantity":13, 
 "summary":"Avalanchestooareathing", 
 "description":"loremipsumdolorsitamet,consecteturadipiscingelit.Cumsoc.nomenloremdolor.Loremipsumdolorsitamet,consecteturadipiscingelit", 
 "imageCover":"./images/pure.jpg", 
 "images":["./image/first.jpg","./images/second.jpg","./images/third.jpg"], 
 "startDate":"2021-11-25" 
  
 }, 
 { 
 "name":"TheSeaExplorer", 
 "duration":12, 
 "ratingsAverage":4.5, 
 "price":450, 
 "difficulty":"easy", 
 "ratingsQuantity":13, 
 "summary":"Thewavesstillcrashthecoast", 
 "description":"loremipsumdolorsitamet,consecteturadipiscingelit.Cumsoc.nomenloremdolor.Loremipsumdolorsitamet,consecteturadipiscingelit", 
 "imageCover":"./images/pure.jpg", 
 "images":["./image/first.jpg","./images/second.jpg","./images/third.jpg"], 
         "startDate":"2021-11-25" 
  

 }]
const create_span= (name,duration,ratingsAverage,price,difficulty,ratingsQuantity,summary,description,imageCover,images,startDate)=>{
    const name_span=document.createElement('span')
     name_span.innerHTML=name
     
     const duration_span=document.createElement('span')
     duration_span.innerHTML=duration


     const ratingsAverage_span=document.createElement('span')
     ratingsAverage_span.innerHTML=ratingsAverage



     const price_span=document.createElement('span')
     price_span.innerHTML=price


     const difficulty_span=document.createElement('span')
     difficulty_span.innerHTML=difficulty



     const ratingsQuantity_span=document.createElement('span')
     ratingsQuantity_span.innerHTML=ratingsQuantity



     const summary_span=document.createElement('span')
     summary_span.innerHTML=summary



     const description_span=document.createElement('span')
     description_span.innerHTML=description


     const imageCover_span=document.createElement('span')
     imageCover_span.innerHTML=imageCover



     const images_span=document.createElement('span')
     images_span.innerHTML=images

    
     const startDate_span=document.createElement('span')
     startDate_span.innerHTML=startDate
    

    


     const append_span=document.querySelector('.demo')
     append_span.appendChild(name_span)
     append_span.appendChild(duration_span)
     append_span.appendChild(ratingsAverage_span)
     append_span.appendChild(price_span)
     append_span.appendChild(difficulty_span)
     append_span.appendChild(ratingsQuantity_span)
     append_span.appendChild(summary_span)
     append_span.appendChild(description_span)
     append_span.appendChild(imageCover_span)
     append_span.appendChild(images_span)
     append_span.appendChild(startDate_span)

    }
     

    for(let i=0; i<hodiphile.length; i++){
        create_span(hodiphile[i].name,hodiphile[i].duration, hodiphile[i].ratingsAverage,hodiphile[i].price,hodiphile[i].difficulty,hodiphile[i].ratingsQuantity,
            hodiphile[i].summary,hodiphile[i].description,hodiphile[i].imageCover,hodiphile[i].images,hodiphile[i].startDate,)
    
    }
  
