window.onload = function(){ 
    var link = document.getElementById("responsiveLink")
    var menu = document.getElementById("menu")
    var isMenuOpen= false;

    menu.onclick = function() {
        toggleMenu();
    };

    function toggleMenu(){
        if (isMenuOpen) {
            menu.classList.remove("responsiveMenu");
            isMenuOpen = false;
        }
        else{
            menu.classList.add("responsiveMenu");
            isMenuOpen = true;
        }
    }
};