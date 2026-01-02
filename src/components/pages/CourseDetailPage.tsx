import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, BookOpen, Clock, Award, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Courses } from '@/entities';

export default function CourseDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [course, setCourse] = useState<Courses | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourse = async () => {
      if (!id) return;
      
      const courseData = await BaseCrudService.getById<Courses>('courses', id);
      setCourse(courseData);
      setLoading(false);
    };

    fetchCourse();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] mt-20">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="font-paragraph text-foreground/60">Loading course details...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh] mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-heading font-bold text-primary mb-4">Course Not Found</h2>
            <Link to="/courses">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Courses
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-end overflow-hidden mt-20">
        <div className="absolute inset-0">
          {course.courseImage ? (
            <Image
              src={course.courseImage}
              alt={course.courseName || 'Course'}
              className="w-full h-full object-cover"
              width={1920}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70"></div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full px-6 lg:px-12 pb-16">
          <div className="max-w-[100rem] mx-auto">
            <Link to="/courses">
              <Button variant="outline" className="bg-white/10 text-white border-white/30 hover:bg-white/20 rounded-lg mb-6 backdrop-blur-sm">
                <ArrowLeft className="mr-2 w-4 h-4" /> Back to Courses
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {course.programType && (
                <span className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-paragraph font-semibold mb-4">
                  {course.programType}
                </span>
              )}
              <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
                {course.courseName}
              </h1>
              {course.shortDescription && (
                <p className="text-xl font-paragraph text-white/90 max-w-3xl">
                  {course.shortDescription}
                </p>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-6">
                  About This Program
                </h2>
                {course.detailedDescription ? (
                  <div className="font-paragraph text-foreground/80 leading-relaxed space-y-4 text-lg">
                    {course.detailedDescription.split('\n').map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p className="font-paragraph text-foreground/80 leading-relaxed text-lg">
                    {course.shortDescription || 'Detailed information about this program will be available soon.'}
                  </p>
                )}
              </motion.div>

              {/* Program Highlights */}
              <motion.div
                className="mt-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-heading font-bold text-primary mb-8">
                  Program Highlights
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    { icon: BookOpen, title: 'Comprehensive Curriculum', description: 'Industry-aligned courses designed by experts' },
                    { icon: Users, title: 'Expert Faculty', description: 'Learn from experienced professionals and academics' },
                    { icon: Award, title: 'Recognized Certification', description: 'Globally recognized degree upon completion' },
                    { icon: Clock, title: 'Flexible Learning', description: 'Balanced schedule with practical and theoretical sessions' },
                  ].map((highlight, index) => (
                    <Card key={index} className="p-6 border-secondary hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                            <highlight.icon className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                              {highlight.title}
                            </h3>
                            <p className="font-paragraph text-foreground/70 text-sm">
                              {highlight.description}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="sticky top-32"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Card className="p-8 border-secondary shadow-lg">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-heading font-bold text-primary mb-6">
                      Enroll Now
                    </h3>
                    <p className="font-paragraph text-foreground/70 mb-6 leading-relaxed">
                      Take the first step towards your future. Apply now and join our community of learners.
                    </p>
                    
                    {course.enrollmentUrl ? (
                      <a href={course.enrollmentUrl} target="_blank" rel="noopener noreferrer">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg mb-4">
                          Apply Online <ExternalLink className="ml-2 w-4 h-4" />
                        </Button>
                      </a>
                    ) : (
                      <Link to="/admissions">
                        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg mb-4">
                          Apply Now
                        </Button>
                      </Link>
                    )}
                    
                    <Link to="/contact">
                      <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg">
                        Contact Admissions
                      </Button>
                    </Link>

                    <div className="mt-8 pt-8 border-t border-secondary">
                      <h4 className="font-heading font-semibold text-lg text-primary mb-4">
                        Need More Information?
                      </h4>
                      <ul className="space-y-3 font-paragraph text-sm text-foreground/70">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Download Program Brochure
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Schedule a Campus Visit
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          Speak with an Advisor
                        </li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
