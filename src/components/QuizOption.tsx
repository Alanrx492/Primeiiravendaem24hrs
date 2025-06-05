import React from 'react';

interface QuizOptionProps {
  option: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ option, index, isSelected, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className={`
        p-4 rounded-lg border-2 cursor-pointer mb-3
        transition-all duration-300 ease-in-out
        transform hover:scale-[1.01] hover:shadow-md
        ${isSelected 
          ? 'border-blue-500 bg-blue-50 shadow-md' 
          : 'border-gray-200 hover:border-blue-300'
        }
      `}
    >
      <div className="flex items-start gap-3">
        <div className={`
          flex items-center justify-center h-7 w-7 rounded-full text-sm font-medium
          ${isSelected ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}
        `}>
          {String.fromCharCode(65 + index)}
        </div>
        <div className="text-base md:text-lg flex-1">{option}</div>
      </div>
    </div>
  );
};

export default QuizOption;