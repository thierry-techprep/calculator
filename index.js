let display = document.getElementById('display');
let display2 = document.getElementById('display2');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button =>{
    button.addEventListener('click',(e)=>{
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                display2.innerText = '';
                break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                    display2.innerText = '';
                }
                break;
            case '=':
                try{
                display2.innerText = eval(display.innerText);
                } catch {
                    display2.innerText = 'Error'
                }
                
                break;
            default:
                display.innerText += e.target.innerText
                display2.innerText = '';
        }

    });
});