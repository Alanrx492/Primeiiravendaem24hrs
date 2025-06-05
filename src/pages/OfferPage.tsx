import React from 'react';
import { useQuiz } from '../context/QuizContext';
import Button from '../components/Button';
import CountdownTimer from '../components/CountdownTimer';
import TestimonialCard from '../components/TestimonialCard';
import { testimonials } from '../data/quizData';
import { Check, Award, Zap, DollarSign, ShieldCheck, Clock, X } from 'lucide-react';

const OfferPage: React.FC = () => {
  const { userProfile, userInfo } = useQuiz();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white p-6 md:p-8 text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-medium mb-3">
            ATENÇÃO {userInfo.name?.split(' ')[0] || 'Empreendedor'}!
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-3">
            PARE TUDO e Leia Esta Mensagem!
          </h1>
          <p className="text-xl text-white max-w-2xl mx-auto">
            Os Próximos <span className="font-bold underline decoration-2">2 Minutos</span> Podem Mudar Completamente Sua Vida Financeira...
          </p>
        </div>
        
        {/* Main Content */}
        <div className="p-6 md:p-8">
          {/* Urgency Block */}
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-8">
            <div className="flex items-center gap-2 text-red-700 font-medium mb-2">
              <Clock className="h-5 w-5" />
              <span>OFERTA COM TEMPO LIMITADO</span>
            </div>
            <p className="text-red-600">
              Esta página será removida em breve. Se você sair agora, pode perder a única chance de transformar sua vida financeira nas próximas 24 horas.
            </p>
          </div>

          {/* Main Pitch */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              Enquanto Você Lê Esta Mensagem...<br/>
              <span className="text-red-600">Centenas de Pessoas</span> Estão Fazendo Sua Primeira Venda Online
            </h2>
            
            <div className="space-y-6 text-lg">
              <p className="font-medium text-gray-800">
                A pergunta é: Por que não você?
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-3">A Dura Verdade:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <p>Seu emprego não vai te dar a liberdade que você merece</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <p>Inflação comendo seu salário todos os meses</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <X className="h-5 w-5 text-red-500 mt-1" />
                    <p>Sonhos adiados por falta de dinheiro</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-xl mb-3">A Boa Notícia:</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1" />
                    <p>Você pode começar sua jornada HOJE mesmo</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1" />
                    <p>Sem precisar investir dinheiro</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-green-500 mt-1" />
                    <p>Resultados possíveis em 24 horas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Testimonials */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-800 mb-4 text-center">
              Pessoas Comuns Que Mudaram de Vida:
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={index}
                  name={testimonial.name}
                  text={testimonial.text}
                  result={testimonial.result}
                />
              ))}
            </div>
          </div>
          
          {/* Price and CTA */}
          <div className="border-2 border-red-200 rounded-xl p-6 md:p-8 mb-8 bg-gradient-to-b from-white to-red-50">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Sua Decisão Agora:
              </h3>
              <p className="text-lg text-gray-700">
                Continuar na mesma situação... Ou dar o primeiro passo para mudar de vida?
              </p>
            </div>

            <div className="flex justify-between items-center mb-6">
              <div>
                <p className="text-gray-500 line-through text-lg">De R$97</p>
                <p className="text-3xl md:text-4xl font-bold text-red-600">Por apenas R$19,90</p>
                <p className="text-gray-700 text-sm">Última chance neste valor!</p>
              </div>
              <div className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full font-semibold text-sm">
                80% de desconto
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-2 text-gray-700">
                <Award className="h-5 w-5 text-red-500" />
                <p>Acesso vitalício ao método completo</p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <Zap className="h-5 w-5 text-red-500" />
                <p>Resultados possíveis nas primeiras 24 horas</p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <DollarSign className="h-5 w-5 text-red-500" />
                <p>Sem necessidade de investimento em anúncios</p>
              </div>
              
              <div className="flex items-center gap-2 text-gray-700">
                <ShieldCheck className="h-5 w-5 text-red-500" />
                <p>Garantia de 7 dias de satisfação ou seu dinheiro de volta</p>
              </div>
            </div>
            
            <CountdownTimer initialMinutes={30} />
            
            <div className="mt-6">
              <Button
                onClick={() => window.open('https://pay.cakto.com.br/CG6miE9?affiliate=4mJfKPYg', '_blank')}
                variant="success"
                size="lg"
                fullWidth
                className="text-lg py-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 animate-pulse"
              >
                SIM! QUERO COMEÇAR A MUDAR MINHA VIDA AGORA
              </Button>
              
              <p className="text-center text-sm text-gray-500 mt-3">
                Pagamento 100% seguro • Satisfação garantida
              </p>
            </div>
          </div>
          
          {/* Scarcity Close */}
          <div className="text-center bg-gray-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Pense Bem...
            </h3>
            <p className="text-gray-700 mb-4">
              O que são R$19,90 comparado com a possibilidade de fazer sua primeira venda online e começar sua liberdade financeira?
            </p>
            <p className="text-gray-700">
              Não deixe que o medo da mudança te impeça de transformar sua vida.
            </p>
          </div>
          
          {/* Final CTA */}
          <div className="text-center">
            <Button
              onClick={() => window.open('https://pay.cakto.com.br/CG6miE9?affiliate=4mJfKPYg', '_blank')}
              variant="secondary"
              size="lg"
              className="mb-4 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600"
            >
              QUERO COMEÇAR AGORA MESMO
            </Button>
            
            <p className="text-red-600 font-medium">
              ⚠️ Aviso: Esta oferta expira em breve e não será repetida!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPage;