import { mainFunc } from "./Functions.js"

const moon_title = document.querySelector(".moon-title")
const moon_desc = document.querySelector(".moon-description")
const bot_text1 = document.querySelector(".bot-text1")
const bot_text2 = document.querySelector(".bot-text2")
const planet_img = document.querySelector(".planet-img")

const planets_array = Array.from(document.querySelectorAll(".moon-nav li"))

//////////////////////////////////////////////////////////////////////////////////
planets_array.forEach(function (planet, i) {
  mainFunc(planetnavOn, planets_array, "active", planets_array[0], 0)

  planet.addEventListener("click", () =>
    mainFunc(planetnavOn, planets_array, "active", planet, i)
  )
})
////////////////////////////////////////////////////////////////////////////////////////////////
/*Pulling data from the JSON file based on the index of the clicked link
which corrsponds to the index of the relavent data inside the JSON  */
function planetnavOn(num, jsondata) {
  moon_title.textContent = jsondata.destinations[num].name.toUpperCase()
  moon_desc.textContent = jsondata.destinations[num].description
  bot_text1.textContent = jsondata.destinations[num].distance.toUpperCase()
  bot_text2.textContent = jsondata.destinations[num].travel.toUpperCase()
  planet_img.src = jsondata.destinations[num].images.png
}
////////////////////////////////////////////////////////////////////////////////////////////////
