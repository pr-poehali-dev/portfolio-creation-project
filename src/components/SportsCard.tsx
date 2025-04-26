
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SportsCard = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-purple-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <CardHeader>
        <CardTitle className="text-2xl text-blue-600">Спортивные достижения</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gradient-to-b from-blue-50 to-blue-100 rounded-lg p-3 text-center">
            <div className="text-3xl mb-1">🏊‍♂️</div>
            <h3 className="font-medium text-sm">Плавание</h3>
          </div>
          <div className="bg-gradient-to-b from-red-50 to-red-100 rounded-lg p-3 text-center">
            <div className="text-3xl mb-1">🥊</div>
            <h3 className="font-medium text-sm">ММА</h3>
            <Badge variant="outline" className="mt-1 text-xs">4 года</Badge>
          </div>
          <div className="bg-gradient-to-b from-purple-50 to-purple-100 rounded-lg p-3 text-center">
            <div className="text-3xl mb-1">🤼</div>
            <h3 className="font-medium text-sm">Грэпплинг</h3>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Мои успехи</h3>
          <ul className="space-y-1 text-sm">
            <li className="flex items-start">
              <span className="mr-2">🏅</span>
              <span>Участие в городских соревнованиях по плаванию</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🏆</span>
              <span>Опыт тренировок ММА - 4 года</span>
            </li>
            <li className="flex items-start">
              <span className="mr-2">🥇</span>
              <span>Развитие навыков грэпплинга</span>
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default SportsCard;
