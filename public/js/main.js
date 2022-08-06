// ===============   PRELOADER   ==================
window.addEventListener("load", function(){
    var loader = this.document.querySelector('#preloader');
    // var loader = this.document.getElementById('preloader')
    var bodypage = this.document.getElementById('total_content')

    setTimeout( function() {
        loader.style.display='none';
        bodypage.classList.remove('display_content');
    }, 5000 );
})

// ====== menu toggle =====
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        })
    }
}
showMenu('nav_toggle','nav_menu');


// =========  active and remove menu   =========
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    //active link
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    //remove mobile menu 
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show');
}
navLink.forEach(n => n.addEventListener('click', linkAction));
