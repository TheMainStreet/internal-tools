import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { CloudCog, Shield, Zap, Server } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <CloudCog className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Welcome to Cloud Admin Services
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional cloud infrastructure management and optimization solutions for modern businesses
          </p>
          <div className="mt-8 flex gap-4 justify-center">
            <Link href="/auth?mode=signup">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/auth?mode=login">
              <Button size="lg" variant="outline">Login</Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Shield className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Security First</h3>
            <p className="text-muted-foreground">
              Enterprise-grade security protocols and compliance management for your cloud infrastructure
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Zap className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Performance Optimization</h3>
            <p className="text-muted-foreground">
              Advanced monitoring and optimization to ensure peak performance of your cloud resources
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <Server className="h-12 w-12 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-2">Infrastructure Management</h3>
            <p className="text-muted-foreground">
              Comprehensive cloud infrastructure management and scaling solutions
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}