let first=document.getElementById('first');
let second=document.getElementById('second');
let third=document.getElementById('third');
const accountName=document.getElementById('accountName');
const accountNumber=document.getElementById('accountNumber');
const balance=document.getElementById('balance');
const depositAccountNumber=document.getElementById('depositAccountNumber');
const depositBalance=document.getElementById('depositBalance');
const withdrawAccountNumber=document.getElementById('withdrawAccountNumber');
const withdrawBalance=document.getElementById('withdrawBalance');
const n1=document.getElementById('n1')
const a1=document.getElementById('a1')
const b1=document.getElementById('b1')
const n2=document.getElementById('n2')
const a2=document.getElementById('a2')
const b2=document.getElementById('b2')
const n3=document.getElementById('n3')
const a3=document.getElementById('a3')
const b3=document.getElementById('b3')
const n4=document.getElementById('n4')
const a4=document.getElementById('a4')
const b4=document.getElementById('b4')
const accounts=[];


function BankAccount(customerName,accountNumber,balance){
    this.customerName=customerName;
    this.accountNumber=accountNumber;
    this.balance=balance;
    this.deposit=function deposit(amount){
        this.balance=this.balance+amount;
    }
    
    this.withdraw=function withdraw(amount){
        this.balance=this.balance-amount;
    }

}









first.addEventListener('submit',(e)=>{
    e.preventDefault();
    const account=new BankAccount(accountName.value,accountNumber.value,+balance.value)
    
    accounts.push(account)
    n1.innerHTML=accounts[0].customerName;
    a1.innerHTML=accounts[0].accountNumber;
    b1.innerHTML=accounts[0].balance;
    n2.innerHTML=accounts[1].customerName;
    a2.innerHTML=accounts[1].accountNumber;
    b2.innerHTML=accounts[1].balance;
    n3.innerHTML=accounts[2].customerName;
    a3.innerHTML=accounts[2].accountNumber;
    b3.innerHTML=accounts[2].balance;
    n4.innerHTML=accounts[3].customerName;
    a4.innerHTML=accounts[3].accountNumber;
    b4.innerHTML=accounts[3].balance;

})









second.addEventListener('submit', (e) => {
    e.preventDefault();
    const account = accounts.find(
        (account) => account.accountNumber === depositAccountNumber.value
    );
    account.deposit(+depositBalance.value);
    b1.innerHTML=accounts[0].balance;
    b2.innerHTML=accounts[1].balance;
    b3.innerHTML=accounts[2].balance;
    b4.innerHTML=accounts[3].balance;
});







third.addEventListener('submit',(e)=>{
    e.preventDefault();

    const account = accounts.find(
        (account) => account.accountNumber === withdrawAccountNumber.value
    );
    account.withdraw(+withdrawBalance.value);
    b1.innerHTML=accounts[0].balance;
    b2.innerHTML=accounts[1].balance;
    b3.innerHTML=accounts[2].balance;
    b4.innerHTML=accounts[3].balance;

})