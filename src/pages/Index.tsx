import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Index = () => {
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
            <a href="#start" className="text-muted-foreground hover:text-foreground transition-colors">Как начать</a>
            <Link to="/rules" className="text-muted-foreground hover:text-foreground transition-colors">Правила</Link>
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
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="border-primary text-primary">
                🏙️ Ролплей сервер
              </Badge>
              <h1 className="text-5xl font-bold leading-tight">
                <span className="text-foreground">Добро пожаловать в</span>
                <br />
                <span className="text-primary">WayWorlds</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Полная власть игроков, свобода действий, питомцы, катсцены с собственным сюжетом, машины. 
                Участвуй в перестрелках, стань представителем закона или создай собственную ОПГ!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" onClick={() => document.getElementById('start')?.scrollIntoView({ behavior: 'smooth' })}>
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="https://t.me/WayWorlds_Info" target="_blank" rel="noopener noreferrer">
                    <Icon name="Send" size={20} className="mr-2" />
                    Телеграм
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <img 
                src="/img/91b94ea3-f5a8-4820-b293-ba9840e942c5.jpg" 
                alt="WayWorlds - современный Minecraft город"
                className="relative z-10 rounded-2xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Download" size={24} className="text-primary" />
                </div>
                <CardTitle>Никаких модов не нужно</CardTitle>
                <CardDescription>
                  Для игры на сервере не требуется устанавливать моды. По желанию можно установить 
                  <a href="https://example.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    Plasmo Voice
                  </a> для голосового чата
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Trophy" size={24} className="text-primary" />
                </div>
                <CardTitle>Уровень GTA 5 RP и SAMP</CardTitle>
                <CardDescription>
                  WayWorlds — это уникальный проект, который достиг качества и глубины ролевой игры на уровне 
                  легендарных серверов GTA 5 RP и San Andreas Multiplayer
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Уникальные возможности</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Открой для себя мир бесконечных возможностей
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Home" size={24} className="text-primary" />
                </div>
                <CardTitle>Недвижимость</CardTitle>
                <CardDescription>
                  Покупай недвижимость и обустраивай её как хочешь. Арендуй помещения и веди свой бизнес
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Crown" size={24} className="text-primary" />
                </div>
                <CardTitle>Политика и власть</CardTitle>
                <CardDescription>
                  Мэр избирается игроками, ведёт любую политику и издаёт указы. Игроки могут устроить переворот
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Car" size={24} className="text-primary" />
                </div>
                <CardTitle>Машины и транспорт</CardTitle>
                <CardDescription>
                  Современные автомобили, уникальные механики передвижения по городу
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-primary" />
                </div>
                <CardTitle>Трудоустройство</CardTitle>
                <CardDescription>
                  Официальные работы, подработки, создание собственных компаний и ведение бизнеса
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" size={24} className="text-primary" />
                </div>
                <CardTitle>Социальная жизнь</CardTitle>
                <CardDescription>
                  Свадьбы, питомцы, болезни, одежда — полноценная социальная жизнь твоего персонажа
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Dice6" size={24} className="text-primary" />
                </div>
                <CardTitle>Развлечения</CardTitle>
                <CardDescription>
                  Казино, розыск, катсцены с собственным сюжетом и множество других активностей
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* How to Start Section */}
      <section id="start" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как начать</h2>
            <p className="text-muted-foreground text-lg">Простые шаги для входа в мир WayWorlds</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <CardTitle>Скачай Minecraft</CardTitle>
                <CardDescription>
                  Установи Minecraft Java Edition версии 1.21.4. Лицензия не обязательна
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <CardTitle>Подключись к серверу</CardTitle>
                <CardDescription>
                  Добавь IP адрес: <code className="bg-muted px-2 py-1 rounded">play.wayworlds.ru</code>
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <CardTitle>Создай персонажа</CardTitle>
                <CardDescription>
                  Следуй инструкциям в игре для создания своего уникального персонажа
                </CardDescription>
              </CardHeader>
            </Card>
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
                <li><a href="#start" className="hover:text-primary transition-colors">Как начать</a></li>
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

export default Index;