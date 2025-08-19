import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Rules = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">WayWorlds</h1>
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">Главная</Link>
            <Link to="/rules" className="text-foreground font-medium">Правила</Link>
            <Link to="/donate" className="text-muted-foreground hover:text-foreground transition-colors">Донат</Link>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <a href="https://t.me/WayWorlds_Info" target="_blank" rel="noopener noreferrer">
                <Icon name="Send" size={20} className="mr-2" />
                Телеграм
              </a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Правила сервера WayWorlds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Для создания комфортной игровой среды и поддержания атмосферы ролевой игры
          </p>
        </div>
      </section>

      {/* Rules Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Icon name="BookOpen" size={24} className="mr-3 text-primary" />
                  Правила сервера
                </CardTitle>
                <CardDescription className="text-lg">
                  Обязательные к соблюдению правила для комфортной игры
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Icon name="Shield" size={20} className="mr-2 text-primary" />
                    Основные правила
                  </h3>
                  <ul className="space-y-3 text-muted-foreground ml-6">
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Уважение к игрокам</strong> - относись к другим так, как хотел бы, чтобы относились к тебе
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Запрет читов</strong> - использование любых модификаций, дающих преимущество, запрещено
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Культура общения</strong> - мат, оскорбления и флуд недопустимы
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Запрет гриферства</strong> - разрушение чужих построек строго запрещено
                      </div>
                    </li>
                  </ul>
                </div>
                
                <Separator />
                
                <div>
                  <h3 className="text-lg font-semibold mb-4 flex items-center">
                    <Icon name="Heart" size={20} className="mr-2 text-primary" />
                    Ролевые правила
                  </h3>
                  <ul className="space-y-3 text-muted-foreground ml-6">
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Отыгрыш персонажа</strong> - всегда оставайся в образе своего персонажа
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Внутриигровое общение</strong> - используй только игровой чат для ролевых ситуаций
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Развитие истории</strong> - создавай интересную биографию и развивай персонажа
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-3 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <strong>Социальные взаимодействия</strong> - активно взаимодействуй с другими игроками
                      </div>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="mb-12">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="Gavel" size={20} className="mr-2 text-primary" />
                  Система наказаний
                </CardTitle>
                <CardDescription>
                  Последствия нарушения правил сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="AlertTriangle" size={24} className="text-yellow-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Предупреждение</h3>
                    <p className="text-sm text-muted-foreground">
                      За первые незначительные нарушения правил
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Clock" size={24} className="text-orange-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Временный бан</h3>
                    <p className="text-sm text-muted-foreground">
                      От нескольких часов до недели в зависимости от нарушения
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon name="Ban" size={24} className="text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">Перманентный бан</h3>
                    <p className="text-sm text-muted-foreground">
                      За серьёзные нарушения и повторные нарушения
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Icon name="MessageCircle" size={20} className="mr-2 text-primary" />
                  Обращения и жалобы
                </CardTitle>
                <CardDescription>
                  Как связаться с администрацией сервера
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Если ты стал свидетелем нарушения правил или у тебя есть вопросы по игровому процессу, 
                    обращайся к администрации через следующие каналы:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button variant="outline" className="justify-start h-auto p-4" asChild>
                      <a href="https://discord.gg/wayworlds" target="_blank" rel="noopener noreferrer">
                        <Icon name="MessageSquare" size={20} className="text-primary mr-3" />
                        <div className="text-left">
                          <div className="font-medium">Discord</div>
                          <div className="text-sm text-muted-foreground">WayWorlds</div>
                        </div>
                      </a>
                    </Button>
                    <Button variant="outline" className="justify-start h-auto p-4" asChild>
                      <a href="https://t.me/WayWorlds_Info" target="_blank" rel="noopener noreferrer">
                        <Icon name="Send" size={20} className="text-primary mr-3" />
                        <div className="text-left">
                          <div className="font-medium">Telegram</div>
                          <div className="text-sm text-muted-foreground">@WayWorlds_Info</div>
                        </div>
                      </a>
                    </Button>
                    <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name="Mail" size={20} className="text-primary" />
                      <div>
                        <div className="font-medium">Email</div>
                        <div className="text-sm text-muted-foreground">admin@wayworlds.ru</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name="Terminal" size={20} className="text-primary" />
                      <div>
                        <div className="font-medium">В игре</div>
                        <div className="text-sm text-muted-foreground">команда /report</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готов начать игру?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Ознакомился с правилами? Тогда пора окунуться в мир WayWorlds!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}>
              <Icon name="Play" size={20} className="mr-2" />
              Начать играть
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/">
                <Icon name="ArrowLeft" size={20} className="mr-2" />
                На главную
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <Link to="/" className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">WayWorlds</h3>
              </Link>
              <p className="text-secondary-foreground/80">
                Уникальный проект на уровне GTA 5 и SAMP
              </p>
              <p className="text-xs text-secondary-foreground/60 mt-2">
                Мы не связаны с Mojang AB или Microsoft
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><Link to="/" className="hover:text-primary transition-colors">Главная</Link></li>
                <li><Link to="/rules" className="hover:text-primary transition-colors">Правила</Link></li>
                <li><Link to="/donate" className="hover:text-primary transition-colors">Донат</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>IP: play.wayworlds.ru</li>
                <li>Discord: WayWorlds</li>
                <li>Telegram: @WayWorlds_Info</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-secondary-foreground/20" />
          <div className="text-center text-secondary-foreground/60">
            <p>&copy; 2025 WayWorlds. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Rules;