
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  BarChart3, 
  Users, 
  Server, 
  Activity, 
  Home, 
  Plus,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [todoText, setTodoText] = useState("");
  const [todos, setTodos] = useState([
    { id: 1, text: "Test SST deployment", completed: false },
    { id: 2, text: "Configure environment variables", completed: true },
    { id: 3, text: "Set up monitoring", completed: false }
  ]);
  const { toast } = useToast();

  const addTodo = () => {
    if (todoText.trim()) {
      setTodos([...todos, { 
        id: Date.now(), 
        text: todoText, 
        completed: false 
      }]);
      setTodoText("");
      toast({
        title: "Todo added",
        description: "New todo item has been added successfully.",
      });
    }
  };

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const stats = [
    { title: "Total Users", value: "2,456", icon: Users, color: "text-blue-600" },
    { title: "Active Sessions", value: "143", icon: Activity, color: "text-green-600" },
    { title: "Server Status", value: "Online", icon: Server, color: "text-emerald-600" },
    { title: "API Calls", value: "12.3k", icon: BarChart3, color: "text-purple-600" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Status Alert */}
        <Alert className="mb-8">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            Application is running successfully and ready for SST deployment testing.
          </AlertDescription>
        </Alert>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => (
            <Card key={stat.title}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {stat.title}
                </CardTitle>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stat.value}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Todo Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Add New Todo</CardTitle>
              <CardDescription>
                Test interactive functionality for SST deployment
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor="todo">Todo item</Label>
                  <Input
                    id="todo"
                    value={todoText}
                    onChange={(e) => setTodoText(e.target.value)}
                    placeholder="Enter a new todo..."
                    onKeyPress={(e) => e.key === 'Enter' && addTodo()}
                  />
                </div>
              </div>
              <Button onClick={addTodo} className="w-full">
                <Plus className="h-4 w-4 mr-2" />
                Add Todo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Todo List</CardTitle>
              <CardDescription>
                Current todos ({todos.filter(t => !t.completed).length} pending)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {todos.map((todo) => (
                  <div 
                    key={todo.id} 
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
                      />
                      <span className={todo.completed ? "line-through text-gray-500" : ""}>
                        {todo.text}
                      </span>
                    </div>
                    <Badge variant={todo.completed ? "secondary" : "default"}>
                      {todo.completed ? "Done" : "Pending"}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Environment Info */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Environment Information</CardTitle>
            <CardDescription>
              Information useful for SST deployment testing
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900">Build Tool</h3>
                <p className="text-blue-700">Vite</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h3 className="font-semibold text-green-900">Framework</h3>
                <p className="text-green-700">React 18</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-purple-900">Deployment Ready</h3>
                <p className="text-purple-700">SST Compatible</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
