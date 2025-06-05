import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  text: string;
  result: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, text, result }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 border border-gray-100">
      <div className="flex items-start mb-4">
        <Quote className="h-6 w-6 text-blue-500 mr-2 flex-shrink-0 mt-1" />
        <p className="text-gray-700 italic">{text}</p>
      </div>
      
      <div className="flex items-center justify-between">
        <p className="font-medium text-gray-900">{name}</p>
        <div className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
          {result}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;