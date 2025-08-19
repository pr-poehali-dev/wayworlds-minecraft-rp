import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/icon";
import { Link } from "react-router-dom";

const Donate = () => {
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
            <Link to="/rules" className="text-muted-foreground hover:text-foreground transition-colors">Правила</Link>
            <Link to="/donate" className="text-foreground font-medium">Донат</Link>
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
          <h1 className="text-4xl font-bold mb-4">Поддержать WayWorlds</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Помоги развитию сервера и получи уникальные возможности в игре
          </p>
        </div>
      </section>

      {/* Donation Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 hover:border-primary/50 transition-colors">
              <CardHeader className="text-center">
                <CardTitle>Базовый</CardTitle>
                <div className="text-3xl font-bold text-primary">299₽</div>
                <CardDescription>В месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Приватный дом в городе
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Дополнительные инструменты
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Цветной ник в чате
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Доступ к базовой одежде
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Приоритет в очереди
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-primary shadow-lg relative scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-primary text-primary-foreground">Популярный</Badge>
              </div>
              <CardHeader className="text-center">
                <CardTitle>Премиум</CardTitle>
                <div className="text-3xl font-bold text-primary">599₽</div>
                <CardDescription>В месяц</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Все из базового плана
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Личный автомобиль
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Эксклюзивные костюмы
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Доступ к VIP зонам
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Увеличенная зарплата
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Доступ к казино
                  </li>
                </ul>
                <Button className="w-full">
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
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Все из премиум плана
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Собственная компания
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Эксклюзивный транспорт
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Участие в управлении
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Приоритетная поддержка
                  </li>
                  <li className="flex items-center">
                    <Icon name="Check" size={16} className="mr-2 text-primary" />
                    Особые привилегии
                  </li>
                </ul>
                <Button className="w-full" variant="outline">
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Что дает донат?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Поддержка сервера открывает доступ к уникальным возможностям
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Home" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Недвижимость</CardTitle>
                <CardDescription>
                  Собственные дома и квартиры в лучших районах города
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Car" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Транспорт</CardTitle>
                <CardDescription>
                  Личные автомобили и эксклюзивные средства передвижения
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shirt" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Одежда</CardTitle>
                <CardDescription>
                  Уникальные костюмы и стильные наряды для твоего персонажа
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Building" size={24} className="text-primary" />
                </div>
                <CardTitle className="text-lg">Бизнес</CardTitle>
                <CardDescription>
                  Возможность создавать и развивать собственные компании
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Способы оплаты</h2>
            <p className="text-muted-foreground text-lg">
              Выбери удобный для тебя способ поддержки сервера
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CreditCard" size={24} className="text-blue-600" />
                </div>
                <CardTitle>Банковские карты</CardTitle>
                <CardDescription>
                  Visa, MasterCard, МИР
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Smartphone" size={24} className="text-purple-600" />
                </div>
                <CardTitle>Электронные кошельки</CardTitle>
                <CardDescription>
                  ЮMoney, QIWI, WebMoney
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Coins" size={24} className="text-green-600" />
                </div>
                <CardTitle>Криптовалюта</CardTitle>
                <CardDescription>
                  Bitcoin, Ethereum, USDT
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Часто задаваемые вопросы</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что происходит после оплаты?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Привилегии активируются автоматически в течение 5 минут после успешной оплаты. 
                  Ты получишь уведомление в игре и доступ ко всем функциям выбранного плана.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Можно ли вернуть деньги?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Возврат средств возможен в течение 24 часов после покупки, если привилегии не использовались. 
                  Для возврата обратитесь к администрации через Discord.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Что будет при смене ника?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  При смене ника все привилегии сохраняются. Обратитесь к администрации для переноса 
                  донат-статуса на новый ник.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Готов поддержать проект?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Выбери подходящий план и получи уникальные возможности уже сегодня!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Icon name="Heart" size={20} className="mr-2" />
              Поддержать сервер
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

export default Donate;