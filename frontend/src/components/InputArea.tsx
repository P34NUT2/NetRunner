import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

interface Props {
  onSendMessage: (text: string) => void;
}

const InputArea: React.FC<Props> = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");

    /*Con esto se interactua con el evento y pdemos atrabes de los atributos del text area y el evento hacer  resize al textarea */
  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    setMessage(textarea.value);

    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message.trim());
      setMessage("");
      
      // Reset textarea height
      const textarea = document.getElementById("user-input") as HTMLTextAreaElement;
      if (textarea) {
        textarea.style.height = "auto";
      }
    }
  };

  return (
    <div className="bg-gray-900 rounded-lg border border-gray-800 p-4">
      <form id="chat-form" className="flex space-x-3" onSubmit={handleSubmit}>
        <div className="flex-1 relative">
          <textarea
            id="user-input"
            rows={1}
            placeholder="Escribe tu mensaje..."
            value={message}
            onChange={handleInputChange}
            className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none textarea-scrollbar"
            style={{ minHeight: "50px", maxHeight: "230px" }}
          />
          <button
            type="button"
            className="absolute right-3 bottom-3 text-gray-400 hover:text-red-500"
          >
            <FaPaperclip />
          </button>
        </div>
        <button
          type="submit"
          className="bg-red-500 hover:bg-red-600 text-black rounded-lg w-12 h-12 flex items-center justify-center transition"
        >
          <FaPaperPlane />
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-2 px-1">
        NexusAI puede cometer errores. Verifica información importante.
      </p>
    </div>
  );
};

export default InputArea;
