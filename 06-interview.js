console.log(
  `%c*** Interview Eligibility Check with if-else statement ***`,
  "color: purple"
);

function interviewCheck(gradScore, hscScore, sscScore, candidateName) {
  const result =
    gradScore >= 70 || hscScore >= 80 || sscScore > 90
      ? `Congrats "${candidateName}", you are eligible for Google interview.`
      : `Unfortunately "${candidateName}", you are not eligible for Google interview.`;
  console.log(result);
}
interviewCheck(82, 86, 90, "Rohit");
interviewCheck(70, 66, 55, "Virat");
interviewCheck(60, 79, 88, "Rishabh");
