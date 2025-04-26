
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare } from "lucide-react";

const BusinessCard = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-shadow overflow-hidden">
      <div className="absolute right-0 top-0 w-32 h-32 bg-blue-400/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <CardHeader>
        <CardTitle className="text-2xl text-purple-600">Мини-бизнес</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-4 rounded-lg relative overflow-hidden">
          <h3 className="font-semibold text-lg">О моем проекте</h3>
          <p className="text-muted-foreground mb-3">
            Развиваю свой первый бизнес-проект, где применяю знания и навыки,
            полученные в школе и на дополнительных занятиях.
          </p>
          <p className="text-sm font-medium">
            Открыт для интересных предложений и сотрудничества!
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold">Как со мной связаться:</h3>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="gap-2 flex-1">
              <MessageSquare size={18} />
              <span>Написать сообщение</span>
            </Button>
            <Button variant="outline" className="flex-1">
              +7 161 595 188
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BusinessCard;
