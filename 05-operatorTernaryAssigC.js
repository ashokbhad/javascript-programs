console.log(`%cFunction to check male marriage eligibility`, "color: purple");

function maleMarriageEligibility(gender, age, boyName) {
  return gender === "Male" && age >= 21
    ? `Hey ${boyName}, you are eligible for Marriage`
    : `Hey ${boyName}, you are not eligible for Marriage`;
}

// Invoking the function with provided values
console.log(maleMarriageEligibility("Male", 24, "Ashok")); // Should return eligible message
console.log(maleMarriageEligibility("Male", 17, "Ganesha")); // Should return not eligible message

console.log(`%cFunction to check female marriage eligibility`, "color: purple");
function femaleMarriageEligibility(gender, age, girlName) {
  return gender === "Female" && age >= 18
    ? `Hey ${girlName}, you are eligible for Marriage`
    : `Hey ${girlName}, you are not eligible for Marriage`;
}

// Calling the function with provided values
console.log(femaleMarriageEligibility("Female", 16, "Shruti")); // Should return not eligible message
console.log(femaleMarriageEligibility("Female", 27, "Priyanka")); // Should return eligible message
