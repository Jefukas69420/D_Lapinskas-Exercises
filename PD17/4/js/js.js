svx = document.getElementById("color")
color = ["Red", "Green", "Blue"]

function sv (){
    rand = Math.floor(Math.random() * color.length)
    svx.style.color = color[rand]
}
swk.addEventListener("click", sv)
console.log("sv")