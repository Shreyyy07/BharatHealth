import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { FaPaperPlane, FaRedo } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";
import Header from "../../components/Header";

const AskAi = () => {
  const [messages, setMessages] = useState([]); // Chat history
  const [input, setInput] = useState(""); // User input
  const [loading, setLoading] = useState(false); // AI response status
  const chatContainerRef = useRef(null); // Auto-scroll ref
  const [lastUserMessage, setLastUserMessage] = useState(""); // Track last user message

  // Auto-scroll to the latest message
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  // Function to send a message
  const sendMessage = async (messageText) => {
    if (!messageText.trim()) return;

    const newMessage = { role: "user", content: messageText };
    setMessages([...messages, newMessage]);
    setInput("");
    setLastUserMessage(messageText);
    setLoading(true);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4", // Use "gpt-3.5-turbo" for a cheaper version
          messages: [...messages, newMessage],
        },
        {
          headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;
      setMessages([...messages, newMessage, { role: "assistant", content: aiResponse }]);
    } catch (error) {
      console.error("Error fetching AI response:", error);
    }

    setLoading(false);
  };

  return (
    <div >
        <Header/>
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Header */}
      <div className="p-4 bg-blue-600 text-white flex items-center justify-between text-lg font-bold">
        <div className="flex items-center space-x-2">
          <IoMdChatbubbles size={24} />
          <span>Ask AI Assistance</span>
        </div>
      </div>

      {/* Chat Container */}
      <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 rounded-lg max-w-lg ${
              msg.role === "user"
                ? "bg-blue-500 text-white ml-auto"
                : "bg-gray-200 text-gray-900"
            }`}
          >
            {msg.content}
          </div>
        ))}

        {/* AI is thinking */}
        {loading && (
          <div className="p-3 bg-gray-300 text-gray-900 rounded-lg max-w-lg">
            AI is thinking...
          </div>
        )}
      </div>

      {/* Chat Input Section */}
      <div className="p-4 bg-white flex items-center space-x-2 border-t">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your question..."
          className="flex-1 border border-gray-300 rounded-lg px-4 py-2 outline-none"
          onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
        />
        <button
          onClick={() => sendMessage(input)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center"
          disabled={loading}
        >
          <FaPaperPlane className="mr-2" />
          Send
        </button>

        {/* Regenerate Response Button (Only shows after a message is sent) */}
        {lastUserMessage && (
          <button
            onClick={() => sendMessage(lastUserMessage)}
            className="bg-gray-600 text-white px-4 py-2 rounded-lg flex items-center"
            disabled={loading}
          >
            <FaRedo className="mr-2" />
            Retry
          </button>
        )}
      </div>
    </div>
    </div>
  );
};

export default AskAi;
