const voteEligibility = function (age) {
  if (age == 0 || age < 0 || age > 130 || age == null) {
    console.log(`%cInvalid data. Age is: ${age}`, "color: purple");
  } else {
    console.log(`Valid Data: ${age}`);
    if (age >= 18) {
      console.log(
        `%cCongrats, You are Eligible For The Voting`,
        "color: green"
      );
    } else {
      console.log(
        `%cUnfortunately, You Are Not Eligible For Voting`,
        "color: red"
      );
    }
  }
};

// Example usage
voteEligibility(45); // Eligible for vote
voteEligibility(17); // Not eligible for the vote
voteEligibility(8); // Not eligible for the vote
voteEligibility(20); // Eligible for vote
voteEligibility(-10); // Invalid data
voteEligibility(200); // Invalid data
voteEligibility(0); // Invalid data
voteEligibility(null); // Invalid data
voteEligibility(24); // Eligible for vote
