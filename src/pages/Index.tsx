
import { Brain, Calendar, DollarSign, MessageSquare, Users, Zap, CheckCircle, Clock, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import QuickAccessWidget from "@/components/QuickAccessWidget";
import AIAssistant from "@/components/AIAssistant";
import TaskManager from "@/components/TaskManager";
import ExpenseTracker from "@/components/ExpenseTracker";
import MessageCenter from "@/components/MessageCenter";

const Index = () => {
  const [activeSection, setActiveSection] = useState("dashboard");

  const stats = [
    { title: "Tasks Completed", value: "24", icon: CheckCircle, color: "text-neon-cyan" },
    { title: "Monthly Expenses", value: "$3,247", icon: DollarSign, color: "text-neon-blue" },
    { title: "Team Members", value: "12", icon: Users, color: "text-neon-purple" },
    { title: "Upcoming Meetings", value: "7", icon: Clock, color: "text-neon-pink" }
  ];

  const aiSuggestions = [
    "Schedule team standup for tomorrow at 9 AM",
    "Review quarterly budget - 15% under target",
    "Follow up with 3 pending client proposals",
    "Optimize workflow for project deadlines"
  ];

  const renderActiveSection = () => {
    switch (activeSection) {
      case "tasks":
        return <TaskManager />;
      case "expenses":
        return <ExpenseTracker />;
      case "messages":
        return <MessageCenter />;
      default:
        return (
          <div className="space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={stat.title} className="glass-effect hover:neon-border transition-all duration-300 animate-float" style={{ animationDelay: `${index * 0.1}s` }}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium text-gray-300">{stat.title}</CardTitle>
                    <stat.icon className={`h-4 w-4 ${stat.color}`} />
                  </CardHeader>
                  <CardContent>
                    <div className={`text-2xl font-bold ${stat.color} animate-glow`}>{stat.value}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Access Widgets */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <QuickAccessWidget />
              </div>
              <div>
                <AIAssistant suggestions={aiSuggestions} />
              </div>
            </div>

            {/* Recent Activity */}
            <Card className="glass-effect">
              <CardHeader>
                <CardTitle className="text-neon-blue flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Completed expense report for Q4",
                    "Scheduled meeting with development team",
                    "Added 3 new tasks to project backlog",
                    "Processed 12 receipts automatically"
                  ].map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
                      <div className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse"></div>
                      <span className="text-gray-300">{activity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neon-darker via-slate-900 to-neon-dark">
      {/* Header */}
      <header className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-shrink-0">
              <Brain className="h-8 w-8 text-neon-blue animate-pulse" />
              <h1 className="text-2xl font-bold text-neon-blue animate-glow whitespace-nowrap">Task Master AI</h1>
            </div>
            <nav className="hidden md:flex items-center gap-2 flex-shrink-0">
              {[
                { id: "dashboard", label: "Dashboard", icon: Zap },
                { id: "tasks", label: "Tasks", icon: Calendar },
                { id: "expenses", label: "Expenses", icon: DollarSign },
                { id: "messages", label: "Messages", icon: MessageSquare }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center gap-2 transition-all duration-300 whitespace-nowrap px-4 py-2 min-w-fit ${
                    activeSection === item.id 
                      ? "bg-neon-blue/20 text-neon-blue neon-border" 
                      : "text-gray-400 hover:text-neon-blue hover:bg-neon-blue/10"
                  }`}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="hidden lg:inline">{item.label}</span>
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        {renderActiveSection()}
      </main>
    </div>
  );
};

export default Index;
