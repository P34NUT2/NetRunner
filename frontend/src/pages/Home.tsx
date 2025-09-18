import React, { useState } from 'react';
import Header from '../components/Header';
import MessageBox from '../components/MessagesBox';
import InputArea from '../components/InputArea';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<{text: string, sender: 'user' | 'bot'}[]>([]);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const botResponses = [
    "Interesante perspectiva sobre ese tema...",
    "Entiendo tu punto de vista perfectamente.",
    "¿Podrías contarme más detalles sobre eso?",
    "Es una buena pregunta, déjame pensar...",
    "Fascinante. Nunca lo había visto desde ese ángulo.",
    "Eso me recuerda a algo que leí recientemente...",
    "¡Qué curioso! Es un tema muy complejo.",
    "Me parece una observación muy acertada.",
    "Entiendo. ¿Y cómo te sientes al respecto?",
    "Es un punto muy válido el que mencionas."
  ];

  const getRandomBotResponse = (): string => {
    const randomIndex = Math.floor(Math.random() * botResponses.length);
    return botResponses[randomIndex];
  };

  const addMessage = (text: string, sender: 'user' | 'bot') => {
    console.log("Mensaje agregado en Home:", text, "de:", sender);
    setMessages(prevMessages => [...prevMessages, { text, sender }]);
  };

  const handleSendMessage = (text: string) => {
    // Agregar mensaje del usuario
    addMessage(text, 'user');
    
    // Activar indicador de typing
    setIsTyping(true);
    
    // Simular respuesta del bot después de un delay
    setTimeout(() => {
      setIsTyping(false); // Desactivar indicador
      const botResponse = getRandomBotResponse();
      addMessage(botResponse, 'bot');
    }, 1000 + Math.random() * 1500); // Entre 1 y 2.5 segundos
  };

  return (
    <div className="bg-black text-gray-100 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-6 max-w-4xl pt-24">
            <MessageBox messages={messages} isTyping={isTyping} />
        </main>
        {/* Input fijo en la parte inferior */}
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent pt-8">   
          <div className="container mx-auto px-4 py-4 max-w-4xl">
            <InputArea onSendMessage={handleSendMessage} isTyping={isTyping} />
          </div>
        </div>
    </div>
  );
};

export default Home;