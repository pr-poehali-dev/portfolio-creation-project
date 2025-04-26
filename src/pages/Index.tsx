
import Header from "@/components/Header";
import SportsCard from "@/components/SportsCard";
import BusinessCard from "@/components/BusinessCard";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />
        
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-center text-slate-700 mb-2">
            Портфолио ученика
          </h2>
          <Separator className="mb-8" />
          
          <div className="grid md:grid-cols-2 gap-6">
            <SportsCard />
            <BusinessCard />
          </div>
          
          <footer className="mt-12 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Нарочный Иван. Портфолио ученика 7 класса.</p>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Index;
