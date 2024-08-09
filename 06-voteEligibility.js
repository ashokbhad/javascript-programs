const voteEligibility = function (age) {
  if (age <= 0 || age > 130) {
    console.log(`%c Invalid data`, "color: purple");
  } else if (age < 18) {
    console.log(
      `%c Unfortunately, You Not Eligible For The Voting`,
      "color: red"
    );
  } else {
    console.log(`%c Congrats, You Are Eligible For Voting`, "color: green");
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
