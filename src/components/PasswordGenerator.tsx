import React, { useState } from "react";
import PasswordStrengthIndicator from "./PasswordStrengthIndicator";
import { generatePassword } from "../utils/passwordLogic";

const PasswordGenerator = () => {
  const [passwordLength, setPasswordLength] = useState(16);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(true);

  const [password, setPassword] = useState(
    generatePassword(
      passwordLength,
      includeNumbers,
      includeSpecialChars,
      includeUppercase
    )
  );

  const handleLengthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newLength = Number(e.target.value);
    setPasswordLength(newLength);
    const newPassword = generatePassword(
      passwordLength,
      includeNumbers,
      includeSpecialChars,
      includeUppercase
    );
    setPassword(newPassword);
  };

  const handlePasswordChange = (newPassword: string) => {
    setPassword(newPassword);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full mb-4">
        <input
          type="text"
          className="border-2 border-gray-300 rounded-l-md p-2 flex-grow"
          value={password}
          onChange={(e) => handlePasswordChange(e.target.value)}
        />
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-r-md"
          onClick={() => {
            navigator.clipboard.writeText(password);
          }}
        >
          Copy
        </button>
      </div>
      <div className="flex w-full mb-4 items-center">
        <label htmlFor="passwordLength" className="mr-2">
          Password Length:
        </label>
        <input
          type="number"
          id="passwordLength"
          min="4"
          max="64"
          value={passwordLength}
          onChange={handleLengthChange}
          className="border-2 border-gray-300 rounded-md p-2 w-20"
        />
      </div>
      <div className="flex w-full mb-4 justify-between">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeNumbers"
            checked={includeNumbers}
            onChange={() => {
              setIncludeNumbers(!includeNumbers);
              handlePasswordChange(
                generatePassword(
                  passwordLength,
                  includeNumbers,
                  includeSpecialChars,
                  includeUppercase
                )
              );
            }}
            className="mr-2"
          />
          <label htmlFor="includeNumbers">Include Numbers</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeSpecialChars"
            checked={includeSpecialChars}
            onChange={() => {
              setIncludeSpecialChars(!includeSpecialChars);
              handlePasswordChange(
                generatePassword(
                  passwordLength,
                  includeNumbers,
                  includeSpecialChars,
                  includeUppercase
                )
              );
            }}
            className="mr-2"
          />
          <label htmlFor="includeSpecialChars">
            Include Special Characters
          </label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            id="includeUppercase"
            checked={includeUppercase}
            onChange={() => {
              setIncludeUppercase(!includeUppercase);
              handlePasswordChange(
                generatePassword(
                  passwordLength,
                  includeNumbers,
                  includeSpecialChars,
                  includeUppercase
                )
              );
            }}
            className="mr-2"
          />
          <label htmlFor="includeUppercase">Include Uppercase Letters</label>
        </div>
      </div>
      <PasswordStrengthIndicator password={password} />
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        onClick={() =>
          handlePasswordChange(
            generatePassword(
              passwordLength,
              includeNumbers,
              includeSpecialChars,
              includeUppercase
            )
          )
        }
      >
        Generate Password
      </button>
    </div>
  );
};

export default PasswordGenerator;
