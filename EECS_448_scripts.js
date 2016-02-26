
function Validation(form)
{
    
    pass1 = form.password_one.value;
    pass2 = form.password_two.value;


    if (pass1.length < 8 || pass2.length < 8)
    {
        alert("the password is too small");
    }
    else if(pass1 != pass2)
    {
	 alert("the passwords do not match");
    }   
    else
    {
	alert("your password is valid");
    }


    //alert(pass1);
    
};

function changeStyle(red, green, blue, width, bred, bgreen, bblue)
{
 var someTag = document.getElementById("para");

 someTag.style.borderStyle = "solid";
 someTag.style.borderColor = "#" + red + green + blue;
 someTag.style.borderWidth = width;
 someTag.style.backgroundColor = "#" + bred + bgreen + bblue;
};
