import { useState } from "react";
import DashboardLayout from '../layout/DashboardLayout';
import { FaPaperclip, FaPaperPlane, FaPlus } from "react-icons/fa";

const chatData = [
  {
    id: 1,
    name: "Alice",
    avatar: "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-003.jpg",
    lastMessage: "Ok",
    time: "10:30 AM",
    messages: [
      { sender: "Alice", content: "Hey there! How's it going?", time: "10:25 AM" },
      { sender: "me", content: "Pretty good, working on the new feature. You?", time: "10:26 AM" },
      { sender: "Alice", content: "Just finished the design mockups. Wanna take a look?", time: "10:27 AM" },
      { sender: "me", content: "Sure, send them over!", time: "10:29 AM" },
      { sender: "Alice", content: "Ok", time: "10:30 AM" },
    ],
  },
  {
    id: 2,
    name: "Bob Johnson",
    avatar: "https://www.vietnamworks.com/hrinsider/wp-content/uploads/2023/12/anh-den-ngau-005.jpg",
    lastMessage: "Can you review this PR?",
    time: "Yesterday",
    messages: [
      { sender: "Bob Johnson", content: "Can you review this PR?", time: "3:15 PM" },
      { sender: "me", content: "Sure, I’ll check it now.", time: "3:20 PM" }
    ],
  },
  {
    id: 3,
    name: "Project A Team",
    avatar: "https://ui-avatars.com/api/?name=PA",
    lastMessage: "Don't forget the deadline.",
    time: "9:45 AM",
    messages: [
      { sender: "Project A Team", content: "Bob: Don’t forget the deadline.", time: "9:45 AM" }
    ],
  },
];

export default function ChatPanel() {
  const [selectedUser, setSelectedUser] = useState(chatData[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    setSelectedUser((prev) => ({
      ...prev,
      messages: [
        ...prev.messages,
        {
          sender: "me",
          content: newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        },
      ],
    }));
    setNewMessage("");
  };

  const filteredChats = chatData.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastMessage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <DashboardLayout>
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-2">
        </div>
    <div className="flex h-screen bg-gradient-to-b from-[#e2d4fc] to-[#fcddec]">
        
        
      {/* Sidebar tin nhắn */}
      <div className="w-1/3 border-r border-purple-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-purple-600">Tin Nhắn</h2>
          <button className="text-pink-400 hover:text-pink-600">
            <FaPlus />
          </button>
        </div>
        <input
          type="text"
          placeholder="Tìm kiếm cuộc trò chuyện..."
          className="w-full mb-4 px-3 py-2 rounded bg-white border"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="space-y-2 text-left">
          {filteredChats.map((user) => (
            <div
              key={user.id}
              className={`flex items-center p-2 rounded cursor-pointer hover:bg-pink-200 ${
                selectedUser.id === user.id ? "bg-pink-300" : ""
              }`}
              onClick={() => setSelectedUser(user)}
            >
              <img src={user.avatar} className="w-10 h-10 rounded-full mr-2" />
              <div className="flex-1">
                <div className="font-bold text-pink-800">{user.name}</div>
                <div className="text-sm text-gray-700 truncate">{user.lastMessage}</div>
              </div>
              <div className="text-sm text-gray-500">{user.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Khung chat chính */}
      <div className="flex-1 flex flex-col justify-between">
        {/* Header */}
        <div className="flex items-center p-4 bg-pink-200">
          <img src={selectedUser.avatar} className="w-10 h-10 rounded-full mr-3" />
          <div>
            <div className="text-lg font-bold text-fuchsia-800">{selectedUser.name}</div>
            <div className="text-sm text-green-500 text-left">Online</div>
          </div>
        </div>

        {/* Nội dung tin nhắn */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-[#f4d5f8] to-[#fbd1e6]">
          {selectedUser.messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex ${msg.sender === "me" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[60%] px-4 py-2 rounded-lg whitespace-pre-line shadow ${
                  msg.sender === "me" ? "bg-pink-400 text-white" : "bg-pink-100 text-black"
                }`}
              >
                <div>{msg.content}</div>
                <div className="text-xs text-gray-600 mt-1 text-right">{msg.time}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Nhập tin nhắn */}
        <div className="p-4 flex items-center gap-2 bg-white border-t">
          <button className="text-gray-600 hover:text-gray-800">
            <FaPaperclip />
          </button>
          <input
            type="text"
            className="flex-1 px-4 py-2 border rounded-full"
            placeholder="Nhập tin nhắn..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="bg-pink-400 p-3 rounded-full text-white hover:bg-pink-500"
          >
            <FaPaperPlane />
          </button>
        </div>
      </div>
    </div>
    </DashboardLayout>
  );
}
