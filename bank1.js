
//login button event handler
const enterbtn=document.getElementById("enter");
enterbtn.addEventListener("click",function(){
    const loginarea=document.getElementById("login-page");
    loginarea.style.display="none";
    const tarea=document.getElementById("transectionarea");
    tarea.style.display="block";
})

const deposiBtn=document.getElementById("adddeposit");
deposiBtn.addEventListener("click", function(){
    // const depositAmount=document.getElementById("depositAmount").value;
    // const amount=parseFloat(depositAmount);

    // const currentDeposit=document.getElementById("currentDeposit").innerText;
    // const currentDepositNumber = parseFloat(currentDeposit);
    // const totalDeposit=amount+currentDepositNumber;
    // document.getElementById("currentDeposit").innerText = totalDeposit;

    // const currentbalance=document.getElementById("currentBalance").innerText;
    // const currentBalanceNumber = parseFloat(currentbalance);
    // const totalBalance=amount+currentBalanceNumber;
    // document.getElementById("currentBalance").innerText = totalBalance;

    const Amount=getInput("depositAmount");

    updateSpan("currentDeposit",Amount);
    updateSpan("currentBalance",Amount);
    document.getElementById("depositAmount").value="";

})

//Withdraw part
const withdrawBtn=document.getElementById("addwithdraw");
withdrawBtn.addEventListener("click", function(){
    const Amount=getInput("withdrawAmount");
    updateSpan("currentwithdraw",Amount);
    updateSpan("currentBalance",-1*Amount);
    document.getElementById("withdrawAmount").value="";


})

function getInput(id){
    const amount=document.getElementById(id).value;
    const amountNumber=parseFloat(amount);
    return amountNumber;
}


function updateSpan(id,amount){
    const current=document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount=amount+currentNumber;
    document.getElementById(id).innerText = totalAmount;

}