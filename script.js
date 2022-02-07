// navbar scroll
window.addEventListener("scroll",function(){
    var navbar = document.getElementsByClassName("navbar")[0];
    navbar.classList.toggle("sticky",window.scrollY > 50 );
})

// mobile navbar
const toggleButton = document.getElementsByClassName("mobile")[0],
      navbarLinks = document.getElementsByClassName("navbar-links")[0],
      cross = document.getElementsByClassName("cross")[0];

      toggleButton.addEventListener("click",()=>{
          navbarLinks.classList.toggle("active");
          cross.classList.toggle("fa-times");
      })
// slide img 

