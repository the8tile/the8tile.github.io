let body = document.body

let topBar = document.createElement("nav")
topBar.classList.add("topBar")
body.appendChild(topBar)

let iconAnchor = document.createElement("a")
iconAnchor.href = "aboutme.html"
topBar.appendChild(iconAnchor)

let icon = document.createElement("img")
icon.src = "icon.png"
iconAnchor.appendChild(icon)

let mainAnchor = document.createElement("a")
mainAnchor.href = "aboutme.html"
mainAnchor.classList.add("topBarBig")
mainAnchor.style.fontSize = "40px"
mainAnchor.style.margin = "0"
mainAnchor.textContent = "the 8 tile"
topBar.appendChild(mainAnchor)

let keaAnchor = document.createElement("a")
keaAnchor.href = "killemall.html"
keaAnchor.textContent = "KILL 'EM ALL!"
topBar.appendChild(keaAnchor)