function go(){

    const timer = Number(document.querySelector("#mm").value);
    let amountTime = (timer*60) + Number(document.querySelector("#ss").value);
    
    function calculateTime(){
        const countdown=document.querySelector("#countdown");
    
        let minutes = Math.floor(amountTime/60);
        let seconds = amountTime%60;
    
        amountTime--;
    
        if (seconds<10) {
            seconds = "0"+seconds;
        }
        console.log(amountTime);
        
        countdown.textContent = `${minutes} : ${seconds}`;
        if (amountTime<0) {
                stopTimer();
            amountTime=0;
        }
        function stopTimer(){
            clearInterval(timerId);
        }
    }
    let timerId = setInterval(calculateTime,1000);
    
    }
    const button = document.querySelector("#startBtn");
    button.addEventListener ("click", function(){
        go();
    })
    
    clock();
    
    function clock() {
      const date = new Date();
    
      const hours = ((date.getHours() + 11) % 12 + 1);
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();
      
      const hour = hours * 30;
      const minute = minutes * 6;
      const second = seconds * 6;
      
      document.querySelector('.hour').style.transform = `rotate(${hour}deg)`
      document.querySelector('.minute').style.transform = `rotate(${minute}deg)`
      document.querySelector('.second').style.transform = `rotate(${second}deg)`
    }
    
    setInterval(clock, 1000);
    
    
