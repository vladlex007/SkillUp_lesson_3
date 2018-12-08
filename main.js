$(function() {
    let centerx = document.body.clientWidth / 2;
    let centery = document.body.clientHeight / 2;

    onmousemove = function(event) {
      let ofset_x = 50 / centerx * event.pageX - 50;
      let ofset_y = 50 / centery * event.pageY - 50;
      $('.background_bubbles').css({'left': -ofset_x , 'top': -ofset_y});
    };
});