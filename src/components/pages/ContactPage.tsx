import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Linkedin, Instagram, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

export default function ContactPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Message Sent Successfully!',
      description: 'We will get back to you within 24-48 hours.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      content: '123 Education Street, Knowledge City, India - 110001',
    },
    {
      icon: Phone,
      title: 'Phone',
      content: '+91 98765 43210',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@pinnacleglobal.edu',
    },
    {
      icon: Clock,
      title: 'Office Hours',
      content: 'Mon - Fri: 9:00 AM - 6:00 PM',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_4b7a4b18663444daa636de87b6b37500~mv2.png?originWidth=1920&originHeight=704"
            alt="Contact Us"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-primary/80"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            We're here to help and answer any questions you might have
          </motion.p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 text-center border-secondary hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">
                      {info.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 text-sm">
                      {info.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Send Us a Message
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <Card className="p-8 border-secondary shadow-lg">
                <CardContent className="p-0">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <Label htmlFor="subject" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="What is this regarding?"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="Tell us how we can help you..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Social Media */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Google Maps */}
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Find Us
                </h3>
                <div className="rounded-lg overflow-hidden shadow-lg h-[400px] bg-secondary/30">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.2090!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzUwLjAiTiA3N8KwMTInMzIuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Pinnacle Global Location"
                  ></iframe>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Connect With Us
                </h3>
                <Card className="p-8 border-secondary">
                  <CardContent className="p-0">
                    <p className="font-paragraph text-foreground/80 mb-6 leading-relaxed">
                      Follow us on social media to stay updated with the latest news, events, and announcements.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="#"
                        className="w-14 h-14 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        <Facebook className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-14 h-14 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        <Twitter className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-14 h-14 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        <Linkedin className="w-6 h-6" />
                      </a>
                      <a
                        href="#"
                        className="w-14 h-14 bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        <Instagram className="w-6 h-6" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Timeline & AMC Info */}
              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Project Timeline
                </h3>
                <Card className="p-8 border-secondary">
                  <CardContent className="p-0">
                    <div className="space-y-4">
                      {[
                        { phase: 'Requirement Finalization', duration: '2 Days' },
                        { phase: 'Design & UI Approval', duration: '3 Days' },
                        { phase: 'Website Development', duration: '4 Days' },
                        { phase: 'Testing & Go-Live', duration: '1 Day' },
                      ].map((item, index) => (
                        <div key={index} className="flex justify-between items-center pb-4 border-b border-secondary last:border-0 last:pb-0">
                          <span className="font-paragraph text-foreground/80">{item.phase}</span>
                          <span className="font-paragraph font-semibold text-primary">{item.duration}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-3xl font-heading font-bold text-primary mb-6">
                  Annual Maintenance
                </h3>
                <Card className="p-8 border-secondary bg-primary/5">
                  <CardContent className="p-0">
                    <div className="text-center mb-6">
                      <p className="text-4xl font-heading font-bold text-primary mb-2">₹6,000/year</p>
                      <p className="font-paragraph text-foreground/70">Annual Maintenance Contract</p>
                    </div>
                    <ul className="space-y-3">
                      {[
                        'Regular security updates',
                        'Content management support',
                        'Technical assistance',
                        'Performance optimization',
                        'Backup and recovery',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3 font-paragraph text-foreground/80">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
