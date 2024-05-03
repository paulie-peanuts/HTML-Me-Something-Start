window.addEventListener("load", function() {
    const moonie = document.getElementById("moonie");

    moonie.addEventListener("mouseover", function() {
        moonie.classList.add("spinning");
    })
    moonie.addEventListener("mouseout", function() {
        // when (moonie.transform === rotate(-10deg)) 
        console.log(moonie)
        moonie.classList.remove("spinning");
    })
})