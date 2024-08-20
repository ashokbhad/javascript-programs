// Step 1: Create the constructor function
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}

// Step 3: Add openTime and closeTime to the prototype
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

// Step 2: Create the objects
const yesBank = new Bank("Yes Bank", "Mumbai", "YES1234", "001233");
const sbiBank = new Bank("SBI", "Delhi", "SBI5678", "006572");
const mahBank = new Bank("Maharashtra Bank", "Pune", "MAH9101", "003533");
const axisBank = new Bank("Axis Bank", "Chennai", "AXI1122", "004876");

// Step 4 & 5: Log openTime and closeTime of sbiBank
console.log(
    `The SBI Bank opens at ${sbiBank.openTime} and closes at ${sbiBank.closeTime}.`
);

// Step 6: Log bankName and closeTime of axisBank
console.log(`The ${axisBank.bankName} bank closes at ${axisBank.closeTime}.`);

// Step 7: Log bankName, branchCode & openTime of yesBank
console.log(
    `The ${yesBank.bankName} bank at branch ${yesBank.branchCode} opens at ${yesBank.openTime}.`
);

// Log details of all banks (as described in Step 2)
const banks = [yesBank, sbiBank, mahBank, axisBank];
banks.forEach((bank) => {
    console.log(
        `Bank Details is: ${bank.bankName}, ${bank.location}, ${bank.ifscCode}, ${bank.branchCode}`
    );
});
