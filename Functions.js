/*saving the ruturn value of parsing the JSON file*/
const fetched = await fetchdata("data.json")

async function fetchdata(jsonpathway) {
  const response = await fetch(jsonpathway)
  return response.json()
}
//////////////////////////////////////////////////////////

/*function that takes in an array on nav links, removes a class from
 all of the items, then adds a class to one (clicked) item*/
function classtoggle(Array, classname, clickedItem) {
  Array.forEach(arrayItem => {
    arrayItem.classList.remove(classname)
    clickedItem.classList.add(classname)
  })
}
/*The Main function that displays the page, takes in a 1.callback,
(this callback is specific for each page for displaying data from a JSON file),
5.an index which is used inside the callback for pulling data from the JSON
2.3.4. for running the classtoggle function on the navs of each page
*/
export function mainFunc(callBack, navArray, activeClass, arrayItem, index) {
  callBack(index, fetched)
  classtoggle(navArray, activeClass, arrayItem)
}
