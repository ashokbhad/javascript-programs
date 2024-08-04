function stringHandsOn() {
  const str = "   Hey you are doing good, keep it up   ";

  console.log("Original String:", str);

  console.log("%c*********** Step-01 ***********", "color: purple");
  const originalLength = str.length;
  console.log(" Length of the original string:", originalLength);

  const trimmedStr = str.trim();
  const trimmedLength = trimmedStr.length;

  console.log("%c*********** Step-02 ***********", "color: purple");
  console.log(" Trimmed String:", trimmedStr);
  console.log("%c*********** Step-03 ***********", "color: purple");
  console.log(" Length of the trimmed string:", trimmedLength);

  const extraSpacesRemoved = originalLength - trimmedLength;
  console.log("%c*********** Step-04 ***********", "color: purple");
  console.log(" Total number of extra spaces removed:", extraSpacesRemoved);

  const firstChar = trimmedStr.charAt(0);
  const lastChar = trimmedStr.charAt(trimmedLength - 1);
  console.log("%c*********** Step-05 ***********", "color: purple");
  console.log(" First and last characters after trim:", firstChar, lastChar);

  const wordCount = trimmedStr.split(/\s+/).length;
  console.log("%c*********** Step-06 ***********", "color: purple");
  console.log(" Total number of words after trim:", wordCount);

  const indexGood = str.indexOf("good");
  console.log("%c*********** Step-07 ***********", "color: purple");
  console.log(" Index of the word 'good':", indexGood);

  const substringFrom22 = str.substring(22);
  console.log("%c*********** Step-08 ***********", "color: purple");
  console.log(" Substring starting from index 22:", substringFrom22);

  const endsWithUp = trimmedStr.endsWith("up");
  console.log("%c*********** Step-09 ************", "color: purple");
  console.log(" Does the trimmed string end with 'up':", endsWithUp);

  const startsWithHey = trimmedStr.startsWith("Hey");
  console.log("%c*********** Step-10 ***********", "color: purple");
  console.log(" Does the trimmed string start with 'Hey':", startsWithHey);
}
stringHandsOn();
