const menuBtn=document.getElementById('menuBtn'),nav=document.getElementById('nav'),langBtn=document.getElementById('langBtn');
menuBtn.addEventListener('click',()=>nav.classList.toggle('show'));
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('show')));
let lang='ar';
langBtn.addEventListener('click',()=>{lang=lang==='ar'?'en':'ar';document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';document.body.classList.toggle('en',lang==='en');document.querySelectorAll('[data-ar]').forEach(el=>{el.innerHTML=el.dataset[lang]});langBtn.textContent=lang==='ar'?'EN':'AR';});
document.getElementById('year').textContent=new Date().getFullYear();
const lightbox=document.getElementById('lightbox'),lightboxImg=document.getElementById('lightboxImg');
document.querySelectorAll('.photo').forEach(p=>p.addEventListener('click',()=>{lightboxImg.src=p.dataset.full;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightboxImg.src=''}
document.getElementById('closeLightbox').addEventListener('click',closeBox);
lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
