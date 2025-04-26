
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type Sport = {
  name: string;
  icon: string;
  description: string;
  experience: string;
  badges: string[];
};

const SportsCard = () => {
  const sports: Sport[] = [
    {
      name: "Плавание",
      icon: "🏊‍♂️",
      description: "Регулярные тренировки в бассейне, участие в соревнованиях",
      experience: "4 года",
      badges: ["Кроль", "Брасс", "Баттерфляй"]
    },
    {
      name: "MMA",
      icon: "🥊",
      description: "Смешанные боевые искусства, тренировки 3 раза в неделю",
      experience: "2 года",
      badges: ["Ударная техника", "Защита", "Спарринги"]
    },
    {
      name: "Грэпплинг",
      icon: "🤼‍♂️",
      description: "Борьба в партере, изучение захватов и болевых приёмов",
      experience: "1.5 года",
      badges: ["Бразильское джиу-джитсу", "Техника контроля", "Болевые приёмы"]
    }
  ];

  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center gap-2">
          <span className="text-purple-600">Спортивные увлечения</span>
        </CardTitle>
        <CardDescription>Мои тренировки и навыки</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          {sports.map((sport, index) => (
            <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
              <div className="text-4xl">{sport.icon}</div>
              <div>
                <h3 className="font-semibold text-lg">{sport.name}</h3>
                <p className="text-sm text-muted-foreground mb-2">{sport.description}</p>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs bg-purple-100 text-purple-800 py-1 px-2 rounded-full">
                    Опыт: {sport.experience}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1">
                  {sport.badges.map((badge, badgeIndex) => (
                    <Badge key={badgeIndex} variant="outline" className="bg-blue-50">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SportsCard;
