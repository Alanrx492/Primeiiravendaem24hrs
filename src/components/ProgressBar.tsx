import React from 'react';
import { useQuiz } from '../context/QuizContext';

const ProgressBar = () => {
  const { answeredQuestions, totalQuestions, currentQuestion } = useQuiz();
  
  const progressPercentage = (currentQuestion / (totalQuestions - 1)) * 100;

  return (
    <div className="w-full">
      <div className="flex justify-between mb-1 text-xs font-medium">
        <span className="text-blue-500">Progresso</span>
        <span className="text-blue-600 font-semibold">{Math.round(progressPercentage)}%</span>
      </div>
      <div className="w-full h-2.5 bg-blue-100 rounded-full overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <div className="flex justify-between mt-1.5 text-xs">
        <span>Pergunta {currentQuestion + 1} de {totalQuestions}</span>
      </div>
    </div>
  );
};

export default ProgressBar;