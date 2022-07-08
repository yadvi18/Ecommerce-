var nameval = document.getElementById("Name")
var namecheck = document.getElementById("usercheck")
function usernamecheck()
{
    if(nameval.value.length < 6)
    {
       namecheck.style.color = 'red'
        namecheck.textContent = 'Length is less than 6'
       
    }
    else{
        namecheck.style.color='green'
        namecheck.textContent = 'Valid'
    }
}

var messageval = document.getElementById("Message")
var messagecheck = document.getElementById("messagecheck")
function messagewordcheck()
{ 
    if(messageval.value.length < 20)
    { 
        messagecheck.style.color = 'red'
        messagecheck.textContent = 'the length of the message should be more than 20 words'
    }
    else{ 
        messagecheck.style.color  = 'green'
        messagecheck.textContent = '👍'
    }
}

function submitform()
{ 
   if(messagecheck == '👍') 
   { 
    alert("Thankyou for submitting the form")
   }
}