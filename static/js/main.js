window.onload = function(){ 
    var menu = document.getElementById("responsiveMenu")
    var isMenuOpen= false;

    menu.onclick = function() {
        console.log('Click just happened');
        toggleMenu();
    };



    function toggleMenu(){
        if (isMenuOpen) {
            menu.classList.remove("red");
            isMenuOpen = false;
            console.log("menu is closed");
        }
        else{
            menu.classList.add("red");
            isMenuOpen = true;
            console.log("menu is open");
        }
    }
};