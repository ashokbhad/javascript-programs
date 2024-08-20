let sbiBank = {
  bankName: "State Bank of India",
  location: "Pune",
  accountNo: 1234567890,
  ifsc: "SBI123456",
  interestRate: "10.55%",
  bankDetails: function () {
    console.log(
      `Bank Name: ${this.bankName} || Location: ${this.location} || Account No.: ${this.accountNo} || ifsc: ${this.ifsc} || Interest Rate: ${this.interestRate}`
    );
  },
};
sbiBank.bankDetails();

let axisBank = {
  bankName: "Axis Bank",
  location: "Pune",
  accountNo: 1357908642,
  ifsc: "AXIS00700",
  interestRate: "9.55%",
  bankDetails: function () {
    console.log(
      `Bank Name: ${this.bankName} || Location: ${this.location} || Account No.: ${this.accountNo} || ifsc: ${this.ifsc} || Interest Rate: ${this.interestRate}`
    );
  },
};
axisBank.bankDetails();

let hdfcBank = {
  bankName: "HDFC Bank",
  location: "Pune",
  accountNo: 2468097531,
  ifsc: "HDFC123456",
  interestRate: "9.50%",
  bankDetails: function () {
    console.log(
      `Bank Name: ${this.bankName} || Location: ${this.location} || Account No.: ${this.accountNo} || ifsc: ${this.ifsc} || Interest Rate: ${this.interestRate}`
    );
  },
};
hdfcBank.bankDetails();

let yesBank = {
  bankName: "YES Bank",
  location: "Pune",
  accountNo: 1098765432,
  ifsc: "YESB12345",
  interestRate: "8.55%",
  bankDetails: function () {
    console.log(
      `Bank Name: ${this.bankName} || Location: ${this.location} || Account No.: ${this.accountNo} || ifsc: ${this.ifsc} || Interest Rate: ${this.interestRate}`
    );
  },
};
yesBank.bankDetails();
