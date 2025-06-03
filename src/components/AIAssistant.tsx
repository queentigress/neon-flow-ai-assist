
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Lightbulb, ArrowRight, Sparkles } from "lucide-react";

interface AIAssistantProps {
  suggestions: string[];
}

const AIAssistant = ({ suggestions }: AIAssistantProps) => {
  return (
    <Card className="glass-effect hover:neon-border transition-all duration-300 animate-float">
      <CardHeader>
        <CardTitle className="text-neon-blue flex items-center gap-2">
          <Brain className="h-5 w-5 animate-pulse" />
          AI Smart Suggestions
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center gap-2 p-3 rounded-lg bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 border border-neon-blue/30">
          <Sparkles className="h-4 w-4 text-neon-cyan animate-pulse" />
          <span className="text-xs text-neon-cyan font-medium">AI Assistant Active</span>
        </div>

        <div className="space-y-3">
          {suggestions.map((suggestion, index) => (
            <div
              key={index}
              className="group p-3 rounded-lg bg-black/20 hover:bg-black/30 border border-transparent hover:border-neon-blue/50 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-3">
                <Lightbulb className="h-4 w-4 text-neon-cyan mt-0.5 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-gray-300 group-hover:text-white transition-colors">
                    {suggestion}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-neon-blue opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>

        <Button className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-neon-blue/25">
          <Brain className="h-4 w-4 mr-2" />
          Get More Suggestions
        </Button>
      </CardContent>
    </Card>
  );
};

export default AIAssistant;
