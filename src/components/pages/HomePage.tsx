// HPI 1.6-G
import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Award, Users, BookOpen, TrendingUp, ChevronRight, Calendar, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Courses, Testimonials, GalleryPhotos, EventsandAnnouncements } from '@/entities';

// --- Utility Components for Motion & Layout ---

type AnimatedElementProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

const AnimatedElement: React.FC<AnimatedElementProps> = ({ children, className, delay = 0 }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        // Add a small delay via style if needed, or just let CSS handle it
        setTimeout(() => {
            element.classList.add('is-visible');
        }, delay);
        observer.unobserve(element);
      }
    }, { threshold: 0.15 });

    observer.observe(element);
    return () => observer.disconnect();
  }, [delay]);

  return <div ref={ref} className={`reveal-on-scroll ${className || ''}`}>{children}</div>;
};

const ParallaxSection: React.FC<{ children: React.ReactNode; className?: string; speed?: number }> = ({ children, className, speed = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!ref.current) return;
            const scrolled = window.scrollY;
            const val = scrolled * speed;
            ref.current.style.transform = `translateY(${val}px)`;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [speed]);

    return <div ref={ref} className={className}>{children}</div>;
};

// --- Main Component ---

export default function HomePage() {
  // --- Data Fidelity Protocol: Canonical Data Sources ---
  const [displayedText, setDisplayedText] = useState('');
  const [courses, setCourses] = useState<Courses[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonials[]>([]);
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhotos[]>([]);
  const [events, setEvents] = useState<EventsandAnnouncements[]>([]);
  const fullText = 'Pinnacle Global: Shaping Future Leaders';

  // Preserve original typing effect logic
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, []);

  // Preserve original data fetching logic
  useEffect(() => {
    const fetchData = async () => {
      const [coursesData, testimonialsData, galleryData, eventsData] = await Promise.all([
        BaseCrudService.getAll<Courses>('courses'),
        BaseCrudService.getAll<Testimonials>('testimonials'),
        BaseCrudService.getAll<GalleryPhotos>('galleryphotos'),
        BaseCrudService.getAll<EventsandAnnouncements>('eventsandannouncements'),
      ]);

      setCourses(coursesData.items.slice(0, 3));
      setTestimonials(testimonialsData.items.slice(0, 3));
      setGalleryPhotos(galleryData.items.slice(0, 6));
      setEvents(eventsData.items.slice(0, 3));
    };

    fetchData();
  }, []);

  // Preserve original achievements data
  const achievements = [
    { icon: Award, title: '25+ Years', description: 'Of Academic Excellence' },
    { icon: Users, title: '10,000+', description: 'Alumni Network' },
    { icon: BookOpen, title: '50+', description: 'Programs Offered' },
    { icon: TrendingUp, title: '95%', description: 'Placement Rate' },
  ];

  // --- Render ---

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-clip selection:bg-primary/20 selection:text-primary">
      <style>{`
        .reveal-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 1s cubic-bezier(0.2, 0.8, 0.2, 1), transform 1s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .reveal-on-scroll.is-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .clip-diagonal {
            clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
        }
        .clip-image-card {
            clip-path: inset(0 0 0 0 round 0.5rem);
            transition: clip-path 0.5s ease;
        }
        .clip-image-card:hover {
            clip-path: inset(10px 10px 10px 10px round 1rem);
        }
        .text-stroke {
            -webkit-text-stroke: 1px rgba(0, 48, 143, 0.2);
            color: transparent;
        }
      `}</style>

      <Header />

      <main>
        {/* --- HERO SECTION --- */}
        <section className="relative h-[95vh] w-full overflow-hidden flex items-center justify-center">
          {/* Parallax Background */}
          <div className="absolute inset-0 z-0">
            <ParallaxSection speed={0.4} className="w-full h-[120%] -mt-[10%]">
                <Image
                    src="https://static.wixstatic.com/media/2019fd_eda9684c14b74c3abc00dc8cb6d49d74~mv2.png?originWidth=1920&originHeight=1024"
                    alt="Pinnacle Global Campus Architecture"
                    className="w-full h-full object-cover opacity-90"
                    width={1920}
                />
            </ParallaxSection>
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background/90" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">
            <AnimatedElement>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white/90 mb-8">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-sm font-paragraph tracking-wider uppercase">Admissions Open for 2024</span>
                </div>
            </AnimatedElement>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-8 leading-[1.1] tracking-tight">
              {displayedText}
              <span className="animate-pulse text-primary ml-1">|</span>
            </h1>

            <AnimatedElement delay={300}>
                <p className="text-xl md:text-2xl font-paragraph text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
                Empowering minds, inspiring innovation, and building tomorrow's leaders through world-class education and a commitment to excellence.
                </p>
            </AnimatedElement>

            <AnimatedElement delay={500}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/admissions">
                        <Button className="h-14 px-10 text-lg bg-primary hover:bg-primary/90 text-white rounded-full transition-all duration-300 hover:scale-105 shadow-lg shadow-primary/25">
                            Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
                    <Link to="/courses">
                        <Button variant="outline" className="h-14 px-10 text-lg bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full transition-all duration-300">
                            Explore Programs
                        </Button>
                    </Link>
                </div>
            </AnimatedElement>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 animate-bounce">
            <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto mb-2" />
            <span className="text-xs uppercase tracking-widest">Scroll</span>
          </div>
        </section>

        {/* --- IDENTITY & VISION SECTION (Sticky Layout) --- */}
        <section className="relative py-32 px-6 md:px-12 bg-background">
            <div className="max-w-[100rem] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Sticky Sidebar */}
                    <div className="lg:col-span-4 relative">
                        <div className="sticky top-32">
                            <AnimatedElement>
                                <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Who We Are</h2>
                                <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-8 leading-tight">
                                    A Legacy of <br/>
                                    <span className="text-primary italic">Transformation</span>
                                </h3>
                                <div className="w-20 h-1 bg-primary/20 mb-8" />
                                <p className="text-lg font-paragraph text-foreground/70 leading-relaxed mb-8">
                                    Pinnacle Global is more than an institution; it is a crucible for future leaders. We blend traditional academic rigor with cutting-edge innovation to create an environment where potential meets opportunity.
                                </p>
                                <Link to="/about-us" className="group inline-flex items-center text-primary font-semibold tracking-wide hover:text-primary/80 transition-colors">
                                    Read Our Story <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </AnimatedElement>
                        </div>
                    </div>

                    {/* Scrolling Content */}
                    <div className="lg:col-span-8 space-y-24">
                        {/* Block 1 */}
                        <AnimatedElement className="grid md:grid-cols-2 gap-8 items-center">
                            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="https://static.wixstatic.com/media/2019fd_8383c13abd9147a98c2370ce9c1cda8d~mv2.png?originWidth=576&originHeight=704"
                                    alt="Students collaborating in library"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    width={600}
                                />
                            </div>
                            <div className="space-y-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <BookOpen className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-heading font-bold">Academic Excellence</h4>
                                <p className="text-foreground/70 font-paragraph">
                                    Our curriculum is designed by industry experts and academic stalwarts to ensure you stay ahead of the curve. We focus on holistic development that goes beyond textbooks.
                                </p>
                            </div>
                        </AnimatedElement>

                        {/* Block 2 */}
                        <AnimatedElement className="grid md:grid-cols-2 gap-8 items-center md:flex-row-reverse">
                            <div className="order-2 md:order-1 space-y-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h4 className="text-2xl font-heading font-bold">Global Community</h4>
                                <p className="text-foreground/70 font-paragraph">
                                    Join a diverse community of thinkers, creators, and leaders. Our alumni network spans across 50+ countries, opening doors to global opportunities.
                                </p>
                            </div>
                            <div className="order-1 md:order-2 relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src="https://static.wixstatic.com/media/2019fd_36e03e7581b84ccf9bfe7ce1668cc65b~mv2.png?originWidth=576&originHeight=704"
                                    alt="International student group"
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    width={600}
                                />
                            </div>
                        </AnimatedElement>
                    </div>
                </div>
            </div>
        </section>

        {/* --- STATS SECTION (Full Bleed) --- */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                 <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full border-[40px] border-white/20" />
                 <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full border-[20px] border-white/20" />
            </div>
            
            <div className="max-w-[100rem] mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10">
                    {achievements.map((stat, idx) => (
                        <AnimatedElement key={idx} delay={idx * 100} className="p-4">
                            <stat.icon className="w-10 h-10 mx-auto mb-6 text-white/80" />
                            <h3 className="text-4xl md:text-5xl font-heading font-bold mb-2">{stat.title}</h3>
                            <p className="text-sm md:text-base font-paragraph text-white/70 uppercase tracking-wider">{stat.description}</p>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>

        {/* --- FEATURED COURSES (Horizontal Scroll / Cards) --- */}
        <section className="py-32 px-6 md:px-12 bg-secondary/20">
            <div className="max-w-[100rem] mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <AnimatedElement>
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Academic Programs</h2>
                        <h3 className="text-4xl md:text-6xl font-heading font-bold text-foreground">
                            Shape Your <span className="text-stroke">Future</span>
                        </h3>
                    </AnimatedElement>
                    <AnimatedElement delay={200}>
                        <Link to="/courses">
                            <Button variant="ghost" className="text-lg group">
                                View All Programs <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </Button>
                        </Link>
                    </AnimatedElement>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map((course, index) => (
                        <AnimatedElement key={course._id} delay={index * 150}>
                            <Link to={`/courses/${course._id}`} className="group block h-full">
                                <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-500 bg-white overflow-hidden flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        {course.courseImage ? (
                                            <Image
                                                src={course.courseImage}
                                                alt={course.courseName || 'Course Image'}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                                width={600}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-secondary flex items-center justify-center">
                                                <BookOpen className="w-12 h-12 text-muted-foreground" />
                                            </div>
                                        )}
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider text-primary">
                                            {course.programType || 'Certificate'}
                                        </div>
                                        <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                            <span className="text-white font-heading text-xl border-b border-white pb-1">View Details</span>
                                        </div>
                                    </div>
                                    <CardContent className="p-8 flex-grow flex flex-col">
                                        <h4 className="text-2xl font-heading font-bold text-primary mb-3 group-hover:text-primary/80 transition-colors">
                                            {course.courseName}
                                        </h4>
                                        <p className="text-foreground/70 font-paragraph mb-6 line-clamp-3 flex-grow">
                                            {course.shortDescription}
                                        </p>
                                        <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                                            Learn More <ChevronRight className="ml-1 w-4 h-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        </AnimatedElement>
                    ))}
                </div>
            </div>
        </section>

        {/* --- CAMPUS LIFE (Masonry Gallery) --- */}
        {galleryPhotos.length > 0 && (
            <section className="py-32 px-6 md:px-12 bg-background overflow-hidden">
                <div className="max-w-[100rem] mx-auto">
                    <AnimatedElement className="text-center mb-20">
                        <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Campus Life</h2>
                        <h3 className="text-4xl md:text-6xl font-heading font-bold text-foreground mb-6">
                            Life at <span className="italic text-primary">Pinnacle</span>
                        </h3>
                        <p className="max-w-2xl mx-auto text-foreground/70 font-paragraph text-lg">
                            Experience a vibrant ecosystem of culture, sports, and innovation.
                        </p>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 auto-rows-[300px]">
                        {galleryPhotos.map((photo, index) => (
                            <AnimatedElement 
                                key={photo._id} 
                                delay={index * 100}
                                className={`relative group overflow-hidden rounded-2xl ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}
                            >
                                {photo.photo && (
                                    <Image
                                        src={photo.photo}
                                        alt={photo.title || 'Campus Life'}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        width={800}
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                                    <h4 className="text-white font-heading text-2xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {photo.title}
                                    </h4>
                                    <p className="text-white/80 font-paragraph text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                                        {photo.category}
                                    </p>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                    
                    <div className="mt-16 text-center">
                        <Link to="/gallery">
                            <Button variant="outline" className="px-8 py-6 rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-all">
                                Explore Full Gallery
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>
        )}

        {/* --- TESTIMONIALS (Clean Slider Style) --- */}
        {testimonials.length > 0 && (
            <section className="py-32 px-6 md:px-12 bg-primary/5 relative">
                <div className="max-w-[100rem] mx-auto">
                    <AnimatedElement className="mb-16">
                        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-primary">Voices of Pinnacle</h2>
                    </AnimatedElement>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <AnimatedElement key={testimonial._id} delay={index * 150}>
                                <div className="bg-white p-10 rounded-tl-3xl rounded-br-3xl shadow-xl border border-secondary h-full flex flex-col relative group hover:-translate-y-2 transition-transform duration-300">
                                    <div className="absolute top-8 right-8 text-primary/10 group-hover:text-primary/20 transition-colors">
                                        <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M14.017 21L14.017 18C14.017 16.896 14.325 15.923 14.941 15.082C15.557 14.24 16.444 13.561 17.602 13.046V11.328C16.835 11.328 16.179 11.525 15.635 11.919C15.091 12.312 14.714 12.888 14.503 13.646C14.292 14.404 14.187 15.354 14.187 16.496H10.517C10.517 14.904 10.869 13.465 11.573 12.179C12.277 10.893 13.277 9.935 14.573 9.305L15.069 8.305H18.017V21H14.017ZM5.01697 21L5.01697 18C5.01697 16.896 5.32497 15.923 5.94097 15.082C6.55697 14.24 7.44397 13.561 8.60197 13.046V11.328C7.83497 11.328 7.17897 11.525 6.63497 11.919C6.09097 12.312 5.71397 12.888 5.50297 13.646C5.29197 14.404 5.18697 15.354 5.18697 16.496H1.51697C1.51697 14.904 1.86897 13.465 2.57297 12.179C3.27697 10.893 4.27697 9.935 5.57297 9.305L6.06897 8.305H9.01697V21H5.01697Z" />
                                        </svg>
                                    </div>
                                    
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary/20">
                                            {testimonial.personPhoto ? (
                                                <Image
                                                    src={testimonial.personPhoto}
                                                    alt={testimonial.name || 'Student'}
                                                    className="w-full h-full object-cover"
                                                    width={64}
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-secondary flex items-center justify-center text-primary font-bold text-xl">
                                                    {testimonial.name?.charAt(0)}
                                                </div>
                                            )}
                                        </div>
                                        <div>
                                            <h4 className="font-heading font-bold text-lg text-primary">{testimonial.name}</h4>
                                            <p className="text-xs font-paragraph text-foreground/60 uppercase tracking-wide">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    
                                    <p className="font-paragraph text-foreground/80 italic leading-relaxed flex-grow">
                                        "{testimonial.testimonialText}"
                                    </p>
                                    
                                    <div className="flex gap-1 mt-6 text-yellow-500">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* --- EVENTS & ANNOUNCEMENTS (Timeline/Cards) --- */}
        {events.length > 0 && (
            <section className="py-32 px-6 md:px-12 bg-background">
                <div className="max-w-[100rem] mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-secondary pb-8">
                        <AnimatedElement>
                            <h2 className="text-sm font-bold tracking-[0.2em] text-primary uppercase mb-4">Calendar</h2>
                            <h3 className="text-4xl md:text-5xl font-heading font-bold text-foreground">Upcoming Events</h3>
                        </AnimatedElement>
                        <AnimatedElement delay={200}>
                            <Link to="/events" className="text-primary font-semibold hover:underline flex items-center mt-4 md:mt-0">
                                View Full Calendar <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </AnimatedElement>
                    </div>

                    <div className="space-y-8">
                        {events.map((event, index) => (
                            <AnimatedElement key={event._id} delay={index * 100}>
                                <div className="group flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl hover:bg-secondary/20 transition-colors duration-300 border border-transparent hover:border-secondary">
                                    {/* Date Box */}
                                    <div className="flex-shrink-0 w-full md:w-24 h-24 bg-primary/5 rounded-xl flex flex-col items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                        <span className="text-3xl font-bold font-heading">
                                            {event.date ? new Date(event.date).getDate() : 'TB'}
                                        </span>
                                        <span className="text-xs uppercase font-bold tracking-wider">
                                            {event.date ? new Date(event.date).toLocaleDateString('en-US', { month: 'short' }) : 'Date'}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-grow">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-3 py-1 rounded-full bg-secondary text-xs font-bold uppercase tracking-wider text-foreground/70">
                                                {event.eventType || 'General'}
                                            </span>
                                            {event.location && (
                                                <span className="flex items-center text-xs text-foreground/60">
                                                    <MapPin className="w-3 h-3 mr-1" /> {event.location}
                                                </span>
                                            )}
                                        </div>
                                        <h4 className="text-2xl font-heading font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                                            {event.title}
                                        </h4>
                                        <p className="text-foreground/70 font-paragraph max-w-3xl">
                                            {event.description}
                                        </p>
                                    </div>

                                    {/* Action */}
                                    <div className="flex-shrink-0 self-center">
                                        <Button variant="ghost" size="icon" className="rounded-full w-12 h-12 border border-secondary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all">
                                            <ArrowRight className="w-5 h-5" />
                                        </Button>
                                    </div>
                                </div>
                            </AnimatedElement>
                        ))}
                    </div>
                </div>
            </section>
        )}

        {/* --- CTA SECTION --- */}
        <section className="py-32 px-6 md:px-12 bg-primary text-white relative overflow-hidden">
            <div className="absolute inset-0">
                <Image
                    src="https://static.wixstatic.com/media/2019fd_ad39a3028db3431aae9a398613c5fde8~mv2.png?originWidth=1920&originHeight=1024"
                    alt="Background Pattern"
                    className="w-full h-full object-cover opacity-10 mix-blend-overlay"
                    width={1920}
                />
            </div>
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <AnimatedElement>
                    <h2 className="text-5xl md:text-7xl font-heading font-bold mb-8">Ready to Begin Your Journey?</h2>
                    <p className="text-xl font-paragraph text-white/80 mb-12 leading-relaxed">
                        Join a community of innovators, thinkers, and leaders. Applications for the upcoming academic year are now open.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Link to="/admissions">
                            <Button className="h-16 px-12 text-xl bg-white text-primary hover:bg-white/90 rounded-full font-bold shadow-2xl hover:shadow-white/20 transition-all hover:-translate-y-1">
                                Apply for Admission
                            </Button>
                        </Link>
                        <Link to="/contact-us">
                            <Button variant="outline" className="h-16 px-12 text-xl bg-transparent border-2 border-white/30 text-white hover:bg-white/10 rounded-full font-bold transition-all">
                                Contact Admissions
                            </Button>
                        </Link>
                    </div>
                </AnimatedElement>
            </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}