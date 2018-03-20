function BankAccount (name, amount) {
  this.name = name;
  this.amount = amount;
}

//BankAccount.protoype.profile = function () {
//  return this.name + " has " + return this.amount + " available.";
//}

function resetFields () {
  $("input#name").val("");
  $("input#initial-deposit").val("");
  $("input#deposit-amount").val("");
  $("input#withdraw-amount").val("");
}

$(document).ready(function() {
  $("form#new-account").submit(function(event) {
    event.preventDefault();
    var currentBalance = $("input#initial-deposit").val();

    $("#balance .output").append("$" + currentBalance);


  });
});
