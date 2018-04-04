window.onload = function() {
  var add_active=document.getElementById('cards');
  add_active.onclick = function(event) {
      var el=document.getElementsByClassName('card_image');
      var add_tag=event.target||event.srcElement;
      add_tag.classList.add('active');
      let active_elem=document.getElementsByClassName('active');
      if (active_elem[0].src==active_elem[1].src) {
        active_elem[0].classList.add('nodisplay');
        active_elem[1].classList.add('nodisplay');
        active_elem.splice(0,2);
      }
      else {
        active_elem[0].classList.remove('active');
        active_elem[1].classList.remove('active');
        active_elem.splice(0,2);
      }
    }
}
