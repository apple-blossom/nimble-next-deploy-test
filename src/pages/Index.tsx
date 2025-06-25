
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Cloud, Code, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Cloud className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SST Test App</span>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/dashboard">
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Button>Get Started</Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <Badge className="mb-4" variant="secondary">
            <Zap className="h-4 w-4 mr-1" />
            Ready for SST Deployment
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            React App for
            <span className="text-blue-600"> SST Testing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            A modern React application built with Vite, TypeScript, and Tailwind CSS. 
            Perfect for testing serverless deployment with SST.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/dashboard">
              <Button size="lg" className="flex items-center">
                Explore Dashboard
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Code className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Modern Stack</CardTitle>
              <CardDescription>
                Built with React, TypeScript, Vite, and Tailwind CSS
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Uses the latest web technologies for optimal performance and developer experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Cloud className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>SST Ready</CardTitle>
              <CardDescription>
                Configured for easy deployment with SST
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Pre-configured structure that works seamlessly with SST deployment patterns.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
              <CardTitle>Interactive Features</CardTitle>
              <CardDescription>
                Multiple pages and components to test
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-600">
                Includes dashboard, forms, and interactive elements for comprehensive testing.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Tech Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['React 18', 'TypeScript', 'Vite', 'Tailwind CSS', 'shadcn/ui', 'Lucide Icons', 'React Router', 'React Query'].map((tech) => (
              <div key={tech} className="text-center p-3 bg-gray-50 rounded-lg">
                <span className="font-medium text-gray-800">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
