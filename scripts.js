function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(inputText.value.match(mailformat))
    {
        alert("Valid email address!");
        document.form1.email.focus();
        return true;
    }
    else
    {
        alert("You have entered an invalid email address!");
        document.form1.text1.focus();
        return false;
    }
}

function stringlength(inputtxt, maxlength)
{ 
    var field = inputtxt.value; 
    var mxlen = maxlength;

    if(field.length> mxlen)
    { 
        alert("Your message has to be less than " +mxlen+ " characters.");
        return false;
    }
    else
    { 
        alert("Your message has been received.");
        return true;
    }
}