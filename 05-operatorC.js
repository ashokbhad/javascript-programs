function interviewCheck(gradScore, hscScore, sscScore, candidateName) {
  var result =
    gradScore >= 70 || hscScore >= 80 || sscScore > 90
      ? `Congrats "${candidateName}", you are eligible for MICROSOFT interview.`
      : `Unfortunately "${candidateName}", you are not eligible for MICROSOFT interview.`;
  console.log(result);
}
interviewCheck(82, 86, 90, "Balasaheb");
interviewCheck(70, 66, 54, "Ashok");
interviewCheck(60, 79, 88, "Pankaj");
