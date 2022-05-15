import { mainFunc } from "./Functions.js"

const position = document.querySelector(".crew-position")
const crew_name = document.querySelector(".crew-name")
const summary = document.querySelector(".crew-summary")

const img = document.querySelector(".crew-member")

const navbtns = Array.from(document.querySelectorAll(".crew-nav-btns"))

///////////////////////////////////////////////////////////
mainFunc(crewnavOn, navbtns, "active", navbtns[0], 0)

navbtns.forEach(function (btn, i) {
  btn.addEventListener("click", () =>
    mainFunc(crewnavOn, navbtns, "active", btn, i)
  )
})

/////////////////////////////////////////////////////////////////////////

function crewnavOn(num, jsondata) {
  position.textContent = jsondata.crew[num].role.toUpperCase()
  crew_name.textContent = jsondata.crew[num].name.toUpperCase()
  summary.textContent = jsondata.crew[num].bio
  img.src = jsondata.crew[num].images.png
}
