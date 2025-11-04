let bilder = ["bilder/chinese-lanterns-7591296_1280.jpg", "bilder/lantern-1600769_1280.jpg", "bilder/lantern-6894507_1280.jpg"]
let framknapp = document.getElementById("fram")
let bakknapp = document.getElementById("tilbake")

framknapp.addEventListener("click", () => changeImage("frem"));
bakknapp.addEventListener("click", () => changeImage("bak"));

let tall = 0

document.getElementById("bilde").src = bilder[tall]



function changeImage(retning){
    if (retning === "frem"){
        if (tall === bilder.length - 1){
            tall = 0
        }
        else {
            tall += 1
        }
    }
    else {
        if (tall === 0){
            tall = bilder.length - 1
        }
        else {
            tall -= 1
        }
    }
    document.getElementById("bilde").src = bilder[tall]
}