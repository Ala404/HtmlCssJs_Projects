
// let nav = document.querySelector('nav');
// let Ul = document.querySelector('ul');
// let a = document.querySelectorAll('nav a');

// li.addEventListener('click' , function(e){
    
//     for(let i=0;i<a.length;i++){
//         a[i].classList.remove('active');
//     }
//         e.target.classList.add('active');
  
// });

// console.log('it works');
// const lArrow = document.querySelector('.arrow-left');
// const rArrow = document.querySelector('.arrow-right');
// const news = document.querySelectorAll(".news div");
// const dots = document.querySelectorAll('.dot');

// let co =0;


//     // setInterval(function(){
//     //     if(co!==2){
//     //         console.log(co)
//     //         news[co].classList.toggle('data-active');
//     //         news[co+1].classList.toggle('data-active');
//     //         dots[co].style.backgroundColor='transparent';
//     //         dots[co+1].style.backgroundColor='#19c8fa';
//     //         co+=1;
//     //     }else{
           
//     //         news[co].classList.toggle('data-active');
//     //         news[0].classList.toggle('data-active');
//     //         dots[co].style.backgroundColor='transparent';
//     //         dots[0].style.backgroundColor='#19c8fa';
//     //         co=0
//     //     } 
        
//     // },3000);
    
//     rArrow.addEventListener('click',function(e){
//         if(co!==2){
//             console.log(co)
//             news[co].classList.toggle('data-active');
//             news[co+1].classList.toggle('data-active');
//             dots[co].style.backgroundColor='transparent';
//             dots[co+1].style.backgroundColor='#19c8fa';
//             co+=1;
//         }else{
           
//             news[co].classList.toggle('data-active');
//             news[0].classList.toggle('data-active');
//             dots[co].style.backgroundColor='transparent';
//             dots[0].style.backgroundColor='#19c8fa';
//             co=0
//         } 
        
//     });

//     lArrow.addEventListener('click',function(e){

//         if(co!==0){
//             console.log(co)
//             news[co].classList.toggle('data-active');
//             news[co-1].classList.toggle('data-active');
//             dots[co].style.backgroundColor='transparent';
//             dots[co-1].style.backgroundColor='#19c8fa';
//             co-=1;
//         }else{
           
//             news[co].classList.toggle('data-active');
//             news[2].classList.toggle('data-active');
//             dots[co].style.backgroundColor='transparent';
//             dots[2].style.backgroundColor='#19c8fa';
//             co=2
//         } 
        
        
//     });


    ///////////start shuffle////////


const content = document.querySelector('.portfolio .content');
const container = document.querySelector('.portfolio .container');



for(var i=0; i<8;i++){
    let contBox = document.createElement('div');
    let contImg = document.createElement('img');
    contImg.setAttribute('src',`./shuffle pic/shuffle-0${i+1}.jpg`)
    const contTxt= document.createElement('div');
    contTxt.className="text";
    let contHeader=document.createElement('h4');
    contHeader.textContent="Awesome Image";
    let contParagraph = document.createElement('p')
    contParagraph.textContent="Photography";
    contTxt.append(contHeader,contParagraph);
    contBox.append(contImg,contTxt);
    contBox.className="cont-box";
    content.appendChild(contBox);
   
  
}
container.innerHTML+=`<a href="#">more</a>`;
