window.onload = function(){ 
    var link = document.getElementById("responsiveLink")
    var menu = document.getElementById("menu")
    var isMenuOpen= false;

    menu.onclick = function() {
        toggleMenu();
    };

    function toggleMenu(){
        if (isMenuOpen) {
            link.classList.remove("red");
            menu.classList.remove("responsiveMenu");
            isMenuOpen = false;
            console.log("menu is closed");
        }
        else{
            link.classList.add("red");
            menu.classList.add("responsiveMenu");
            isMenuOpen = true;
            console.log("menu is open");
        }
    }
};