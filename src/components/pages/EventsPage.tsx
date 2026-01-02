import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { EventsandAnnouncements } from '@/entities';

export default function EventsPage() {
  const [events, setEvents] = useState<EventsandAnnouncements[]>([]);
  const [selectedType, setSelectedType] = useState<string>('All');

  useEffect(() => {
    const fetchEvents = async () => {
      const { items } = await BaseCrudService.getAll<EventsandAnnouncements>('eventsandannouncements');
      // Sort by date, most recent first
      const sortedItems = items.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
      setEvents(sortedItems);
    };

    fetchEvents();
  }, []);

  const eventTypes = ['All', ...Array.from(new Set(events.map(e => e.eventType).filter(Boolean)))];
  
  const filteredEvents = selectedType === 'All' 
    ? events 
    : events.filter(e => e.eventType === selectedType);

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    return new Date(date).toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_b7af422551394ee8b5c883111d8bcc94~mv2.png?originWidth=1920&originHeight=704"
            alt="Events and Announcements"
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
            Events & Announcements
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Stay updated with the latest happenings at Pinnacle Global
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      {eventTypes.length > 1 && (
        <section className="py-12 px-6 lg:px-12 bg-white sticky top-20 z-40 shadow-sm">
          <div className="max-w-[100rem] mx-auto">
            <div className="flex items-center justify-center flex-wrap gap-3">
              {eventTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-6 py-2 rounded-lg font-paragraph text-sm transition-all duration-200 ${
                    selectedType === type
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Events Timeline */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          {filteredEvents.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-paragraph text-foreground/60">
                No events found. Please check back later.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredEvents.map((event, index) => (
                <motion.div
                  key={event._id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-secondary">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      {event.image && (
                        <div className="relative h-64 lg:h-auto overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title || 'Event'}
                            className="w-full h-full object-cover"
                            width={400}
                          />
                          {event.eventType && (
                            <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-paragraph font-semibold shadow-lg">
                              {event.eventType}
                            </div>
                          )}
                        </div>
                      )}
                      <CardContent className={`p-8 ${event.image ? 'lg:col-span-2' : 'lg:col-span-3'}`}>
                        <div className="flex flex-wrap gap-4 mb-4">
                          {event.date && (
                            <div className="flex items-center gap-2 text-sm font-paragraph text-foreground/60">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(event.date)}</span>
                            </div>
                          )}
                          {event.time && (
                            <div className="flex items-center gap-2 text-sm font-paragraph text-foreground/60">
                              <Clock className="w-4 h-4" />
                              <span>{event.time}</span>
                            </div>
                          )}
                          {event.location && (
                            <div className="flex items-center gap-2 text-sm font-paragraph text-foreground/60">
                              <MapPin className="w-4 h-4" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>

                        <h3 className="text-3xl font-heading font-bold text-primary mb-4">
                          {event.title}
                        </h3>

                        {event.description && (
                          <p className="font-paragraph text-foreground/80 leading-relaxed mb-6">
                            {event.description}
                          </p>
                        )}

                        {event.externalLink && (
                          <a href={event.externalLink} target="_blank" rel="noopener noreferrer">
                            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg">
                              Learn More <ExternalLink className="ml-2 w-4 h-4" />
                            </Button>
                          </a>
                        )}
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Don't Miss Out
            </h2>
            <p className="text-xl font-paragraph text-primary-foreground/90 mb-8 leading-relaxed">
              Subscribe to our newsletter to stay informed about upcoming events and important announcements
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
