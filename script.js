const b=document.querySelector('.toggle'),n=document.querySelector('.nav');if(b&&n)b.addEventListener('click',()=>{n.classList.toggle('show');b.setAttribute('aria-expanded',n.classList.contains('show'))});
// Clear any lingering browser text selection in the hero area.
document.addEventListener('DOMContentLoaded',()=>{const hero=document.querySelector('.hero');if(hero){const clear=()=>{const sel=window.getSelection();if(sel&&sel.rangeCount&&hero.contains(sel.anchorNode))sel.removeAllRanges();};clear();hero.addEventListener('mouseup',clear);hero.addEventListener('touchend',clear);}});
