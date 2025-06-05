import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import Button from '../components/Button';
import { Lock, Gift, Mail, Phone } from 'lucide-react';

const LeadCapturePage: React.FC = () => {
  const navigate = useNavigate();
  const { userProfile, setUserContactInfo } = useQuiz();
  
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [contactType, setContactType] = useState<'email' | 'whatsapp'>('email');
  const [errors, setErrors] = useState({ name: '', contact: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const validateForm = () => {
    const newErrors = { name: '', contact: '' };
    let isValid = true;
    
    if (!name.trim()) {
      newErrors.name = 'Por favor, informe seu nome';
      isValid = false;
    }
    
    if (!contact.trim()) {
      newErrors.contact = 'Por favor, informe seu contato';
      isValid = false;
    } else if (contactType === 'email' && !/\S+@\S+\.\S+/.test(contact)) {
      newErrors.contact = 'Por favor, informe um email válido';
      isValid = false;
    } else if (contactType === 'whatsapp' && !/^\d{10,11}$/.test(contact.replace(/\D/g, ''))) {
      newErrors.contact = 'Por favor, informe um número válido (DDD + número)';
      isValid = false;
    }
    
    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setUserContactInfo(name, contact, contactType);
      navigate('/offer');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center items-center p-4">
      <div className="max-w-xl w-full bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-6 text-center">
          <div className="inline-block bg-white/20 rounded-full px-4 py-1 text-sm font-semibold mb-3">
            ÚLTIMO PASSO
          </div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            Desbloqueie Seu Plano de Ação Gratuito!
          </h1>
          <p className="text-orange-100">
            Baseado no seu perfil: <span className="font-semibold">{userProfile}</span>
          </p>
        </div>
        
        {/* Main Content */}
        <div className="p-6 md:p-8">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-6 flex items-start gap-3">
            <Gift className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <p className="text-blue-800">
              <span className="font-semibold">BÔNUS EXCLUSIVO:</span> Além do seu plano personalizado, você também vai receber acesso gratuito à nossa mini-aula "Como encontrar produtos lucrativos para vender hoje mesmo!"
            </p>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Seu nome
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Digite seu nome completo"
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
            </div>
            
            <div className="mb-2">
              <div className="flex justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Onde você quer receber seu plano?
                </label>
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1 mb-3">
                <button
                  type="button"
                  onClick={() => setContactType('email')}
                  className={`flex items-center justify-center gap-1.5 flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                    contactType === 'email' 
                      ? 'bg-white shadow text-blue-700' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </button>
                <button
                  type="button"
                  onClick={() => setContactType('whatsapp')}
                  className={`flex items-center justify-center gap-1.5 flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                    contactType === 'whatsapp' 
                      ? 'bg-white shadow text-blue-700' 
                      : 'text-gray-700 hover:text-gray-900'
                  }`}
                >
                  <Phone className="h-4 w-4" />
                  <span>WhatsApp</span>
                </button>
              </div>
              
              <input
                type={contactType === 'email' ? 'email' : 'tel'}
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder={contactType === 'email' ? 'seu-email@exemplo.com' : '(00) 00000-0000'}
                className={`w-full px-4 py-3 rounded-lg border ${errors.contact ? 'border-red-300' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
              {errors.contact && <p className="mt-1 text-sm text-red-600">{errors.contact}</p>}
            </div>
            
            <div className="flex items-center gap-2 text-gray-600 text-sm mb-6">
              <Lock className="h-4 w-4" />
              <p>Seus dados estão seguros e nunca serão compartilhados.</p>
            </div>
            
            <Button
              onClick={() => {}}
              type="submit"
              variant="secondary"
              size="lg"
              fullWidth
              disabled={isSubmitting}
              className="mb-4"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                    <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processando...
                </span>
              ) : (
                'Receber Meu Plano Gratuito Agora'
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LeadCapturePage;