console.log(
  `%c*** Program to make the first & last char as capital of each word ***`,
  "color: purple"
);

const str = "How are you mate";

const result = str
  .split(" ")
  .map((word) =>
    word.length < 2
      ? word.toUpperCase()
      : word[0].toUpperCase() +
        word.slice(1, -1) +
        word[word.length - 1].toUpperCase()
  )
  .join(" ");

console.log(
  `%cAfter Making First & Last Char as Capital the string is: ${result}`,
  "color: green"
); // Output: "How Are YoU MatE"
