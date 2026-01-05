import { motion } from 'framer-motion';
import { Building2, Target, Users, Award, Globe, TrendingUp } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to the highest standards of academic and professional excellence',
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Fostering a diverse and inclusive learning environment for all',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Encouraging creative thinking and innovative problem-solving',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Preparing students for success in an interconnected world',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: 'Supporting continuous personal and professional development',
    },
    {
      icon: Building2,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all our endeavors',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_beb7301a8f4143ed9a245680cad0238d~mv2.png?originWidth=1920&originHeight=704"
            alt="About Pinnacle Global"
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
            About Pinnacle Global
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Building a legacy of academic excellence and leadership
          </motion.p>
        </div>
      </section>

      {/* Institute Overview */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-12">
              About d3st Pinnacle Global Group of Institutions, Karur
            </h2>
            <div className="space-y-6 font-paragraph text-foreground/80 leading-relaxed text-lg">
              <p>
                D3st Pinnacle Global Group of Institutions (PGGI) represents a transformative education initiative by d3st Pinnacle Global Educares Foundation, Karur (Tamil Nadu) - a registered not-for-profit trust committed to advancing quality education, skill development and entrepreneurship in India. The Group's primary vision is to establish an integrated educational ecosystem in Karur that enables continuous learning pathways - from pre-school to post-graduate professional education - while aligning with national and international academic and industry standards.
              </p>
              <p>
                D3st Pinnacle Global Group of Institutions embodies a future-ready, community-driven education ecosystem that also aligns with the national priorities such as NEP 2020, Skill India and Make in India. By blending quality education, vocational training and entrepreneurship, PGGI aims to make Karur a regional hub for education and innovation - uplifting both the local economy and youth employability.
              </p>
              <p>
                The vision of d3st Pinnacle Global Group of Institutions (PGGI) encapsulates its unwavering commitment to cultivating a generation of learners who possess the knowledge, adaptability and leadership needed to thrive in a rapidly transforming world. PGGI envisions a seamless educational ecosystem that fosters intellectual curiosity, ethical values, technological literacy and a lifelong pursuit of learning. With the comprehensive and ambitious roadmap, PGGI aims to transcends traditional educational boundaries.
              </p>
              <p>
                D3st Pinnacle Global Group of Institutions (PGGI) operates with a clear social mandate - "Education for Empowerment and Employment." Beyond academic excellence, the Group is going to be instrumental in uplifting the local community in Karur and neighbouring districts like Erode, Trichy, Namakkal, Dindigul, Tirupur, etc. through education, skilling and social development initiatives. The community engagement and CSR frameworks are integral to the Group's mission of social inclusion, gender equity and rural transformation.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://static.wixstatic.com/media/2019fd_b62f36092a54457684eab7af95b33d58~mv2.png?originWidth=768&originHeight=448"
                alt="Pinnacle Global Campus"
                className="w-full h-[500px] object-cover"
                width={800}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Details */}
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
              Project Information
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-8 text-center border-secondary">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                    Client
                  </h3>
                  <p className="text-xl font-paragraph text-foreground/80">
                    Pinnacle Global
                  </p>
                  <p className="text-sm font-paragraph text-foreground/60 mt-2">
                    Premier Educational Institution
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card className="p-8 text-center border-secondary">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                    Proposed By
                  </h3>
                  <p className="text-xl font-paragraph text-foreground/80">
                    Sisesoft IT Solutions
                  </p>
                  <p className="text-sm font-paragraph text-foreground/60 mt-2">
                    Digital Innovation Partner
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-[100rem] mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
              Our Core Values
            </h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-3xl mx-auto">
              The principles that guide our mission and shape our community
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-secondary h-full">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                      <value.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-3">
                      {value.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '25+', label: 'Years of Excellence' },
              { number: '10,000+', label: 'Alumni Worldwide' },
              { number: '50+', label: 'Programs Offered' },
              { number: '95%', label: 'Placement Rate' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <h3 className="text-5xl md:text-6xl font-heading font-bold mb-3">
                  {stat.number}
                </h3>
                <p className="text-lg font-paragraph text-primary-foreground/90">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
