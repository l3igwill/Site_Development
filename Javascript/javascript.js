/*jslint browser: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    $("#contactMe").click(function(){
        $("#formContainer").slideToggle("slow");
    });
    
    var $form=$('#contact');
    $form.validate({
        rules:{
            name:{required:true},
            company:{required:true},
            email:{required:true,
                   email:true},
            phone:{required:true,
                   phoneUS:true
                  }
        },
        messages:{
            name:"",
            company:"",
            email:"",
            phone:""
        },
        errorContainer:$('containerForm'),
        submitHandler:function($form){
            $(".message").show();
            $(".message").fadeOut(4500);
            $form.submit();
        }
    });
});

