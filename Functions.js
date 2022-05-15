const fetched = await fetchdata("data.json")

async function fetchdata(jsonpathway) {
  const response = await fetch(jsonpathway)
  return response.json()
}
//////////////////////////////////////////////////////////
function classtoggle(Array, classname, clickedItem) {
  Array.forEach(arrayItem => {
    arrayItem.classList.remove(classname)
    clickedItem.classList.add(classname)
  })
}

export function mainFunc(callBack, navArray, activeClass, arrayItem, index) {
  callBack(index, fetched)
  classtoggle(navArray, activeClass, arrayItem)
}
