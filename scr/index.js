      
function getAdvice (){
    fetch('https://api.adviceslip.com/advice')
       .then(res => res.json())
       .then(advice => {
           const adviceGetter = callAdvice(advice);
         addAdvicetoDom(adviceGetter);
       });
}
getAdvice();
   

     function callAdvice(data){
     
    const addDiv = document.createElement('div');
     addDiv.classList.add("div");

     const addId = document.createElement("h4");
     addDiv.classList.add("h4");
     addId.innerHTML = data.slip.id;

     const addAdvice  = document.createElement ("h2");
     addDiv.classList.add("h2");
     addAdvice.innerHTML = data.slip.advice;

     addDiv.appendChild (addId);
     addDiv.appendChild (addAdvice);

     return addDiv;
     }
    
        
        function addAdvicetoDom(adviceAdd){
            const adviceHold = document.getElementById("container");
            // adviceHold.innerHTML = ""
            adviceHold.appendChild(adviceAdd);
        }

        const button = document.getElementById ("reload")
        button.addEventListener('click', () => {
            getAdvice();
        })
    

       