import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { profiles } from '../data/quizData';
import ProfileCard from '../components/ProfileCard';
import Button from '../components/Button';
import { Check, ArrowRight } from 'lucide-react';

const ResultPage: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, userProfileDescription } = useQuiz();
  
  // Find matching profile from data
  const profileData = profiles.find(p => p.type === userProfile) || profiles[0];
  
  // Add animation after mount
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    setTimeout(() => {
      elements.forEach((el, i) => {
        setTimeout(() => {
          (el as HTMLElement).classList.add('opacity-100', 'translate-y-0');
        }, i * 150);
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center items-center p-4 py-10">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-4 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            Resultado do Quiz
          </div>
          <h1 className="text-3xl font-bold mb-2 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            Parabéns! Descobrimos seu perfil 🎉
          </h1>
          <p className="text-blue-100 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            Agora sabemos exatamente como você pode fazer sua primeira venda nas próximas 24 horas!
          </p>
        </div>
        
        {/* Profile Card */}
        <div className="p-6 md:p-8">
          <div className="animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            <ProfileCard 
              profileType={profileData.type}
              description={profileData.description}
              icon={profileData.icon}
              color={profileData.color}
            />
          </div>
          
          <div className="mt-8 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              O que isso significa para você:
            </h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Você tem um potencial incrível para vendas online com o método certo.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Baseado no seu perfil, você pode fazer sua primeira venda sem investir dinheiro.</p>
              </div>
              
              <div className="flex items-start gap-2">
                <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700">Temos um plano de ação personalizado pronto para você começar hoje mesmo.</p>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 border border-orange-100 rounded-lg p-4 mb-6 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            <p className="text-orange-800">
              <span className="font-semibold">ATENÇÃO:</span> Para receber seu plano de ação gratuito personalizado para o perfil <span className="font-semibold">{userProfile}</span>, clique no botão abaixo!
            </p>
          </div>
          
          <div className="text-center animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            <Button 
              onClick={() => navigate('/lead')} 
              variant="secondary" 
              size="lg" 
              fullWidth
              className="group"
            >
              <span>Desbloquear Meu Plano de Ação Gratuito</span>
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;