const alphabet = "abcdefghijklmnopqrstuvwxyz";

const coder = (value, isEncode, encodeAmount = 3) => {
  const encodeTarget = value.toLowerCase().split("");

  const encoded = encodeTarget.map((item) => {
    let letterIndex = alphabet.indexOf(item);

    if (letterIndex === -1) {
      return item;
    }

    const targetIndex = isEncode
      ? letterIndex + encodeAmount
      : letterIndex - encodeAmount;

    return alphabet[targetIndex];
  });

  return encoded.join("");
};

const decipher = (cipherText, originalText) => {
  cipherText = cipherText.toLowerCase();
  originalText = originalText.toLowerCase();

  const cipherTexts = cipherText.split(" ");

  const originalFirstLetter = alphabet.indexOf(originalText[0]);

  const posibilities = cipherTexts
    .map((text) => {
      const pureText = text.split(",")[0];
      const targetFirstLetter = alphabet.indexOf(pureText[0]);

      if (
        pureText.length === originalText.length &&
        targetFirstLetter > originalFirstLetter
      ) {
        return {
          value: pureText,
          amount: targetFirstLetter - originalFirstLetter,
        };
      }
    })
    .filter((item) => item);

  const finalResult = posibilities.filter((posibility) => {
    const text = posibility.value.split("");
    const finalText = text
      .map((letter) => {
        const currentIndex = alphabet.indexOf(letter);
        return alphabet[currentIndex - posibility.amount];
      })
      .join("");

    if (finalText === originalText) return posibility;
  })[0];

  if (!finalResult)
    throw new Error(
      "Provided originalText doesn't exists in the provided sentence"
    );

  return {
    value: coder(cipherText, false, finalResult.amount),
    amount: finalResult.amount,
  };
};

const encodedValue = coder("hello i'm milad, front end developer", true);
const decodedValue = coder("khoor l'p plodg, iurqw hqg ghyhorshu");
const originalText = decipher("khoor l'p plodg, iurqw hqg ghyhorshu", "front");

// console.log(encodedValue);
// console.log(decodedValue);
// console.log(originalText);

console.log(h);

const l = 2;

var h = 4;
