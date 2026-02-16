function maskEmail(email) {
  const locateAtSign = email.indexOf('@');
  const maskedStr = email.slice(1, locateAtSign - 1).replace(/./g, '*');

  const emailFirstChar = email.slice(0, 1);
  return (
    emailFirstChar + maskedStr + email.slice(locateAtSign - 1, email.length)
  );
}
console.log(maskEmail('hello@gmail.com'));
