import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Index = () => {
  const stoneTypes = [
    {
      name: "Гранит",
      description: "Прочный и долговечный материал для внешней отделки",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/afb51514-e80f-48c4-853a-aa836d87f3db.jpg"
    },
    {
      name: "Мрамор",
      description: "Элегантный камень для интерьеров премиум-класса",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/8a11a63d-0bf6-42d6-abd7-bcd4a57f0126.jpg"
    },
    {
      name: "Песчаник",
      description: "Теплый натуральный камень для создания уюта",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/afb51514-e80f-48c4-853a-aa836d87f3db.jpg"
    },
    {
      name: "Сланец",
      description: "Стильный материал с уникальной текстурой",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/8a11a63d-0bf6-42d6-abd7-bcd4a57f0126.jpg"
    }
  ];

  const galleryProjects = [
    {
      title: "Фасад загородного дома",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/2a3abc1e-eea5-4faf-922c-a4e9c47e7af3.jpg"
    },
    {
      title: "Камин в гостиной",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/2a3abc1e-eea5-4faf-922c-a4e9c47e7af3.jpg"
    },
    {
      title: "Отделка террасы",
      image: "https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/2a3abc1e-eea5-4faf-922c-a4e9c47e7af3.jpg"
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Декоративный Камень</h1>
            <div className="hidden md:flex gap-6">
              <button onClick={() => scrollToSection('hero')} className="text-foreground hover:text-primary transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('catalog')} className="text-foreground hover:text-primary transition-colors">
                Каталог
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-foreground hover:text-primary transition-colors">
                Галерея
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-foreground hover:text-primary transition-colors">
                Контакты
              </button>
            </div>
            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Связаться
            </Button>
          </div>
        </nav>
      </header>

      <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(rgba(74, 82, 64, 0.7), rgba(74, 82, 64, 0.7)), url('https://cdn.poehali.dev/projects/bbb17d8c-f59b-4ac2-8371-aa5e1d3ff328/files/afb51514-e80f-48c4-853a-aa836d87f3db.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Природная красота в каждом камне
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Создаём уникальные пространства с помощью натурального декоративного камня
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" onClick={() => scrollToSection('catalog')} className="bg-white text-primary hover:bg-white/90">
              <Icon name="Layers" className="mr-2" size={20} />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('contacts')} className="bg-transparent text-white border-white hover:bg-white/10">
              <Icon name="Phone" className="mr-2" size={20} />
              Получить консультацию
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <Icon name="Shield" className="mx-auto mb-3 text-white" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Долговечность</h3>
              <p className="text-white/80 text-sm">Натуральный камень служит десятилетиями</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <Icon name="Sparkles" className="mx-auto mb-3 text-white" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Эстетика</h3>
              <p className="text-white/80 text-sm">Уникальная текстура каждого элемента</p>
            </div>
            <div className="bg-white/10 backdrop-blur p-6 rounded-lg">
              <Icon name="Leaf" className="mx-auto mb-3 text-white" size={32} />
              <h3 className="text-white font-semibold text-lg mb-2">Экологичность</h3>
              <p className="text-white/80 text-sm">100% натуральные материалы</p>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Каталог камня</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий ассортимент натурального декоративного камня для любых проектов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stoneTypes.map((stone, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={stone.image} 
                    alt={stone.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-primary">{stone.name}</h3>
                  <p className="text-muted-foreground text-sm">{stone.description}</p>
                  <Button variant="outline" className="w-full mt-4">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши работы</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Примеры реализованных проектов с использованием декоративного камня
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {galleryProjects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-[4/3] animate-scale-in" style={{ animationDelay: `${index * 150}ms` }}>
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Контакты</h2>
              <p className="text-lg text-muted-foreground">
                Свяжитесь с нами для консультации и расчёта стоимости
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6 animate-fade-in">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="MapPin" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                    <p className="text-muted-foreground">г. Москва, ул. Примерная, д. 123</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Phone" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                    <p className="text-muted-foreground">+7 (999) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Mail" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">info@stone-decor.ru</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Icon name="Clock" className="text-primary" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Режим работы</h3>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00<br/>Сб-Вс: выходной</p>
                  </div>
                </div>
              </div>
              <Card className="animate-scale-in">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Оставить заявку</h3>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Textarea placeholder="Сообщение" rows={4} />
                    </div>
                    <Button className="w-full" size="lg">
                      <Icon name="Send" className="mr-2" size={18} />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm opacity-90">
            © 2024 Декоративный Камень. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
