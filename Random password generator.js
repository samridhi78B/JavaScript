function generatingPassword(length, includeLowercase, includeUppercase, includenumbers, includeSymbols) {
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()/*-+";

  let allowedCase = "";
  let pass = "";

  allowedCase += includeLowercase ? lowercaseChars : "";
  allowedCase += includeUppercase ? uppercaseChars : "";
  allowedCase += includenumbers ? numberChars : "";
  allowedCase += includeSymbols ? symbolChars : "";

  if (allowedCase.length === 0 || length<=0) {
    return "Please select at least one character type!";
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * allowedCase.length);
    pass += allowedCase[randomIndex];
  }

  return pass;
}

const passlength = 10;
const includeLowercase = true;
const includeUppercase = true;
const includenumbers = true;
const includeSymbols = true;

const pass = generatingPassword(passlength, includeLowercase, includeUppercase, includenumbers, includeSymbols);

console.log(`Generated Password: ${pass}`);
