const creat = function(el){
  const element= document.querySelector(el)
  return element
}
const section= creat("section")
const h4= creat("h4")
const h2= creat("h2")
const div= creat("div")

h4.textContent = "Advice #0"; 
h2.textContent = "Click the dice."
div.addEventListener("click", async function(){
 
    try{
      const response = await fetch("https://api.adviceslip.com/advice")
      if (response.status == 404) {
        throw "User not found";
      }
      const data = await response.json();
    console.log(data);
    h4.textContent=""
    h2.textContent=""
    // console.log("Before :", h4.textContent, h2.textContent)
    h4.textContent = `Advice #${data.slip.id}`
    h2.textContent= `"${data.slip.advice}"`
    // console.log("After :", h4.textContent, h2.textContent)
  } catch (e) {
    console.error(e);
  }
 
    })
    div.addEventListener("mouseover", function() {
      
   div.style.boxShadow = "0 0 20px rgba(107, 207, 244, 0.97)"
   div.style.border="none"
    });
    div.addEventListener("mouseout", function() {
      
      div.style.boxShadow ="none"
      div.style.border="3px solid black"
    })



    
