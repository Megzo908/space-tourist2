import { mainFunc } from "./Functions.js"

const tech_btns = Array.from(document.querySelectorAll(".tech-btns"))
const tech_name = document.querySelector(".tech-name")
const tech_desc = document.querySelector(".tech-desc")
const tech_img = document.querySelector(".tech-img")

///////////////////////////////////////////////////////////////
mainFunc(technavOn, tech_btns, "active", tech_btns[0], 0)

tech_btns.forEach(function (btn, i) {
  btn.addEventListener("click", () =>
    mainFunc(technavOn, tech_btns, "active", btn, i)
  )
})

/////////////////////////////////////////////////////////////////////////

function technavOn(num, jsondata) {
  tech_name.textContent = jsondata.technology[num].name.toUpperCase()
  tech_desc.textContent = jsondata.technology[num].description
  tech_img.src = jsondata.technology[num].images.portrait
}
