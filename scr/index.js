      
     fetch('https://api.adviceslip.com/advice')
       .then(res => res.json())
       .then(data => {
           const grab = callAdvice(data);
         addAdvicetoDom(grab);
       });

     function callAdvice(data){
     const add = document.createElement('div');
     add.classList.add("add");

     const id = document.createElement("h3");
     id.innerHTML = data.slip.id;

     const advice  = document.createElement ("h2");
     advice.innerHTML = data.slip.advice;

     add.appendChild (id);
     add.appendChild (advice);

     return add;
     }
        function addAdvicetoDom(adviceAdd){
            const adviceHold = document.getElementById("container");
            adviceHold.appendChild(adviceAdd);
        }
     
    