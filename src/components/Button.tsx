import React from 'react';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  hasArrow?: 'right' | 'left' | 'none';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'md',
  fullWidth = false,
  hasArrow = 'none',
  disabled = false,
  className = ''
}) => {
  const baseClasses = "font-medium rounded-lg focus:ring-4 focus:outline-none transition-all duration-300 ease-in-out inline-flex items-center justify-center";
  
  const variantClasses = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-300 active:bg-blue-800",
    secondary: "bg-orange-500 hover:bg-orange-600 text-white focus:ring-orange-300 active:bg-orange-700",
    success: "bg-green-500 hover:bg-green-600 text-white focus:ring-green-300 active:bg-green-700",
    outline: "bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-300 active:bg-blue-100"
  };
  
  const sizeClasses = {
    sm: "px-3 py-2 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-6 py-3 text-lg"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const disabledClass = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer";
  
  const ArrowIcon = () => {
    if (hasArrow === 'right') return <ArrowRight className="ml-2 h-4 w-4" />;
    if (hasArrow === 'left') return <ArrowLeft className="mr-2 h-4 w-4" />;
    return null;
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${disabledClass} ${className}`}
    >
      {hasArrow === 'left' && <ArrowIcon />}
      {children}
      {hasArrow === 'right' && <ArrowIcon />}
    </button>
  );
};

export default Button;