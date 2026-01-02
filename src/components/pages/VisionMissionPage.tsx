import { motion } from 'framer-motion';
import { Eye, Target, Lightbulb, Heart, Rocket, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VisionMissionPage() {
  const visionPoints = [
    {
      icon: Eye,
      title: 'Global Leadership',
      description: 'To be recognized as a global leader in education, setting benchmarks for academic excellence and innovation.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Creating an ecosystem that fosters creativity, research, and cutting-edge solutions to global challenges.',
    },
    {
      icon: Rocket,
      title: 'Future Ready',
      description: 'Preparing students with skills and knowledge to thrive in the rapidly evolving digital economy.',
    },
  ];

  const missionPoints = [
    {
      icon: Target,
      title: 'Academic Excellence',
      description: 'Deliver world-class education through innovative curricula, distinguished faculty, and state-of-the-art facilities.',
    },
    {
      icon: Users,
      title: 'Holistic Development',
      description: 'Nurture well-rounded individuals by fostering intellectual, emotional, social, and ethical growth.',
    },
    {
      icon: Heart,
      title: 'Social Responsibility',
      description: 'Instill values of integrity, empathy, and social consciousness to create responsible global citizens.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_78c1d838f8084b27a405616b10bc2dd5~mv2.png?originWidth=1920&originHeight=704"
            alt="Vision and Mission"
            className="w-full h-full object-cover"
            width={1920}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <motion.h1
            className="text-5xl md:text-6xl font-heading font-bold text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Vision & Mission
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Guiding principles that shape our journey towards excellence
          </motion.p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Eye className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Vision
            </h2>
            <p className="text-xl font-paragraph text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              To be a globally recognized institution of higher learning that empowers individuals to become innovative leaders, critical thinkers, and responsible citizens who shape a better future for humanity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-secondary h-full group hover:border-primary/30">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <point.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                      {point.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-[100rem] mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
      </div>

      {/* Mission Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Target className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Mission
            </h2>
            <p className="text-xl font-paragraph text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              To provide transformative education that combines academic rigor with practical experience, fostering innovation, ethical leadership, and a commitment to lifelong learning in a diverse and inclusive environment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 hover:shadow-xl transition-all duration-300 border-secondary h-full group hover:border-primary/30">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                      <point.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-4">
                      {point.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 leading-relaxed">
                      {point.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Our Commitment to Excellence
              </h2>
              <div className="space-y-6 font-paragraph text-foreground/80 leading-relaxed">
                <p>
                  At Pinnacle Global, we are committed to creating an environment where students can discover their passions, develop their talents, and achieve their full potential. Our vision and mission guide every decision we make and every program we offer.
                </p>
                <p>
                  We believe that education is not just about acquiring knowledge, but about developing the skills, values, and mindset necessary to navigate an increasingly complex and interconnected world. Through our commitment to innovation, inclusivity, and excellence, we prepare our students to become leaders who will make a positive impact on society.
                </p>
                <p>
                  Our faculty, staff, and administration work tirelessly to ensure that every student receives the support, resources, and opportunities they need to succeed. Together, we are building a community of learners, thinkers, and doers who are ready to shape the future.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src="https://static.wixstatic.com/media/2019fd_d32e4a44cf2e401e82d4c768da3c96bf~mv2.png?originWidth=768&originHeight=448"
                  alt="Commitment to Excellence"
                  className="w-full h-[500px] object-cover"
                  width={800}
                />
              </div>
            </motion.div>
          </div>
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
              Join Us in Shaping the Future
            </h2>
            <p className="text-xl font-paragraph text-primary-foreground/90 mb-8 leading-relaxed">
              Be part of a community that values excellence, innovation, and social responsibility. Together, we can create a brighter tomorrow.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
