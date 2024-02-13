function register()
{
    window.location='./register.html'
}

function login()
{
    window.location.href='login.html'
}


//register
function add()
{
    var reg={
        username:uname.value,
        accno:raccno.value,
        psd:upsd.value,
        balance:0
    }
   if(reg.username==""||reg.accno==""||reg.psd=="")
   {
    alert("Please fill inputs")
   }
   else{
    if(reg.accno in localStorage)
    {
        alert("Already exists")
    }
    else{
    localStorage.setItem(reg.accno,JSON.stringify(reg))
    console.log(reg);
    alert("Succefully Registerd")
    }
   }
}

//login code

function userlogin()
{
    let acno=document.getElementById('laccno').value
    let lpsd=document.getElementById('pwd').value
if(acno==""||lpsd==""){
    alert("Enter inputs")
}
else{
    if(acno in localStorage)
    {
      a=  JSON.parse(localStorage.getItem(acno))
      console.log(a);
        if(a.psd==lpsd)
        {
            window.location='./amount.html'
        }
        else{
            alert("password mismatch")
        }
    }
    else{
        alert("wrong input")
    }
}
}



//transaction page


//deposite

let amnt=0;
let wamnt=0;
let totalbalance=0;
function deposit()
{
   amnt=damnt.value
   acno=dacc.value
   amnt=Math.floor(amnt)

   if(acno in localStorage)
   {
    a=  JSON.parse(localStorage.getItem(acno))
    if(acno==a.acno && amnt<=0)
    {
        alert("enter valid amount")
    }
    else
    {
        a.balance+=amnt
        localStorage.setItem(acno,JSON.stringify(a))
        alert("amount deposited")
        document.getElementById('res').innerHTML=`<div style="color:red">Current Amount of your accounts ${amnt}</div>`
    }
   }
   else
   {
    alert("wrong input")
   }
}

//withdraw

function withdraw()
{
    wamnt=wamn.value
    acno=wacc.value
    wamnt=Math.floor(wamnt)
    if(acno in localStorage)
    {
        b=JSON.parse(localStorage.getItem(acno))
        if(acno==b.acno && b.balance<=0)
        {
            alert("wrong input")
        }
        else{
            b.balance-=wamnt
            localStorage.setItem(acno,JSON.stringify(b))
            
            alert("amount withdrawn")
            document.getElementById("resw").innerHTML=`<div style="color:blue"> Your Current Account Balance is ${b.balance}`
        }
    }

}


