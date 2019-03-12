describe("Bank Account", function() {
  var myAccount

  beforeEach(function() {
    myAccount = new bankAccount();
  })

  it("should allow a customer to make a deposit of 1000", function() {
    myAccount.deposit(1000)
    expect(myAccount._balance).toEqual(1000)
  })

  it("should allow a customer to make a withdrawal of 500", function() {
    myAccount.deposit(1000)
    myAccount.withdraw(300)
    expect(myAccount._balance).toEqual(700)
  })

})