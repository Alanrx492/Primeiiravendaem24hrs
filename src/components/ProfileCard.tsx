import React from 'react';

interface ProfileCardProps {
  profileType: string;
  description: string;
  icon?: string;
  color?: string;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ 
  profileType, 
  description, 
  icon = '🚀',
  color = 'bg-blue-500'
}) => {
  // Find matching profile from data
  const profile = profileType.toLowerCase();
  
  // Determine color classes based on profile
  let bgColor = color;
  let textColor = 'text-white';
  let bgLight = color.replace('500', '100').replace('bg-', 'bg-');
  let textColorDark = color.replace('bg-', 'text-').replace('500', '700');
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-md mx-auto transform transition-all hover:scale-[1.01]">
      <div className={`${bgColor} p-6 text-center ${textColor}`}>
        <div className="text-5xl mb-2">{icon}</div>
        <h3 className="text-2xl font-bold">{profileType}</h3>
      </div>
      
      <div className={`${bgLight} p-6`}>
        <p className={`${textColorDark} text-base leading-relaxed`}>
          {description}
        </p>
        
        <div className="mt-6 text-center">
          <div className={`inline-block ${textColorDark} font-medium rounded-lg border-2 ${color.replace('bg-', 'border-').replace('500', '400')} px-4 py-2`}>
            Seu perfil de vendedor
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;