// Mobile menu toggle
(function(){
  var btn=document.querySelector('.menu-toggle'), menu=document.getElementById('menu');
  if(!btn||!menu) return;
  btn.addEventListener('click',function(){
    var open=menu.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
  });
  menu.addEventListener('click',function(e){ if(e.target.tagName==='A'){menu.classList.remove('open');btn.setAttribute('aria-expanded','false');} });
})();

// Copy buttons on the Contact page
document.querySelectorAll('[data-copy]').forEach(function(b){
  b.addEventListener('click',function(){
    var t=b.getAttribute('data-copy');
    var done=function(){var o=b.textContent;b.textContent='Copied ✓';setTimeout(function(){b.textContent=o},1800);};
    if(navigator.clipboard&&window.isSecureContext){navigator.clipboard.writeText(t).then(done,fallback);}else{fallback();}
    function fallback(){var a=document.createElement('textarea');a.value=t;document.body.appendChild(a);a.select();try{document.execCommand('copy');done();}catch(e){}a.remove();}
  });
});

// "Book a chat": highlight the booking card (also when already on the Contact page)
(function(){
  var card=document.getElementById('contact-card');
  if(!card) return;
  function flash(){card.classList.remove('flash');void card.offsetWidth;card.classList.add('flash');}
  document.querySelectorAll('a[href$="#book"]').forEach(function(a){
    a.addEventListener('click',function(e){
      e.preventDefault();
      document.getElementById('book').scrollIntoView({behavior:'smooth',block:'start'});
      history.replaceState(null,'','#book');
      flash();
    });
  });
  if(location.hash==='#book') flash();
})();
