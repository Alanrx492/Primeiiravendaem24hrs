import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { questions } from '../data/quizData';
import ProgressBar from '../components/ProgressBar';
import QuizOption from '../components/QuizOption';
import Button from '../components/Button';

const QuizPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentQuestion, 
    answers, 
    answerQuestion, 
    nextQuestion, 
    previousQuestion 
  } = useQuiz();
  
  const question = questions[currentQuestion];
  const selectedAnswerIndex = answers.find(a => a.questionId === question.id)?.answerIndex;
  const hasAnswer = selectedAnswerIndex !== undefined;
  
  const handleOptionClick = (answerIndex: number) => {
    answerQuestion(question.id, answerIndex);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold mb-4 text-center">
            Quiz: Descubra seu Perfil de Vendedor
          </h1>
          <ProgressBar />
        </div>
        
        {/* Question */}
        <div className="p-6 md:p-8">
          <div className="animate-fade-in">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{question.emoji}</span>
              <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                {question.question}
              </h2>
            </div>
            
            <div className="space-y-1 mb-8">
              {question.options.map((option, index) => (
                <QuizOption
                  key={index}
                  option={option}
                  index={index}
                  isSelected={selectedAnswerIndex === index}
                  onClick={() => handleOptionClick(index)}
                />
              ))}
            </div>
            
            <div className="flex justify-between">
              <Button
                onClick={previousQuestion}
                variant="outline"
                hasArrow="left"
                disabled={currentQuestion === 0}
              >
                Anterior
              </Button>
              
              <Button
                onClick={nextQuestion}
                variant={hasAnswer ? "primary" : "outline"}
                hasArrow="right"
                disabled={!hasAnswer}
              >
                {currentQuestion < questions.length - 1 ? 'Próxima' : 'Ver Resultado'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;