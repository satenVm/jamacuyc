// console.time();
// let p = +prompt();
// alert((p-p%10000)/10000);
// alert((p%10000-p%1000)/1000);
// alert((p%1000-p%100)/100);
// alert((p%100-p%10)/10);
// alert(p%10);
// console.timeEnd();

// let number = parseInt()  // veradzardznuma tiv
//disabed kangnacnuma setIntervaly 

////////////slider
function go(){
    window.timerId = window.setInterval(timer, 1000);
    document.getElementById('go').disabled = true;
}

function go(){
    window.timerId = window.setInterval(timer, 1000);
    document.getElementById('go').disabled = true;
    document.getElementById('stop').disabled = false;
}
function stop(){
    window.clearInterval(window.timerId);
    document.getElementById('go').disabled = false;
    document.getElementById('stop').disabled = true;
} 
function timer(){
    let img1 =document.getElementById('img1');
    let img2 =document.getElementById('img2');
    let img3 =document.getElementById('img3');
    let img4 =document.getElementById('img4');
    let img5 =document.getElementById('img5');
    let img6 =document.getElementById('img6');
    let tmp =img1.src;
    img1.src =img2.src;
    img2.src =img3.src;
    img3.src =img4.src;
    img4.src =img5.src;
    img5.src =img6.src;
    img6.src  = tmp;
}


setInterval(() =>{
    let deg =6;
    let hr =document.querySelector('#hr');
    let sc =document.querySelector('#sc');

    let day = new Date();

    let hh = day.getHours() *30;
    let mm = day.getMinutes() *deg;
    let ss = day.getSeconds() *deg;
    
    hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
    mn.style.transform = `rotateZ(${(mm)}deg)`;
    sc.style.transform = `rotateZ(${(ss)}deg)`;
})

const sHand = document.querySelector( '.s' );
const mHand = document.querySelector( '.m' );
const hHand = document.querySelector( '.h' );

function setTime() {
  const d = new Date();
  const s = d.getSeconds();
  const m = d.getMinutes();
  const h = d.getHours();

  const sDeg = (( s / 60 ) * 360 );
  const mDeg = (( m / 60 ) * 360 );
  const hDeg = (( h / 12 ) * 360 );

  sHand.style.transform = `rotate( ${sDeg}deg )`;
  mHand.style.transform = `rotate( ${mDeg}deg )`;
  hHand.style.transform = `rotate( ${hDeg}deg )`;
}

setInterval( setTime, 1000 );
