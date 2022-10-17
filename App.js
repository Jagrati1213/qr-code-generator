let generat_btn = document.querySelector('#submit');
let generat_img = document.querySelector('#img');
let get_val = document.querySelector('.data');

generat_btn.addEventListener('click',()=>{
   
    let inp_val = get_val.value;

    if(!inp_val == ''){
        generat_btn.innerHTML ='Generating QR Code..'
        generat_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inp_val}`;
    } 

    //reverse the word
    generat_img.addEventListener('load',()=>{
        generat_btn.innerHTML ='Generate QR Code';
        get_val.value=''; 
    });
});
