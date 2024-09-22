import React from "react";
import { checkPasswordStrength } from "../utils/passwordLogic";

interface PasswordStrengthIndicatorProps {
  password: string;
}

const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  password
}) => {
  const getStrengthLabel = (strength: number) => {
    switch (strength) {
      case 0:
      case 1:
        return "Very Weak";
      case 2:
        return "Weak";
      case 3:
        return "Medium";
      case 4:
        return "Strong";
      case 5:
        return "Very Strong";
      default:
        return "Unknown";
    }
  };

  const passwordStrength = checkPasswordStrength(password);
  const strengthLabel = getStrengthLabel(passwordStrength);
  const strengthColor =
    ["red", "orange", "yellow", "lime", "green"][passwordStrength - 1] ||
    "gray";

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between mb-1">
        <span>Password Strength:</span>
        <span style={{ color: strengthColor }}>{strengthLabel}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className="h-2.5 rounded-full"
          style={{
            width: `${(passwordStrength / 5) * 100}%`,
            backgroundColor: strengthColor
          }}
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
