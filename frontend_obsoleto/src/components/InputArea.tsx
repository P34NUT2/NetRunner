import React, { useState } from "react";
import { FaPaperclip, FaPaperPlane } from "react-icons/fa";

interface Props {
  onSendMessage: (text: string) => void;
  isTyping: boolean;
}

const InputArea: React.FC<Props> = ({ onSendMessage, isTyping }) => {
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
    if (message.trim() && !isTyping) {
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
            placeholder={isTyping ? "NetRunner está escribiendo..." : "Escribe tu mensaje..."}
            value={message}
            onChange={handleInputChange}
            disabled={isTyping}
            className={`w-full border rounded-lg px-4 py-3 pr-12 text-white focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none textarea-scrollbar ${
              isTyping 
                ? "bg-gray-700 border-gray-600 cursor-not-allowed opacity-70" 
                : "bg-gray-800 border-gray-700"
            }`}
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
          disabled={isTyping || !message.trim()}
          className={`rounded-lg w-12 h-12 flex items-center justify-center transition ${
            isTyping
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-red-500 hover:bg-red-600 text-black"
          }`}
        >
          <FaPaperPlane />
        </button>
      </form>
      <p className="text-xs text-gray-500 mt-2 px-1">
        NetRunner puede cometer errores. Verifica información importante.
      </p>
    </div>
  );
};

export default InputArea;
