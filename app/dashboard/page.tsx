import { Card } from '@/components/ui/card';

export default function DashboardPage() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-2">Welcome!</h2>
          <p className="text-muted-foreground">
            Your cloud administration dashboard is ready.
          </p>
        </Card>
      </div>
    </div>
  );
}