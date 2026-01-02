import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronRight, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Courses } from '@/entities';

export default function CoursesPage() {
  const [courses, setCourses] = useState<Courses[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<Courses[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  useEffect(() => {
    const fetchCourses = async () => {
      const { items } = await BaseCrudService.getAll<Courses>('courses');
      setCourses(items);
      setFilteredCourses(items);
    };

    fetchCourses();
  }, []);

  const programTypes = ['All', ...Array.from(new Set(courses.map(c => c.programType).filter(Boolean)))];

  const handleFilter = (filter: string) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      setFilteredCourses(courses);
    } else {
      setFilteredCourses(courses.filter(course => course.programType === filter));
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_e30b08d96ccf4783bedf730895ee4018~mv2.png?originWidth=1920&originHeight=704"
            alt="Courses and Programs"
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
            Our Programs
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Discover world-class programs designed to shape future leaders
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-6 lg:px-12 bg-white sticky top-20 z-40 shadow-sm">
        <div className="max-w-[100rem] mx-auto">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-primary" />
              <span className="font-paragraph font-semibold text-foreground">Filter by:</span>
            </div>
            <div className="flex flex-wrap gap-3">
              {programTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilter(type)}
                  className={`px-6 py-2 rounded-lg font-paragraph text-sm transition-all duration-200 ${
                    selectedFilter === type
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-paragraph text-foreground/60">
                No programs found. Please check back later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCourses.map((course, index) => (
                <motion.div
                  key={course._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-secondary h-full flex flex-col">
                    <div className="relative h-64 overflow-hidden">
                      {course.courseImage ? (
                        <Image
                          src={course.courseImage}
                          alt={course.courseName || 'Course'}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          width={400}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <span className="text-6xl font-heading font-bold text-primary/30">
                            {course.courseName?.charAt(0) || 'C'}
                          </span>
                        </div>
                      )}
                      {course.programType && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-paragraph font-semibold shadow-lg">
                          {course.programType}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                        {course.courseName}
                      </h3>
                      <p className="font-paragraph text-foreground/70 mb-6 line-clamp-3 flex-1">
                        {course.shortDescription}
                      </p>
                      <Link to={`/courses/${course._id}`} className="mt-auto">
                        <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-lg">
                          Learn More <ChevronRight className="ml-2 w-4 h-4" />
                        </Button>
                      </Link>
                    </CardContent>
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
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl font-paragraph text-primary-foreground/90 mb-8 leading-relaxed">
              Take the first step towards a transformative educational experience
            </p>
            <Link to="/admissions">
              <Button className="bg-white text-primary hover:bg-white/90 rounded-lg px-8 py-6 text-lg">
                Apply Now <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
