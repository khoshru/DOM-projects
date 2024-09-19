let blubImg = document.getElementById('blub');


// we need flag
let blubLag = false;

function turnOnorOff(){
    if(blubLag){
        blubImg.setAttribute('src' , 'pictures/switch-on.png');
        blubLag = false;

    }else{
        blubImg.setAttribute('src' , 'pictures/switch-off.png');
        blubLag = true;
    }
}