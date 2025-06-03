
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Receipt, TrendingUp, Camera, FileText, PieChart } from "lucide-react";
import { useState } from "react";

const ExpenseTracker = () => {
  const [expenses] = useState([
    { id: 1, description: "Office supplies", amount: 245.67, category: "Office", date: "2024-01-15", status: "processed" },
    { id: 2, description: "Client dinner", amount: 89.50, category: "Meals", date: "2024-01-14", status: "pending" },
    { id: 3, description: "Software subscription", amount: 99.00, category: "Software", date: "2024-01-13", status: "processed" },
    { id: 4, description: "Travel expenses", amount: 456.78, category: "Travel", date: "2024-01-12", status: "tax-deductible" },
    { id: 5, description: "Marketing materials", amount: 178.90, category: "Marketing", date: "2024-01-11", status: "processed" }
  ]);

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const taxDeductible = expenses.filter(e => e.status === "tax-deductible").reduce((sum, e) => sum + e.amount, 0);
  const pendingReview = expenses.filter(e => e.status === "pending").length;

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Office": "bg-blue-500/20 text-blue-400 border-blue-500/50",
      "Meals": "bg-green-500/20 text-green-400 border-green-500/50",
      "Software": "bg-purple-500/20 text-purple-400 border-purple-500/50",
      "Travel": "bg-orange-500/20 text-orange-400 border-orange-500/50",
      "Marketing": "bg-pink-500/20 text-pink-400 border-pink-500/50"
    };
    return colors[category] || "bg-gray-500/20 text-gray-400 border-gray-500/50";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "processed": return "bg-green-500/20 text-green-400";
      case "pending": return "bg-yellow-500/20 text-yellow-400";
      case "tax-deductible": return "bg-neon-blue/20 text-neon-blue";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="glass-effect neon-border">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Expenses</p>
                <p className="text-2xl font-bold text-neon-cyan">${totalExpenses.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-neon-cyan" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Tax Deductible</p>
                <p className="text-2xl font-bold text-neon-blue">${taxDeductible.toFixed(2)}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neon-blue/20 flex items-center justify-center">
                <FileText className="h-6 w-6 text-neon-blue" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-effect">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Pending Review</p>
                <p className="text-2xl font-bold text-neon-purple">{pendingReview}</p>
              </div>
              <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center animate-pulse">
                <TrendingUp className="h-6 w-6 text-neon-purple" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Button className="h-20 bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center gap-2">
            <Camera className="h-6 w-6" />
            <span>Scan Receipt</span>
          </div>
        </Button>
        
        <Button variant="outline" className="h-20 border-neon-purple text-neon-purple hover:bg-neon-purple/20 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center gap-2">
            <PieChart className="h-6 w-6" />
            <span>View Analytics</span>
          </div>
        </Button>

        <Button variant="outline" className="h-20 border-neon-pink text-neon-pink hover:bg-neon-pink/20 hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center gap-2">
            <FileText className="h-6 w-6" />
            <span>Export Report</span>
          </div>
        </Button>
      </div>

      {/* Recent Expenses */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-neon-blue flex items-center gap-2">
            <Receipt className="h-5 w-5" />
            Recent Expenses
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div
                key={expense.id}
                className="p-4 rounded-lg bg-black/20 border border-gray-700 hover:border-neon-blue/50 transition-all duration-300 hover:scale-[1.02]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium text-white">{expense.description}</h3>
                    <div className="flex items-center gap-3 mt-2">
                      <Badge className={getCategoryColor(expense.category)}>
                        {expense.category}
                      </Badge>
                      <Badge className={getStatusColor(expense.status)}>
                        {expense.status}
                      </Badge>
                      <span className="text-sm text-gray-400">{expense.date}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-neon-cyan">${expense.amount.toFixed(2)}</p>
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

export default ExpenseTracker;
