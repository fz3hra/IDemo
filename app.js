const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener('click', function(){
    const linkh = links.getBoundingClientRect().height;
    const consth = linksContainer.getBoundingClientRect().height;
    if(consth  === 0)
    {
        linksContainer.style.height = `${linkh}px`;
    }
    else
    {
        linksContainer.style.height = 0;
    }
});

