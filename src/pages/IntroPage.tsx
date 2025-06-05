import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Award, TrendingUp, DollarSign, Clock } from 'lucide-react';
import Button from '../components/Button';

const IntroPage: React.FC = () => {
  const navigate = useNavigate();
  
  // Add animation classes after component mounts
  useEffect(() => {
    const elements = document.querySelectorAll('.animate-on-mount');
    setTimeout(() => {
      elements.forEach((el, i) => {
        setTimeout(() => {
          (el as HTMLElement).classList.add('opacity-100', 'translate-y-0');
        }, i * 100);
      });
    }, 100);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center items-center px-4 py-8">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            Descubra seu Perfil de Vendedor em 24h! 🚀
          </h1>
          <p className="text-lg text-blue-100 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            Teste gratuito + plano personalizado para sua primeira venda online
          </p>
        </div>
        
        {/* Main Content */}
        <div className="p-6 md:p-8">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            <p className="text-blue-800 font-medium">
              ✨ Responda 5 perguntas rápidas e descubra como você pode fazer sua primeira venda em 24 horas sem investir nada!
            </p>
          </div>
          
          <h2 className="text-xl font-bold text-gray-800 mb-6 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            O que você vai descobrir:
          </h2>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
              <div className="bg-orange-100 p-2 rounded-full text-orange-600">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Seu perfil de vendedor</h3>
                <p className="text-gray-600">Descubra seus pontos fortes para ter sucesso nas vendas online.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
              <div className="bg-green-100 p-2 rounded-full text-green-600">
                <TrendingUp className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Plano de ação personalizado</h3>
                <p className="text-gray-600">Receba um passo a passo adaptado ao seu perfil e disponibilidade.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
              <div className="bg-blue-100 p-2 rounded-full text-blue-600">
                <DollarSign className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Método sem investimento</h3>
                <p className="text-gray-600">Aprenda como fazer sua primeira venda sem gastar um centavo.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3 animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
              <div className="bg-purple-100 p-2 rounded-full text-purple-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Resultados em 24 horas</h3>
                <p className="text-gray-600">Descubra como pessoas comuns estão fazendo sua primeira venda em apenas um dia.</p>
              </div>
            </div>
          </div>
          
          <div className="text-center animate-on-mount opacity-0 translate-y-4 transition-all duration-500">
            <Button 
              onClick={() => navigate('/quiz')} 
              variant="secondary" 
              size="lg" 
              hasArrow="right"
              className="animate-pulse"
            >
              Iniciar Quiz Gratuito
            </Button>
            
            <p className="text-sm text-gray-500 mt-4">
              100% grátis • Leva menos de 2 minutos • Sem compromisso
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;