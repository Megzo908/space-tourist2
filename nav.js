const activepage = window.location.href
const explorebtn = document.querySelector(".explore")
const navlinks = Array.from(document.querySelectorAll(".navlinks li a"))
const boldnums = Array.from(document.querySelectorAll(".boldnums"))

const burger_btn = document.querySelector(".burger-open")
const burger_active = document.querySelector(".navlinks")

const burger_close = document.querySelector(".burger-close")

const nav_toggle = document.querySelector("nav")

const nav_OG = document.querySelector(".nav-OG")

///////////////////////////////////////////////////////////////////////////
window.addEventListener("click", () => {
  if (!nav_toggle.classList.contains("burger-active-nav")) return
  collapseNav()
})

navlinks.forEach(i => {
  if (i.href === `${activepage}`) {
    i.classList.add("active")
  }
})

if (`${activepage}` === "https://megzo908.github.io/space-tourist/") {
  navlinks[0].classList.add("active")
}

burger_btn.addEventListener("click", e => {
  e.stopPropagation()
  nav_OG.style.display = "flex"
  burger_btn.classList.add("clicked")
  setTimeout(() => {
    nav_toggle.classList.add("burger-active-nav")
  }, 100)
})

nav_toggle.addEventListener("click", e => {
  e.stopPropagation()
})

burger_close.addEventListener("click", collapseNav)

explorebtn.addEventListener("click", () => {
  location.href = "destination.html"
})

function collapseNav() {
  nav_toggle.classList.remove("burger-active-nav")
  setTimeout(() => {
    nav_OG.style.display = "none"
    burger_btn.classList.remove("clicked")
  }, 800)
}
