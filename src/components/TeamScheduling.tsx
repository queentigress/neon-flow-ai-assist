
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, Users, Plus, Edit, Trash2, UserCheck, MapPin } from "lucide-react";
import { useState } from "react";

const TeamScheduling = () => {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [newShift, setNewShift] = useState({ employee: "", start: "", end: "", position: "" });

  const employees = [
    { id: 1, name: "Sarah Johnson", position: "Manager", status: "Available", avatar: "SJ" },
    { id: 2, name: "Mike Chen", position: "Server", status: "Scheduled", avatar: "MC" },
    { id: 3, name: "Emma Davis", position: "Cook", status: "Off", avatar: "ED" },
    { id: 4, name: "Alex Rivera", position: "Cashier", status: "Available", avatar: "AR" },
    { id: 5, name: "Jordan Taylor", position: "Server", status: "Scheduled", avatar: "JT" }
  ];

  const shifts = [
    { id: 1, employee: "Sarah Johnson", position: "Manager", start: "08:00", end: "16:00", date: "2024-01-15" },
    { id: 2, employee: "Mike Chen", position: "Server", start: "10:00", end: "18:00", date: "2024-01-15" },
    { id: 3, employee: "Jordan Taylor", position: "Server", start: "14:00", end: "22:00", date: "2024-01-15" },
    { id: 4, employee: "Emma Davis", position: "Cook", start: "09:00", end: "17:00", date: "2024-01-16" }
  ];

  const positions = ["Manager", "Server", "Cook", "Cashier", "Host"];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available": return "text-neon-cyan";
      case "Scheduled": return "text-neon-blue";
      case "Off": return "text-gray-400";
      default: return "text-gray-300";
    }
  };

  const todaysShifts = shifts.filter(shift => shift.date === selectedDate);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="glass-effect">
        <CardHeader>
          <CardTitle className="text-neon-blue flex items-center gap-2">
            <Users className="h-6 w-6" />
            Team Scheduling Dashboard
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-neon-cyan" />
              <Label htmlFor="date" className="text-gray-300">Select Date:</Label>
              <Input
                id="date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-auto bg-black/30 border-gray-600 text-white"
              />
            </div>
            <div className="flex gap-2">
              <Button className="bg-neon-blue/20 text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/30">
                <Plus className="h-4 w-4 mr-2" />
                Add Shift
              </Button>
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <UserCheck className="h-4 w-4 mr-2" />
                Bulk Schedule
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Employee List */}
        <Card className="glass-effect">
          <CardHeader>
            <CardTitle className="text-neon-cyan flex items-center gap-2">
              <Users className="h-5 w-5" />
              Team Members
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {employees.map((employee) => (
              <div key={employee.id} className="flex items-center justify-between p-3 rounded-lg bg-black/20 hover:bg-black/30 transition-colors">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue font-bold">
                    {employee.avatar}
                  </div>
                  <div>
                    <p className="text-white font-medium">{employee.name}</p>
                    <p className="text-gray-400 text-sm">{employee.position}</p>
                  </div>
                </div>
                <span className={`text-sm font-medium ${getStatusColor(employee.status)}`}>
                  {employee.status}
                </span>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Today's Schedule */}
        <div className="lg:col-span-2 space-y-4">
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-neon-purple flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Schedule for {new Date(selectedDate).toLocaleDateString()}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {todaysShifts.length > 0 ? (
                <div className="space-y-3">
                  {todaysShifts.map((shift) => (
                    <div key={shift.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10 border border-neon-blue/30">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4 text-neon-cyan" />
                          <span className="text-white font-mono">
                            {shift.start} - {shift.end}
                          </span>
                        </div>
                        <div>
                          <p className="text-white font-medium">{shift.employee}</p>
                          <p className="text-gray-300 text-sm flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {shift.position}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="ghost" className="text-neon-blue hover:text-neon-cyan">
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <Clock className="h-12 w-12 text-gray-500 mx-auto mb-4" />
                  <p className="text-gray-400">No shifts scheduled for this date</p>
                  <Button className="mt-4 bg-neon-blue/20 text-neon-blue border border-neon-blue/50 hover:bg-neon-blue/30">
                    <Plus className="h-4 w-4 mr-2" />
                    Add First Shift
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Quick Add Shift */}
          <Card className="glass-effect">
            <CardHeader>
              <CardTitle className="text-neon-pink flex items-center gap-2">
                <Plus className="h-5 w-5" />
                Quick Add Shift
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor="employee" className="text-gray-300">Employee</Label>
                  <select 
                    id="employee"
                    className="w-full mt-1 p-2 bg-black/30 border border-gray-600 rounded-md text-white"
                    value={newShift.employee}
                    onChange={(e) => setNewShift({...newShift, employee: e.target.value})}
                  >
                    <option value="">Select Employee</option>
                    {employees.map(emp => (
                      <option key={emp.id} value={emp.name}>{emp.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="position" className="text-gray-300">Position</Label>
                  <select 
                    id="position"
                    className="w-full mt-1 p-2 bg-black/30 border border-gray-600 rounded-md text-white"
                    value={newShift.position}
                    onChange={(e) => setNewShift({...newShift, position: e.target.value})}
                  >
                    <option value="">Select Position</option>
                    {positions.map(pos => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Label htmlFor="start" className="text-gray-300">Start Time</Label>
                  <Input
                    id="start"
                    type="time"
                    value={newShift.start}
                    onChange={(e) => setNewShift({...newShift, start: e.target.value})}
                    className="bg-black/30 border-gray-600 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="end" className="text-gray-300">End Time</Label>
                  <Input
                    id="end"
                    type="time"
                    value={newShift.end}
                    onChange={(e) => setNewShift({...newShift, end: e.target.value})}
                    className="bg-black/30 border-gray-600 text-white"
                  />
                </div>
              </div>
              <Button className="mt-4 w-full bg-gradient-to-r from-neon-blue to-neon-cyan hover:from-neon-cyan hover:to-neon-blue text-black font-semibold">
                <Plus className="h-4 w-4 mr-2" />
                Add Shift
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TeamScheduling;
