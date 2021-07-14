$(document).ready(function(){
    $('.modal').modal()
    $('.parallax').parallax()
    $('.sidenav').sidenav()
    $('.slider').slider({
        fullWidth: true,
        indicators: true
      });
      $('.parallax').parallax()
      $('.myreviews').carousel({
          numVisible: 7,
          shift: 55,
          padding: 55
      })
})

function toggleModal(){
    let instance = M.Modal.getInstance($('#modal3'))
    instance.open()
}