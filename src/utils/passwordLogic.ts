export const generatePassword = (
  passwordLength: number,
  includeNumbers: boolean,
  includeSpecialChars: boolean,
  includeUppercase: boolean
) => {
  let chars = "abcdefghijklmnopqrstuvwxyz";
  if (includeUppercase) chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (includeNumbers) chars += "0123456789";
  if (includeSpecialChars) chars += "!@#$%^&*()_+";
  let newPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    newPassword += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return newPassword;
};

export const checkPasswordStrength = (pwd: string) => {
  let strength = 0;
  if (pwd.length >= 8) strength++;
  if (pwd.match(/[a-z]+/)) strength++;
  if (pwd.match(/[A-Z]+/)) strength++;
  if (pwd.match(/[0-9]+/)) strength++;
  if (pwd.match(/[!@#$%^&*()_+]+/)) strength++;
  return strength;
};
