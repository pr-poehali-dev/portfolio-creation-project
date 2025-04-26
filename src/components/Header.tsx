
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-blue-400 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between rounded-b-lg shadow-lg">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <Avatar className="h-24 w-24 border-4 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1544502062-f82887f03d1c?q=80&w=1974&auto=format&fit=crop" alt="Фото профиля" />
          <AvatarFallback className="bg-primary text-2xl">МШ</AvatarFallback>
        </Avatar>
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold text-white">Максим Шаров</h1>
          <p className="text-white/80 text-lg">Ученик 7 класса | Москва</p>
        </div>
      </div>
      <Button variant="secondary" className="mt-4 md:mt-0 gap-2 hover:scale-105 transition-transform">
        <Phone size={18} />
        <span>+7 161 595 188</span>
      </Button>
    </header>
  );
};

export default Header;
