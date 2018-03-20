function BankAccount (name, amount) {
  this.name = name;
  this.amount = amount;
}

BankAccount.prototype.fullUser = function(){
  return this.name + ": $" + this.amount;
}

BankAccount.prototype.withdraw = function(withdraw) {
  this.amount= this.amount - withdraw;
}

BankAccount.prototype.deposit = function() {
  this.amount= this.amount + deposit;
}

// function resetFields () {
//   $("input#name").val("");
//   $("input#initial-deposit").val("");
//   $("input#deposit-amount").val("");
//   $("input#withdraw-amount").val("");
// }

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var currentBalance = $("input#initial-deposit").val();
    console.log(currentBalance);
    var userName = $("input#name").val();
    var newBankAccount = new BankAccount(userName, currentBalance);
    $("#balance-container").append("<p>" + newBankAccount.fullUser() + "</p>")

    console.log(newBankAccount);

    // $("#balance-container .user-name").text(newBankAccount.name);
    // $("#balance-container .user-balance").text(newBankAccount.amount);


  $("#manage-account").click(function(event) {
    event.preventDefault();

    var withdraw = $("input#withdraw-amount").val();

    var deposit = $("input#deposit-amount").val();
    console.log(deposit);
     $("balance-container").append("<p>" + newBankAccount.deposit() + "</p>");
    //resetFields();
    });
  });
});
