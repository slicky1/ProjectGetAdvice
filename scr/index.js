      
function getAdvice (){
    fetch('https://api.adviceslip.com/advice')
       .then(res => res.json())
       .then(data => {
           const grab = callAdvice(data);
         addAdvicetoDom(grab);
       });
}
getAdvice();
   

     function callAdvice(data){
     
    const add = document.createElement('div');
     add.classList.add("add");

     const id = document.createElement("h3");
     add.classList.add("h3");
     id.innerHTML = data.slip.id;

     const advice  = document.createElement ("h2");
     add.classList.add("h2");
     advice.innerHTML = data.slip.advice;

     add.appendChild (id);
     add.appendChild (advice);

     return add;
     }
    
        
        function addAdvicetoDom(adviceAdd){
            const adviceHold = document.getElementById("container");
            adviceHold.innerHTML = ""
            adviceHold.appendChild(adviceAdd);
        }

        const button = document.getElementsByClassName ("reload") [0]
        button.addEventListener('click', () => {
            getAdvice();
        })
    