
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, Calendar, Receipt, MessageSquare, Users, Zap } from "lucide-react";

const QuickAccessWidget = () => {
  const quickActions = [
    { icon: Plus, label: "Add Task", color: "text-neon-cyan", bgColor: "bg-cyan-500/20" },
    { icon: Calendar, label: "Schedule Meeting", color: "text-neon-blue", bgColor: "bg-blue-500/20" },
    { icon: Receipt, label: "Scan Receipt", color: "text-neon-purple", bgColor: "bg-purple-500/20" },
    { icon: MessageSquare, label: "New Message", color: "text-neon-pink", bgColor: "bg-pink-500/20" },
    { icon: Users, label: "Manage Team", color: "text-neon-cyan", bgColor: "bg-cyan-500/20" },
    { icon: Zap, label: "AI Assist", color: "text-neon-blue", bgColor: "bg-blue-500/20" }
  ];

  const upcomingEvents = [
    { title: "Team Standup", time: "9:00 AM", type: "Meeting" },
    { title: "Client Review", time: "2:00 PM", type: "Call" },
    { title: "Budget Planning", time: "4:30 PM", type: "Task" }
  ];

  return (
    <Card className="glass-effect hover:neon-border transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-neon-blue flex items-center gap-2">
          <Zap className="h-5 w-5" />
          Quick Access
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {quickActions.map((action, index) => (
            <Button
              key={action.label}
              variant="ghost"
              className={`h-auto p-4 flex flex-col items-center gap-2 ${action.bgColor} hover:scale-105 transition-all duration-300 border border-transparent hover:border-current hover:shadow-lg hover:shadow-current/25`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <action.icon className={`h-6 w-6 ${action.color}`} />
              <span className={`text-xs ${action.color} font-medium`}>{action.label}</span>
            </Button>
          ))}
        </div>

        {/* Today's Schedule */}
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-neon-cyan">Today's Schedule</h3>
          <div className="space-y-2">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-black/30 hover:bg-black/40 transition-colors">
                <div>
                  <p className="text-white font-medium">{event.title}</p>
                  <p className="text-gray-400 text-sm">{event.type}</p>
                </div>
                <span className="text-neon-blue font-mono text-sm">{event.time}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuickAccessWidget;
