$(document).ready(function(){
  $(".ps-color input").click(function(event){
    if($(this).prop("checked")){
      var idcolorSelected = $(this).attr('id');


      if ($('.ps-color label').attr('for')==idcolorSelected) {
      	$(this).removeClass().addClass('ps_color');
      }

    
     }
  });
});