
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Circle, Plus, Calendar, Star, Zap } from "lucide-react";
import { useState } from "react";

const TaskManager = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Review quarterly financial reports", completed: false, priority: "high", dueDate: "Today" },
    { id: 2, title: "Schedule team performance reviews", completed: true, priority: "medium", dueDate: "Yesterday" },
    { id: 3, title: "Update employee handbook", completed: false, priority: "low", dueDate: "Next Week" },
    { id: 4, title: "Prepare client presentation", completed: false, priority: "high", dueDate: "Tomorrow" },
    { id: 5, title: "Analyze marketing campaign ROI", completed: true, priority: "medium", dueDate: "2 days ago" }
  ]);

  const [newTask, setNewTask] = useState("");

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, {
        id: Date.now(),
        title: newTask,
        completed: false,
        priority: "medium",
        dueDate: "Today"
      }]);
      setNewTask("");
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-red-500/20 text-red-400 border-red-500/50";
      case "medium": return "bg-yellow-500/20 text-yellow-400 border-yellow-500/50";
      case "low": return "bg-green-500/20 text-green-400 border-green-500/50";
      default: return "bg-gray-500/20 text-gray-400 border-gray-500/50";
    }
  };

  const completedTasks = tasks.filter(task => task.completed).length;
  const totalTasks = tasks.length;
  const completionRate = Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect neon-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Completion Rate</p>
                <p className="text-2xl font-bold text-neon-cyan">{completionRate}%</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                <Star className="h-6 w-6 text-neon-cyan" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Tasks Completed</p>
                <p className="text-2xl font-bold text-neon-blue">{completedTasks}/{totalTasks}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <CheckCircle className="h-6 w-6 text-neon-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Productivity Score</p>
                <p className="text-2xl font-bold text-neon-purple">A+</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center animate-pulse">
                <Zap className="h-6 w-6 text-neon-purple" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Add New Task */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-neon-blue flex items-center gap-2">
            <Plus className="h-5 w-5" />
            Add New Task
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-3">
            <Input
              placeholder="Enter task description..."
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTask()}
              className="flex-1 bg-black/30 border-gray-600 focus:border-neon-blue"
            />
            <Button onClick={addTask} className="bg-neon-blue hover:bg-neon-cyan text-black font-semibold">
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Task List */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-neon-blue flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            Your Tasks
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div
                key={task.id}
                className={`p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${
                  task.completed 
                    ? "bg-green-500/10 border-green-500/30" 
                    : "bg-black/20 border-gray-700 hover:border-neon-blue/50"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <button
                    onClick={() => toggleTask(task.id)}
                    className="mt-1 text-neon-blue hover:text-neon-cyan transition-colors"
                  >
                    {task.completed ? (
                      <CheckCircle className="h-5 w-5" />
                    ) : (
                      <Circle className="h-5 w-5" />
                    )}
                  </button>
                  
                  <div className="flex-1">
                    <h3 className={`font-medium ${task.completed ? "line-through text-gray-500" : "text-white"}`}>
                      {task.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge className={getPriorityColor(task.priority)}>
                        {task.priority}
                      </Badge>
                      <span className="text-sm text-gray-400">{task.dueDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TaskManager;
