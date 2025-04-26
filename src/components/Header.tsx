
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MapPin, Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl">
      <Avatar className="h-28 w-28 border-4 border-white shadow-md">
        <AvatarImage src="https://cdn.poehali.dev/files/7e60934f-81d5-4990-86a1-3432e86bb205.jpg" alt="Иван Нарочный" />
        <AvatarFallback className="text-2xl">ИН</AvatarFallback>
      </Avatar>
      
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold mb-1">Нарочный Иван</h1>
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
          <Badge className="bg-purple-100 text-purple-700 hover:bg-purple-200">7 класс</Badge>
          <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 flex items-center gap-1">
            <MapPin size={12} /> Москва
          </Badge>
        </div>
        <p className="text-muted-foreground text-sm md:text-base max-w-md">
          Увлекаюсь спортом, развиваю свой мини-бизнес и стремлюсь к новым достижениям.
        </p>
      </div>
      
      <div className="flex flex-col gap-2 w-full md:w-auto">
        <Button variant="default" className="w-full md:w-auto flex items-center gap-2">
          <Phone size={16} /> 
          <span>+7 916 159 5188</span>
        </Button>
        <Button variant="outline" className="w-full md:w-auto">Портфолио</Button>
      </div>
    </div>
  );
};

// Локальный компонент бейджа для заголовка
const Badge = ({
  children,
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      className={`px-2 py-1 rounded-full text-xs font-medium ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default Header;
