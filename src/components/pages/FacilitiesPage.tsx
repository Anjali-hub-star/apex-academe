import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Facilities } from '@/entities';

export default function FacilitiesPage() {
  const [facilities, setFacilities] = useState<Facilities[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  useEffect(() => {
    const fetchFacilities = async () => {
      const { items } = await BaseCrudService.getAll<Facilities>('facilities');
      setFacilities(items);
    };

    fetchFacilities();
  }, []);

  const categories = ['All', ...Array.from(new Set(facilities.map(f => f.category).filter(Boolean)))];
  
  const filteredFacilities = selectedCategory === 'All' 
    ? facilities 
    : facilities.filter(f => f.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_a5a72ab0248141798380cb83b7b149d2~mv2.png?originWidth=1920&originHeight=704"
            alt="Facilities"
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
            Our Facilities
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            State-of-the-art infrastructure designed for excellence
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      {categories.length > 1 && (
        <section className="py-12 px-6 lg:px-12 bg-white sticky top-20 z-40 shadow-sm">
          <div className="max-w-[100rem] mx-auto">
            <div className="flex items-center justify-center flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-lg font-paragraph text-sm transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-foreground hover:bg-secondary'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Facilities Grid */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          {filteredFacilities.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl font-paragraph text-foreground/60">
                No facilities found. Please check back later.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFacilities.map((facility, index) => (
                <motion.div
                  key={facility._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.6 }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 group border-secondary h-full">
                    <div className="relative h-64 overflow-hidden">
                      {facility.facilityImage ? (
                        <Image
                          src={facility.facilityImage}
                          alt={facility.facilityName || 'Facility'}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          width={400}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                          <Building2 className="w-16 h-16 text-primary/30" />
                        </div>
                      )}
                      {facility.category && (
                        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-paragraph font-semibold shadow-lg">
                          {facility.category}
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                        {facility.facilityName}
                      </h3>
                      {facility.description && (
                        <p className="font-paragraph text-foreground/70 mb-4 line-clamp-3">
                          {facility.description}
                        </p>
                      )}
                      <div className="flex flex-wrap gap-4 text-sm font-paragraph text-foreground/60">
                        {facility.capacity && (
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Capacity: {facility.capacity}</span>
                          </div>
                        )}
                        {facility.location && (
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4" />
                            <span>{facility.location}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Infrastructure Highlights */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              World-Class Infrastructure
            </h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-3xl mx-auto">
              Our campus is equipped with modern facilities to support your academic and personal growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Smart Classrooms', description: 'Technology-enabled learning spaces' },
              { title: 'Research Labs', description: 'Advanced laboratories for hands-on learning' },
              { title: 'Digital Library', description: 'Extensive collection of resources' },
              { title: 'Sports Complex', description: 'Modern facilities for athletics and recreation' },
            ].map((highlight, index) => (
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
                      <Building2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                      {highlight.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 text-sm">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
