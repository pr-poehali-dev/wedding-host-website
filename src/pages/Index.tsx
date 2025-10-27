import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Я свяжусь с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const testimonials = [
    {
      name: "Анна и Дмитрий",
      text: "Лучший ведущий! Наша свадьба прошла на высшем уровне. Гости до сих пор вспоминают этот вечер!",
      rating: 5,
      date: "15.09.2024"
    },
    {
      name: "Мария и Александр",
      text: "Профессионал своего дела! Смог вовлечь даже самых скромных гостей. Атмосфера была невероятной!",
      rating: 5,
      date: "03.08.2024"
    },
    {
      name: "Елена и Сергей",
      text: "Огромное спасибо! Праздник удался благодаря вашей энергии и харизме. Рекомендуем всем!",
      rating: 5,
      date: "21.06.2024"
    }
  ];

  const portfolio = [
    {
      title: "Свадьба Анны и Дмитрия",
      location: "Подмосковье, 2024",
      guests: "150 гостей",
      image: "https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/b2c6ec66-684f-47bf-a7b5-8d03cf87de1a.jpg"
    },
    {
      title: "Свадьба Марии и Александра",
      location: "Москва, 2024",
      guests: "120 гостей",
      image: "https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/a9ad3202-93e8-43c0-8899-19e36d6b95db.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ведущий Свадеб
          </h1>
          <div className="hidden md:flex gap-6">
            <a href="#promo" className="hover:text-primary transition-colors">Главная</a>
            <a href="#about" className="hover:text-primary transition-colors">Обо мне</a>
            <a href="#portfolio" className="hover:text-primary transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-primary transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="sm" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
            Связаться
          </Button>
        </nav>
      </header>

      <section id="promo" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 animate-gradient bg-[length:400%_400%]" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzg4ODgiIHN0cm9rZS13aWR0aD0iMSIgb3BhY2l0eT0iMC4xIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Сделаю вашу свадьбу{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  незабываемой
                </span>
              </h2>
              <p className="text-xl mb-8 text-muted-foreground">
                Профессиональное ведение свадеб с гарантией отличного настроения. 
                Более 200 счастливых пар доверили мне свой самый важный день.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8">
                  Забронировать дату
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  Посмотреть портфолио
                </Button>
              </div>
              <div className="mt-8 flex gap-8">
                <div>
                  <div className="text-4xl font-bold text-primary">200+</div>
                  <div className="text-sm text-muted-foreground">Проведенных свадеб</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-secondary">5.0</div>
                  <div className="text-sm text-muted-foreground">Средний рейтинг</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">8+</div>
                  <div className="text-sm text-muted-foreground">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-3xl opacity-20 blur-2xl animate-pulse" />
              <img 
                src="https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/2fc3e76b-b1c8-4675-9bf3-312b4ac671f5.jpg"
                alt="Ведущий свадеб"
                className="relative rounded-3xl shadow-2xl w-full animate-float"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Обо мне</h2>
            <p className="text-xl text-muted-foreground">
              Профессиональный ведущий с 8-летним опытом создания идеальных праздников
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Энергия и Харизма</h3>
              <p className="text-muted-foreground">
                Создаю атмосферу праздника с первых минут. Заряжаю энергией каждого гостя!
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:200ms]">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center">
                <Icon name="Users" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Индивидуальный Подход</h3>
              <p className="text-muted-foreground">
                Разрабатываю уникальный сценарий под ваши пожелания и особенности гостей
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in [animation-delay:400ms]">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center">
                <Icon name="Trophy" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Профессионализм</h3>
              <p className="text-muted-foreground">
                Современное оборудование, отточенные навыки и безупречная репутация
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Портфолио</h2>
            <p className="text-xl text-muted-foreground">
              Примеры моих работ — счастливые моменты, которые я помог создать
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {portfolio.map((item, idx) => (
              <Card key={idx} className="overflow-hidden group hover:shadow-2xl transition-all duration-300 animate-fade-in">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Icon name="MapPin" size={16} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} />
                      <span>{item.guests}</span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="text-lg px-8">
              Посмотреть больше работ
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Отзывы</h2>
            <p className="text-xl text-muted-foreground">
              Что говорят пары, чьи свадьбы я провел
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                <div className="flex justify-between items-center">
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.date}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Связаться со мной</h2>
              <p className="text-xl text-muted-foreground">
                Оставьте заявку, и я свяжусь с вами в течение часа
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in">
                <Card className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Ваше имя</label>
                      <Input 
                        placeholder="Введите ваше имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Телефон</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите о вашей свадьбе"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Отправить заявку
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="space-y-6 animate-fade-in [animation-delay:200ms]">
                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Телефон</div>
                      <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-muted-foreground">host@wedding.ru</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                      <Icon name="MessageCircle" size={24} className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram</div>
                      <div className="text-muted-foreground">@wedding_host</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/50 py-12 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-2">
                Ведущий Свадеб
              </h3>
              <p className="text-muted-foreground">Делаю вашу свадьбу незабываемой</p>
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Youtube" size={20} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Icon name="Send" size={20} />
              </Button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground text-sm">
            © 2024 Все права защищены
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
