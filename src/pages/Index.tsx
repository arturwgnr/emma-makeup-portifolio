import React, { useState } from 'react';
import { Menu, X, Instagram, MessageCircle, Mail, Star, Calendar, User, Phone, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      title: "Makeup + Hair",
      description: "Perfect makeup for your special day with long-lasting, photo-ready results",
      image: "./images/bridal_makeup_1.webp",
      price: "From €85"
    },
    {
      title: "Social Makeup",
      description: "Elegant and radiant makeup designed to enhance your features for parties, weddings, and social events",
      image: "./images/ana-morcatti.jpeg",
      price: "From €60"
    },
    {
      title: "Bridal Makeup",
      description: "Customized bridal looks that balance elegance, durability, and comfort, so you feel confident and radiant throughout your wedding day",
      image: "./images/bridal-makeup.png",
      price: "From €75"
    },
    {
      title: "Graduation Makeup",
      description: "Polished and radiant makeup perfect for your graduation, designed to last through the ceremony, photos, and celebration",
      image: "./images/graduation-makeup.png",
      price: "From €55"
    }
  ];

  const portfolioImages = [
    "./images/port-1.jpeg",
    "./images/port-2.jpeg",
    "./images/port-3.jpeg",
    "./images/port-4.jpeg",
    "./images/port-5.PNG",
    "./images/port-6.PNG",
    
  ];

  const testimonials = [
    {
      name: "Allanah Hennessy",
      image: "./images/allanah-hen.png",
      text: "SLAYYY!! She's the absolute BEST! Thank you for making me even better",
      rating: 5
    },
    {
      name: "Giulia Mariz",
      image: "./images/giulia-mariz.jpeg",
      text: "Professional, talented, and so easy to work with. I've never felt more confident!",
      rating: 5
    },
    {
      name: "Ana Morcatti",
      image: "./images/ana-morcatti.jpeg",
      text: "The best makeup artist in the city! Emmanuelly's work is pure artistry.",
      rating: 5
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border/50">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">

    <h1 className="text-2xl md:text-3xl font-serif font-semibold text-foreground">
    Emmanuelly Mariz
    </h1>
    </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('portfolio')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Portfolio
              </button>
              <button 
                onClick={() => scrollToSection('booking')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Booking
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border/50">
              <nav className="flex flex-col space-y-4">
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Home
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Booking
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-foreground hover:text-primary transition-colors font-medium"
                >
                  Contact
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home"   className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20 md:pt-24">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight">
                  Enhance Your
                  <span className="text-primary block">Beauty</span>
                </h2>
                <p className="text-xl md:text-2xl text-muted-foreground font-light">
                  For every special occasion ✨
                </p>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                From casual moments to unforgettable occasions, I create makeup looks that bring out your best self and highlight your natural beauty!
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Ready to book your transformation?
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => scrollToSection('booking')}
                  className="btn-primary text-lg px-8 py-4 h-auto"
                >
                  Book Now
                </Button>
                <Button 
                  onClick={() => scrollToSection('portfolio')}
                  variant="outline" 
                  className="btn-outline-primary text-lg px-8 py-4 h-auto"
                >
                  View Portfolio
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative animate-slide-in">
              <div className="relative rounded-3xl overflow-hidden shadow-elegant">
                <img
                  src="./images/manu-hero.jpeg"
                  alt="Professional makeup artist at work"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary-light/30 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              My Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Makeup designed around you! Your style, your occasion, your moment
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="card-elegant group hover:scale-105 transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-2xl">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary font-semibold">{service.price}</span>
                    <Button 
                      onClick={() => scrollToSection('booking')}
                      size="sm" 
                      className="bg-primary hover:bg-primary-dark text-white"
                    >
                      Book Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and artistic vision
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {portfolioImages.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl aspect-square hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-elegant"
              >
                <img
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Instagram size={20} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
              Client Love
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              What my clients say about their experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-elegant text-center">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-6 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center justify-center space-x-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
                Book Your Session
              </h2>
              <p className="text-xl text-muted-foreground">
                Ready to enhance your natural beauty? Let's create something beautiful together!
              </p>
            </div>

            <Card className="card-elegant">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground font-medium">Name</Label>
                      <Input 
                        id="name" 
                        placeholder="Your full name"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground font-medium">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-foreground font-medium">Phone</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="Your phone number"
                        className="border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date" className="text-foreground font-medium">Preferred Date</Label>
                      <Input 
                        id="date" 
                        type="date"
                        className="border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-foreground font-medium">Service Type</Label>
                    <Select>
                      <SelectTrigger className="border-border focus:border-primary">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bridal">Makeup + Hair</SelectItem>
                        <SelectItem value="editorial">Social Makeup</SelectItem>
                        <SelectItem value="special-events">Bridal Makeup</SelectItem>
                        <SelectItem value="commercial">Graduation Makeup</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full btn-primary text-lg py-4 h-auto"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Book Your Session
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-white">
        <div className="container-custom py-16">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-serif font-semibold">Emmanuelly Mariz</h3>
              <p className="text-gray-300 leading-relaxed">
                Professional makeup artist dedicated to enhancing your natural beauty 
                for every special moment in your life.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Get in Touch</h4>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/3530832009894" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
                >
                  <MessageCircle size={20} />
                  <span>WhatsApp</span>
                </a>
                <a 
                  href="mailto:emmanuellym_s@hotmail.com" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>emmanuellym_s@hotmail.com</span>
                </a>
                <a 
                  href="https://instagram.com/_mmanumakeup" 
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                  <span>@_mmanumakeup</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Links</h4>
              <div className="space-y-3">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  Services
                </button>
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
                <button 
                  onClick={() => scrollToSection('booking')}
                  className="block text-gray-300 hover:text-primary transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2026 Artur Wagner. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;