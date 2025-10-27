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
      description: "Евгений свяжется с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-rose-600">Евгений</h1>
          <div className="hidden md:flex gap-6">
            <a href="#hero" className="hover:text-rose-600 transition-colors">Главная</a>
            <a href="#about" className="hover:text-rose-600 transition-colors">Обо мне</a>
            <a href="#reviews" className="hover:text-rose-600 transition-colors">Отзывы</a>
            <a href="#contact" className="hover:text-rose-600 transition-colors">Контакты</a>
          </div>
          <Button onClick={scrollToContact} className="bg-rose-600 hover:bg-rose-700">
            Связаться
          </Button>
        </nav>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in-up">
              <div className="inline-block px-4 py-2 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">
                Ведущий свадеб и торжеств
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight">
                Евгений<br />
                <span className="text-rose-600">Ваш незабываемый праздник</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Поёт как бог, шутит гениально, заряжает на 100%! 
                Ведущий-универсал с большой буквы!
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button onClick={scrollToContact} size="lg" className="bg-rose-600 hover:bg-rose-700 text-lg px-8">
                  Забронировать дату
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-rose-300 text-rose-700 hover:bg-rose-50">
                  Узнать больше
                </Button>
              </div>
              <div className="flex gap-8 pt-6">
                <div>
                  <div className="text-4xl font-bold text-rose-600">500+</div>
                  <div className="text-sm text-gray-600">Проведённых свадеб</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-rose-600">10+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-rose-600">100%</div>
                  <div className="text-sm text-gray-600">Восторженных отзывов</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-400 via-pink-400 to-amber-400 rounded-3xl opacity-20 blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/files/ff2a0b4a-9e37-4c48-9e7a-d659190d24ba.png"
                alt="Евгений - ведущий свадеб"
                className="relative rounded-3xl shadow-2xl w-full object-cover aspect-[3/4]"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Почему выбирают меня?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Я создаю атмосферу, в которой каждый гость чувствует себя главным героем праздника
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-rose-100 hover:border-rose-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Mic" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Голос и харизма</h3>
              <p className="text-gray-600 leading-relaxed">
                Пою вживую любимые песни гостей. Голос чистый, сильный и эмоциональный — гости замирают и плачут от умиления!
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-rose-100 hover:border-rose-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Энергия праздника</h3>
              <p className="text-gray-600 leading-relaxed">
                Вовлекаю в танцы и игры даже самых скромных! Танцпол не пустует ни секунды — энергия зашкаливает!
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 border-rose-100 hover:border-rose-300">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Heart" size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Душевность и юмор</h3>
              <p className="text-gray-600 leading-relaxed">
                Тосты личные с упоминанием ваших историй. Юмор умный и добрый. Объединяю все поколения гостей!
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Отзывы молодожёнов</h2>
            <p className="text-xl text-gray-600">
              Что говорят пары, доверившие мне свой самый важный день
            </p>
          </div>

          <div className="space-y-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white border-rose-100">
              <div className="flex items-start gap-6">
                <img 
                  src="https://cdn.poehali.dev/files/0146a7bb-3890-4099-9271-8a9ebe4ab69f.jpeg"
                  alt="Отзыв"
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-rose-200"
                />
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    <span className="font-bold text-rose-600">Ведущий-универсал! Ведущий с большой буквы!</span> Поет как бог, шутит гениально, 
                    заряжает на 100%! Гости просили его контакты! Мы в полном восторге от нашего ведущего — Евгения! 
                    Кажется, он умеет всё: петь так, что мурашки бегут, шутить так, что животики болят, и заряжать энергией так, 
                    что танцуют даже те, кто обычно скромно сидит в углу!
                  </p>
                  <div className="text-sm text-gray-500">Молодожёны</div>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 bg-white border-rose-100">
              <div className="flex items-start gap-6">
                <img 
                  src="https://cdn.poehali.dev/files/59f44848-4a8e-4237-8f50-bab1b375a34b.jpeg"
                  alt="Отзыв"
                  className="w-20 h-20 rounded-full object-cover flex-shrink-0 ring-2 ring-rose-200"
                />
                <div className="flex-1">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Icon key={i} name="Star" size={20} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed mb-4 text-lg">
                    <span className="font-bold text-rose-600">Пение — выше всех похвал!</span> Когда Евгений начал петь, гости замерли. 
                    Его голос — чистый, сильный и невероятно эмоциональный! Он исполнил наши любимые песни, и казалось, что это не ведущий, 
                    а настоящая звезда эстрады. Было так душевно, что многие плакали от умиления! 
                    <span className="font-bold text-rose-600"> Речь — трогательная и искренняя!</span> Каждое его слово было пронизано теплотой и заботой. 
                    Он говорил так трепетно и проникновенно, что даже самые сдержанные гости растрогались.
                  </p>
                  <div className="text-sm text-gray-500">Счастливая пара</div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 bg-white border-rose-100 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Танцпол не пустовал ни секунды! Гости просили номер! К нам подходили десятки гостей и спрашивали: 
                  «Кто этот великолепный ведущий? Дайте его контакты!»
                </p>
                <div className="text-sm text-gray-500 font-medium">Анна и Дмитрий</div>
              </Card>

              <Card className="p-6 bg-white border-rose-100 hover:shadow-lg transition-all">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Евгений благодарим вас от всей души! Вы сделали наш день идеальным: таким душевным, весёлым и незабываемым! 
                  Ваш талант, профессионализм и человеческая теплота покорили всех!
                </p>
                <div className="text-sm text-gray-500 font-medium">Мария и Сергей</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Забронируйте свою дату</h2>
            <p className="text-xl text-gray-600">
              Оставьте заявку, и я свяжусь с вами в течение часа
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            <Card className="md:col-span-3 p-8 border-rose-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Ваше имя</label>
                  <Input 
                    placeholder="Введите ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="border-gray-200 focus:border-rose-300 focus:ring-rose-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Телефон</label>
                  <Input 
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="border-gray-200 focus:border-rose-300 focus:ring-rose-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Сообщение</label>
                  <Textarea 
                    placeholder="Расскажите о вашем празднике и желаемой дате"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={5}
                    className="border-gray-200 focus:border-rose-300 focus:ring-rose-300 resize-none"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full py-6 text-lg bg-rose-600 hover:bg-rose-700"
                >
                  Отправить заявку
                </Button>
              </form>
            </Card>

            <div className="md:col-span-2 space-y-6">
              <Card className="p-6 border-rose-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-rose-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Телефон</div>
                    <div className="font-medium text-gray-900">+7 (999) 123-45-67</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-rose-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-rose-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <div className="font-medium text-gray-900">evgeny@wedding.ru</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-rose-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="MessageCircle" size={24} className="text-rose-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Telegram</div>
                    <div className="font-medium text-gray-900">@evgeny_host</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 border-rose-100 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Instagram" size={24} className="text-rose-600" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Instagram</div>
                    <div className="font-medium text-gray-900">@evgeny_wedding</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-gray-50 border-t">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Евгений — Ведущий свадеб и торжеств. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
