$(document).ready(function(){
    $('.modal').modal()
    $('.parallax').parallax()
    $('.sidenav').sidenav()
    $('.slider').slider({
        fullWidth: true,
        indicators: true
      });
})

function toggleModal(){
    let instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}