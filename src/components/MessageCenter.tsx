
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, Video, Phone, Send, Users, Circle } from "lucide-react";
import { useState } from "react";

const MessageCenter = () => {
  const [activeChat, setActiveChat] = useState(0);
  const [message, setMessage] = useState("");

  const conversations = [
    {
      id: 1,
      name: "Development Team",
      lastMessage: "Sprint planning meeting at 2 PM",
      time: "10:30 AM",
      unread: 3,
      online: true,
      type: "group"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      lastMessage: "Can you review the budget proposal?",
      time: "9:15 AM",
      unread: 1,
      online: true,
      type: "direct"
    },
    {
      id: 3,
      name: "Marketing Team",
      lastMessage: "Campaign metrics are looking great!",
      time: "Yesterday",
      unread: 0,
      online: false,
      type: "group"
    },
    {
      id: 4,
      name: "Alex Chen",
      lastMessage: "Thanks for the client feedback",
      time: "Yesterday",
      unread: 0,
      online: true,
      type: "direct"
    }
  ];

  const messages = [
    { id: 1, sender: "Sarah Johnson", content: "Hey! How's the quarterly review going?", time: "9:10 AM", own: false },
    { id: 2, sender: "You", content: "It's going well! Almost finished with the analysis.", time: "9:12 AM", own: true },
    { id: 3, sender: "Sarah Johnson", content: "Can you review the budget proposal?", time: "9:15 AM", own: false },
    { id: 4, sender: "You", content: "Sure, I'll take a look and get back to you this afternoon.", time: "9:16 AM", own: true }
  ];

  const sendMessage = () => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Conversations List */}
      <Card className="glass-effect lg:col-span-1">
        <CardHeader>
          <CardTitle className="text-neon-blue flex items-center gap-2">
            <MessageSquare className="h-5 w-5" />
            Messages
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="space-y-1">
            {conversations.map((conv, index) => (
              <div
                key={conv.id}
                onClick={() => setActiveChat(index)}
                className={`p-4 cursor-pointer transition-all duration-300 hover:bg-black/30 ${
                  activeChat === index ? "bg-neon-blue/20 border-r-2 border-neon-blue" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                        {conv.type === "group" ? (
                          <Users className="h-5 w-5 text-black" />
                        ) : (
                          <span className="text-black font-semibold">{conv.name.charAt(0)}</span>
                        )}
                      </div>
                      {conv.online && (
                        <Circle className="absolute -bottom-1 -right-1 w-3 h-3 text-green-400 fill-current" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-white truncate">{conv.name}</h3>
                      <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="text-xs text-gray-500">{conv.time}</span>
                    {conv.unread > 0 && (
                      <Badge className="bg-neon-cyan text-black text-xs">
                        {conv.unread}
                      </Badge>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Chat Window */}
      <Card className="glass-effect lg:col-span-2 flex flex-col">
        <CardHeader className="border-b border-gray-700">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan flex items-center justify-center">
                <span className="text-black font-semibold">
                  {conversations[activeChat]?.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-medium text-white">{conversations[activeChat]?.name}</h3>
                <p className="text-sm text-neon-cyan">
                  {conversations[activeChat]?.online ? "Online" : "Last seen yesterday"}
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="text-neon-blue hover:bg-neon-blue/20">
                <Phone className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="text-neon-blue hover:bg-neon-blue/20">
                <Video className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {/* Messages */}
        <CardContent className="flex-1 p-4 overflow-y-auto">
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div
                key={msg.id}
                className={`flex ${msg.own ? "justify-end" : "justify-start"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  msg.own 
                    ? "bg-gradient-to-r from-neon-blue to-neon-cyan text-black" 
                    : "bg-black/40 text-white border border-gray-600"
                }`}>
                  {!msg.own && (
                    <p className="text-xs text-gray-400 mb-1">{msg.sender}</p>
                  )}
                  <p className="text-sm">{msg.content}</p>
                  <p className={`text-xs mt-1 ${msg.own ? "text-black/70" : "text-gray-500"}`}>
                    {msg.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-700">
          <div className="flex gap-3">
            <Input
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              className="flex-1 bg-black/30 border-gray-600 focus:border-neon-blue"
            />
            <Button 
              onClick={sendMessage}
              className="bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MessageCenter;
