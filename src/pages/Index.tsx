import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Zap" size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">WayWorlds</h1>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="#start" className="text-muted-foreground hover:text-foreground transition-colors">Как начать</a>
            <a href="#rules" className="text-muted-foreground hover:text-foreground transition-colors">Правила</a>
            <a href="#donate" className="text-muted-foreground hover:text-foreground transition-colors">Донат</a>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Подключиться
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
                Современный мир с высокими технологиями, мегаполисами и бесконечными возможностями для ролевой игры. 
                Создай свою историю в мире будущего!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Icon name="Play" size={20} className="mr-2" />
                  Начать играть
                </Button>
                <Button variant="outline" size="lg">
                  <Icon name="Users" size={20} className="mr-2" />
                  Сообщество
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Особенности сервера</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              WayWorlds предлагает уникальный игровой опыт в современном мире с передовыми технологиями
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <CardTitle>Современные города</CardTitle>
                <CardDescription>
                  Огромные мегаполисы с небоскребами, торговыми центрами и жилыми районами
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Cpu" size={24} className="text-primary" />
                </div>
                <CardTitle>Высокие технологии</CardTitle>
                <CardDescription>
                  Продвинутые механики, автоматизация и футуристические устройства
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-primary" />
                </div>
                <CardTitle>Ролевая игра</CardTitle>
                <CardDescription>
                  Создай персонажа, выбери профессию и погрузись в мир социальных взаимодействий
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
                  Убедись, что у тебя установлена лицензионная версия Minecraft Java Edition
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

      {/* Rules Section */}
      <section id="rules" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Правила сервера</h2>
            <p className="text-muted-foreground text-lg">Для комфортной игры всех участников</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Shield" size={20} className="mr-2 text-primary" />
                    Основные правила
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Уважительное отношение к другим игрокам
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Запрет на использование читов и модов
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Соблюдение ролевых правил
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Запрет на гриферство
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Heart" size={20} className="mr-2 text-primary" />
                    Ролевые правила
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Всегда оставайся в образе персонажа
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Используй только внутриигровой чат
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Развивай историю своего персонажа
                    </li>
                    <li className="flex items-start">
                      <Icon name="Check" size={16} className="mr-2 mt-1 text-primary flex-shrink-0" />
                      Взаимодействуй с другими игроками
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Поддержать проект</h2>
            <p className="text-muted-foreground text-lg">Помоги развитию сервера WayWorlds</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle>Базовый</CardTitle>
                <div className="text-3xl font-bold text-primary">299₽</div>
                <CardDescription>В месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Приватный дом
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Дополнительные инструменты
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Цветной ник
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle>Премиум</CardTitle>
                <div className="text-3xl font-bold text-primary">599₽</div>
                <CardDescription>В месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Все из базового
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Приватный транспорт
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Особые костюмы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Доступ к VIP зонам
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle>Элитный</CardTitle>
                <div className="text-3xl font-bold text-primary">999₽</div>
                <CardDescription>В месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Все из премиум
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Собственная компания
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Уникальные возможности
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Приоритетная поддержка
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Zap" size={20} className="text-white" />
                </div>
                <h3 className="text-xl font-bold">WayWorlds</h3>
              </div>
              <p className="text-secondary-foreground/80">
                Современный ролплей сервер Minecraft с уникальным миром будущего
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ссылки</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li><a href="#start" className="hover:text-primary transition-colors">Как начать</a></li>
                <li><a href="#rules" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#donate" className="hover:text-primary transition-colors">Донат</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-secondary-foreground/80">
                <li>IP: play.wayworlds.ru</li>
                <li>Discord: WayWorlds</li>
                <li>VK: @wayworlds</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8 bg-secondary-foreground/20" />
          <div className="text-center text-secondary-foreground/60">
            <p>&copy; 2024 WayWorlds. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;