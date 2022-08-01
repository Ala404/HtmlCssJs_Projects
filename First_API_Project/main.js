

const Quote = document.querySelector('q');
const adviceId = document.querySelector('small');
const nextAdviceBtn = document.querySelector('span');


// fetch("https://api.adviceslip.com/advice").then((result)=>{
    
  
// })
// let Pr = new Promise((res,rej)=>{
    
//         return res (req.parse(req.JSON));
//     })

let req = new XMLHttpRequest()

function newAdvice(){

req.onload = function (){

    if (this.status=== 200 && this.readyState=== 4){
        let Advice = JSON.parse(this.responseText);
        Quote.innerHTML=Advice.slip.advice;
        adviceId.innerHTML+=` #${Advice.slip.id}`;
    }
}

req.open('GET',"https://api.adviceslip.com/advice");
req.send();

}


newAdvice()
nextAdviceBtn.addEventListener("click",()=>
{
    window.location.href = 'index.html';
}
);