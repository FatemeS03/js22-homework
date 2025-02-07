//1. The URL where our planet data is located is: "https://handlers.education.launchcode.org/static/planets.json".
//2. Add the code to fetch this URL
//   -The data you receive as a response should be an array containing 6 objects
//3. show the first planet name and distance(first index of the array data)
//4. let's dynamically change which planet's info we're displaying each time the element with id "destination" is clicked. To do this:
//      a) Declare a counter variable, index that changes each time a click event takes place.
//      b) Use the value of index as the position in the planets array to use in the template literal.
//      c) Lastly, to ensure that the value of the index does not surpass the length of the planets array, implement a mechanism to control the maximum allowed value for the index

////////Answer///////////
const h2= document.createElement("h3")
const h3= document.createElement("h3")
fetch("https://handlers.education.launchcode.org/static/planets.json")
.then((response)=> response.json())
.then((data)=>{
    console.log(data)
    h2.textContent=`name: ${data[0].name}` 
    const test= document.querySelector("#destination")
    h3.textContent=`distance: ${data[0].diameter}` 
    test.append(h2, h3)
    let index=0
test.addEventListener("click", ()=>{
    index++
    if(index >= data.length){
        index=0
    }
    h2.textContent=`name: ${data[index].name}`
    h3.textContent=`distance: ${data[index].diameter}`
})


    
} )
.catch((er)=>console.error(er))