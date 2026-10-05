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
      var n=document.getElementById('f-name'); if(n) setTimeout(function(){n.focus({preventScroll:true});},400);
    });
  });
  if(location.hash==='#book'){ flash(); var n=document.getElementById('f-name'); if(n) setTimeout(function(){n.focus({preventScroll:true});},400); }
})();

// Contact form: send through FormSubmit without leaving the page
(function(){
  var form=document.getElementById('enquiry');
  if(!form) return;
  var status=form.querySelector('.form-status'), btn=form.querySelector('button[type=submit]');
  form.addEventListener('submit',function(e){
    if(!window.fetch) return; // very old browsers: normal form post
    e.preventDefault();
    if(form._honey && form._honey.value) return;
    btn.disabled=true; btn.textContent='Sending…'; status.className='form-status'; status.textContent='';
    fetch(form.action.replace('formsubmit.co/','formsubmit.co/ajax/'),{method:'POST',headers:{'Accept':'application/json'},body:new FormData(form)})
      .then(function(r){return r.json().then(function(d){return {ok:r.ok,d:d};});})
      .then(function(res){
        if(res.ok && String(res.d.success)==='true'){
          form.reset();
          status.className='form-status ok';
          status.textContent='Thank you, your message has been sent. Liisa will be in touch.';
        } else { throw new Error(res.d && res.d.message); }
      })
      .catch(function(){
        status.className='form-status err';
        status.textContent='Sorry, your message could not be sent just now. Please email or call Liisa directly using the details below.';
      })
      .then(function(){btn.disabled=false;btn.textContent='Send message';});
  });
})();
