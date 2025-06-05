import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/quizData';

type Answer = {
  questionId: number;
  answerIndex: number;
};

type QuizContextType = {
  currentQuestion: number;
  answers: Answer[];
  userProfile: string;
  userProfileDescription: string;
  userInfo: {
    name: string;
    contact: string;
    contactType: 'email' | 'whatsapp';
  };
  answeredQuestions: number;
  totalQuestions: number;
  answerQuestion: (questionId: number, answerIndex: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  calculateResult: () => void;
  setUserContactInfo: (name: string, contact: string, type: 'email' | 'whatsapp') => void;
};

const QuizContext = createContext<QuizContextType | undefined>(undefined);

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
};

type QuizProviderProps = {
  children: ReactNode;
};

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [userProfile, setUserProfile] = useState('');
  const [userProfileDescription, setUserProfileDescription] = useState('');
  const [userInfo, setUserInfo] = useState({
    name: '',
    contact: '',
    contactType: 'email' as const,
  });
  
  const totalQuestions = questions.length;
  const answeredQuestions = answers.length;

  const answerQuestion = (questionId: number, answerIndex: number) => {
    const existingAnswerIndex = answers.findIndex(a => a.questionId === questionId);
    
    if (existingAnswerIndex !== -1) {
      // Update existing answer
      const updatedAnswers = [...answers];
      updatedAnswers[existingAnswerIndex] = { questionId, answerIndex };
      setAnswers(updatedAnswers);
    } else {
      // Add new answer
      setAnswers([...answers, { questionId, answerIndex }]);
    }
  };

  const nextQuestion = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResult();
      navigate('/result');
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResult = () => {
    // Simple algorithm to determine user profile based on answers
    const profileTypes = [
      {
        type: 'Vendedor Raiz',
        description: 'Você tem energia para vender e está pronto para se comunicar diretamente com seu público! Sua determinação vai te levar longe nas vendas online.'
      },
      {
        type: 'Estrategista Silencioso',
        description: 'Você prefere trabalhar nos bastidores, usando sua inteligência estratégica para criar campanhas que vendem sozinhas!'
      },
      {
        type: 'Empreendedor Visionário',
        description: 'Você já pensa grande e tem ambição para construir algo escalável. Com o método certo, sua primeira venda será apenas o começo!'
      },
      {
        type: 'Buscador de Liberdade',
        description: 'Você quer se libertar do trabalho tradicional e encontrar independência financeira. Está no caminho certo!'
      }
    ];

    // Simple matching logic - can be made more sophisticated
    let profileIndex = 0;
    
    const timeAnswer = answers.find(a => a.questionId === 0)?.answerIndex || 0;
    const visibilityAnswer = answers.find(a => a.questionId === 1)?.answerIndex || 0;
    const experienceAnswer = answers.find(a => a.questionId === 2)?.answerIndex || 0;
    const motivationAnswer = answers.find(a => a.questionId === 3)?.answerIndex || 0;
    
    if (visibilityAnswer === 0 && timeAnswer >= 1) {
      profileIndex = 0; // Vendedor Raiz
    } else if (visibilityAnswer === 1) {
      profileIndex = 1; // Estrategista Silencioso
    } else if (motivationAnswer === 2) {
      profileIndex = 2; // Empreendedor Visionário
    } else {
      profileIndex = 3; // Buscador de Liberdade
    }
    
    setUserProfile(profileTypes[profileIndex].type);
    setUserProfileDescription(profileTypes[profileIndex].description);
  };

  const setUserContactInfo = (name: string, contact: string, type: 'email' | 'whatsapp') => {
    setUserInfo({
      name,
      contact,
      contactType: type
    });
  };

  const value = {
    currentQuestion,
    answers,
    userProfile,
    userProfileDescription,
    userInfo,
    answeredQuestions,
    totalQuestions,
    answerQuestion,
    nextQuestion,
    previousQuestion,
    calculateResult,
    setUserContactInfo
  };

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};