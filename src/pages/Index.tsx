import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const portfolioItems = [
    {
      id: 1,
      title: "Классическая свадьба",
      description: "Элегантное оформление с белыми розами и пионами",
      image: "/img/44a57da1-01de-4316-a972-b25aec668cd1.jpg"
    },
    {
      id: 2,
      title: "Рустик стиль",
      description: "Натуральные композиции с полевыми цветами",
      image: "/img/065ffad1-1e9e-4ab1-8900-9fdcff850bc8.jpg"
    },
    {
      id: 3,
      title: "Современная церемония",
      description: "Минималистичные букеты и арки",
      image: "/img/82fc0e67-88af-43a8-8a01-167a6a2059d7.jpg"
    }
  ];

  const packages = [
    {
      name: "Базовый",
      price: "от 50 000 ₽",
      features: [
        "Букет невесты",
        "Бутоньерка жениха",
        "2 композиции на стол молодых",
        "Консультация флориста"
      ]
    },
    {
      name: "Стандарт",
      price: "от 120 000 ₽",
      features: [
        "Букет невесты и дублёр",
        "2 бутоньерки",
        "Оформление арки",
        "6 композиций на столы",
        "Лепестки для дорожки"
      ]
    },
    {
      name: "Премиум",
      price: "от 200 000 ₽",
      features: [
        "Полное цветочное оформление",
        "Арка и фотозона",
        "Композиции на все столы",
        "Оформление выездной церемонии",
        "Декор автомобиля"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border/50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display' }}>
            Floral Wedding
          </div>
          <div className="hidden md:flex space-x-8" style={{ fontFamily: 'Inter' }}>
            <a href="#portfolio" className="text-foreground hover:text-primary transition-colors">Портфолио</a>
            <a href="#packages" className="text-foreground hover:text-primary transition-colors">Пакеты</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button>Консультация</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 text-foreground" style={{ fontFamily: 'Playfair Display' }}>
              Свадебный декор
              <span className="block text-primary">под ключ</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed" style={{ fontFamily: 'Inter' }}>
              Создаём неповторимую атмосферу вашего торжества с помощью изысканных цветочных композиций, 
              букетов и декоративных арок
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="text-lg px-8 py-6">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                <Icon name="Camera" className="mr-2" size={20} />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Наши работы
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Каждая свадьба уникальна, как и цветочные композиции, которые мы создаём для наших клиентов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              <Icon name="ArrowRight" className="ml-2" size={20} />
              Посмотреть все работы
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Почему выбирают нас
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Flower" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Свежие цветы
              </h3>
              <p className="text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                Работаем только со свежими цветами от проверенных поставщиков
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Palette" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Индивидуальный подход
              </h3>
              <p className="text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                Создаём уникальные композиции под стиль вашей свадьбы
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Icon name="Clock" size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Playfair Display' }}>
                Точно в срок
              </h3>
              <p className="text-muted-foreground" style={{ fontFamily: 'Inter' }}>
                Гарантируем своевременную доставку и установку декора
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 bg-secondary/20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
              Пакеты услуг
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: 'Inter' }}>
              Выберите подходящий пакет или мы создадим индивидуальное предложение
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((packageItem, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-xl ${
                index === 1 ? 'ring-2 ring-primary scale-105' : ''
              } bg-white/90 backdrop-blur-sm`}>
                {index === 1 && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Популярный выбор
                  </div>
                )}
                <CardContent className={`p-8 ${index === 1 ? 'pt-12' : ''}`}>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold mb-2" style={{ fontFamily: 'Playfair Display' }}>
                      {packageItem.name}
                    </h3>
                    <div className="text-3xl font-bold text-primary mb-6" style={{ fontFamily: 'Inter' }}>
                      {packageItem.price}
                    </div>
                    <ul className="space-y-3 mb-8 text-left">
                      {packageItem.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <Icon name="Check" size={16} className="text-primary mr-3 flex-shrink-0" />
                          <span style={{ fontFamily: 'Inter' }}>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full" variant={index === 1 ? "default" : "outline"}>
                      Выбрать пакет
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Playfair Display' }}>
              Готовы создать волшебство?
            </h2>
            <p className="text-xl text-muted-foreground mb-12" style={{ fontFamily: 'Inter' }}>
              Свяжитесь с нами для бесплатной консультации и обсуждения деталей вашей свадьбы
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <div className="flex items-center">
                <Icon name="Phone" size={20} className="text-primary mr-3" />
                <span className="text-lg" style={{ fontFamily: 'Inter' }}>+7 (999) 123-45-67</span>
              </div>
              <div className="flex items-center">
                <Icon name="Mail" size={20} className="text-primary mr-3" />
                <span className="text-lg" style={{ fontFamily: 'Inter' }}>hello@floralwedding.ru</span>
              </div>
              <div className="flex items-center">
                <Icon name="Instagram" size={20} className="text-primary mr-3" />
                <span className="text-lg" style={{ fontFamily: 'Inter' }}>@floralwedding</span>
              </div>
            </div>

            <Button size="lg" className="text-lg px-12 py-6">
              <Icon name="MessageCircle" className="mr-2" size={20} />
              Написать нам
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto text-center">
          <div className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display' }}>
            Floral Wedding
          </div>
          <p className="text-background/80 mb-8" style={{ fontFamily: 'Inter' }}>
            Создаём незабываемые моменты с помощью цветов
          </p>
          <div className="flex justify-center space-x-6">
            <Icon name="Instagram" size={24} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
            <Icon name="Facebook" size={24} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
            <Icon name="MessageCircle" size={24} className="text-background/60 hover:text-background cursor-pointer transition-colors" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;