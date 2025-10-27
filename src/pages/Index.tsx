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
      title: "Заявка отправлена",
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
      location: "Подмосковье",
      guests: "150 гостей",
      year: "2024",
      description: "Классическая элегантная свадьба с элементами современного стиля",
      image: "https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/b2c6ec66-684f-47bf-a7b5-8d03cf87de1a.jpg"
    },
    {
      title: "Свадьба Марии и Александра",
      location: "Москва",
      guests: "120 гостей",
      year: "2024",
      description: "Яркое празднование с интерактивными конкурсами и сюрпризами",
      image: "https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/a9ad3202-93e8-43c0-8899-19e36d6b95db.jpg"
    },
    {
      title: "Свадьба Елены и Сергея",
      location: "Санкт-Петербург",
      guests: "200 гостей",
      year: "2023",
      description: "Масштабное торжество в историческом особняке",
      image: "https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/2fc3e76b-b1c8-4675-9bf3-312b4ac671f5.jpg"
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center">
          <h1 className="text-xl tracking-wider font-light">ВЕДУЩИЙ СВАДЕБ</h1>
          <div className="hidden md:flex gap-12 text-sm tracking-wide">
            <a href="#about" className="hover:text-accent transition-colors">О себе</a>
            <a href="#portfolio" className="hover:text-accent transition-colors">Портфолио</a>
            <a href="#testimonials" className="hover:text-accent transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section id="promo" className="relative min-h-screen flex items-center justify-center pt-24 pb-32">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-6xl md:text-8xl mb-8 leading-tight font-light tracking-tight">
              Превращаю свадьбы<br />в произведения искусства
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-light max-w-2xl mx-auto">
              Профессиональное ведение торжеств с безупречным вкусом и вниманием к деталям
            </p>
            <Button 
              size="lg" 
              className="text-base px-12 py-6 rounded-none bg-primary hover:bg-secondary transition-all duration-300"
            >
              Обсудить вашу свадьбу
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            <div className="relative animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/projects/7b019890-aeec-4e6d-a192-b6a1e01e77db/files/2fc3e76b-b1c8-4675-9bf3-312b4ac671f5.jpg"
                alt="Ведущий"
                className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="animate-fade-in">
              <p className="text-sm tracking-widest text-muted-foreground mb-6">О СЕБЕ</p>
              <h3 className="text-5xl mb-8 font-light leading-tight">
                Создаю атмосферу,<br />которую запомнят
              </h3>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Более 8 лет я создаю незабываемые свадебные торжества для пар, 
                  которые ценят качество, стиль и внимание к деталям.
                </p>
                <p>
                  Моя философия проста: каждая свадьба уникальна, и моя задача — 
                  раскрыть её индивидуальность через продуманный сценарий и безупречное исполнение.
                </p>
                <p>
                  Работаю с профессиональным оборудованием, постоянно совершенствую мастерство 
                  и никогда не повторяюсь — для вас будет создан уникальный праздник.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border/50">
                <div>
                  <div className="text-4xl font-light mb-2">200+</div>
                  <div className="text-sm text-muted-foreground tracking-wide">Свадеб</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">8</div>
                  <div className="text-sm text-muted-foreground tracking-wide">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-light mb-2">5.0</div>
                  <div className="text-sm text-muted-foreground tracking-wide">Рейтинг</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <p className="text-sm tracking-widest text-muted-foreground mb-4">ПОРТФОЛИО</p>
            <h2 className="text-5xl md:text-6xl font-light">Избранные работы</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-32">
            {portfolio.map((item, idx) => (
              <div 
                key={idx} 
                className={`grid md:grid-cols-2 gap-12 items-center animate-fade-in ${
                  idx % 2 === 1 ? 'md:grid-flow-dense' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'md:col-start-2' : ''}>
                  <div className="relative group overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                    />
                  </div>
                </div>
                <div className={`space-y-6 ${idx % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                  <div>
                    <p className="text-sm tracking-widest text-muted-foreground mb-2">{item.year}</p>
                    <h3 className="text-4xl font-light mb-4">{item.title}</h3>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
                      {item.description}
                    </p>
                    <div className="flex gap-8 text-sm text-muted-foreground">
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
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-32">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 animate-fade-in">
            <p className="text-sm tracking-widest text-muted-foreground mb-4">ОТЗЫВЫ</p>
            <h2 className="text-5xl md:text-6xl font-light">Что говорят клиенты</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="p-8 rounded-none border-border/50 bg-card hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-1 h-1 bg-foreground rounded-full" />
                  ))}
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 text-lg italic">
                  {testimonial.text}
                </p>
                <div className="pt-6 border-t border-border/50">
                  <div className="font-light text-sm tracking-wide">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{testimonial.date}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 bg-muted/30 border-y border-border/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 animate-fade-in">
              <p className="text-sm tracking-widest text-muted-foreground mb-4">КОНТАКТЫ</p>
              <h2 className="text-5xl md:text-6xl font-light mb-6">Обсудим вашу свадьбу</h2>
              <p className="text-xl text-muted-foreground font-light">
                Оставьте заявку, и я свяжусь с вами в течение часа
              </p>
            </div>

            <div className="grid md:grid-cols-5 gap-12">
              <div className="md:col-span-3 animate-fade-in">
                <Card className="p-10 rounded-none border-border/50 bg-card">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div>
                      <label className="block text-sm tracking-wide mb-3 font-light">Ваше имя</label>
                      <Input 
                        placeholder="Имя"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="rounded-none border-border/50 bg-background font-light"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide mb-3 font-light">Телефон</label>
                      <Input 
                        type="tel"
                        placeholder="+7 (999) 123-45-67"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="rounded-none border-border/50 bg-background font-light"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm tracking-wide mb-3 font-light">Сообщение</label>
                      <Textarea 
                        placeholder="Расскажите о вашей свадьбе"
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={5}
                        className="rounded-none border-border/50 bg-background font-light resize-none"
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full rounded-none py-6 bg-primary hover:bg-secondary transition-all duration-300"
                    >
                      Отправить заявку
                    </Button>
                  </form>
                </Card>
              </div>

              <div className="md:col-span-2 space-y-8 animate-fade-in">
                <div className="space-y-6">
                  <div className="pb-6 border-b border-border/50">
                    <p className="text-sm tracking-wide text-muted-foreground mb-2">Телефон</p>
                    <p className="text-lg font-light">+7 (999) 123-45-67</p>
                  </div>
                  <div className="pb-6 border-b border-border/50">
                    <p className="text-sm tracking-wide text-muted-foreground mb-2">Email</p>
                    <p className="text-lg font-light">host@wedding.ru</p>
                  </div>
                  <div className="pb-6 border-b border-border/50">
                    <p className="text-sm tracking-wide text-muted-foreground mb-2">Telegram</p>
                    <p className="text-lg font-light">@wedding_host</p>
                  </div>
                  <div className="pb-6 border-b border-border/50">
                    <p className="text-sm tracking-wide text-muted-foreground mb-2">Instagram</p>
                    <p className="text-lg font-light">@wedding_host</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-muted-foreground">
            <p className="tracking-wide font-light">© 2024 Все права защищены</p>
            <p className="tracking-wider font-light">ВЕДУЩИЙ СВАДЕБ</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
