document.getElementById('btn1').addEventListener('click', function(){
    showSectionById('donation-section');
    if(this.click){
        this.classList.add('bg-lime-400');
    }
    else{
        this.classList.add('bg-white');
    }
});


document.getElementById('btn2').addEventListener('click', function(){
    showSectionById('history-section');
    if(this.click){
        this.classList.add('bg-lime-400');
    }
    else{
        this.classList.remove('bg-white');
    }
});