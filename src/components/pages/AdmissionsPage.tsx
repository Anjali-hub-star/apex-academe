import { useState } from 'react';
import { motion } from 'framer-motion';
import { FileText, UserCheck, Calendar, CheckCircle, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';

export default function AdmissionsPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const admissionSteps = [
    {
      icon: FileText,
      title: 'Submit Application',
      description: 'Complete and submit your online application form with all required documents',
      duration: 'Day 1-2',
    },
    {
      icon: UserCheck,
      title: 'Application Review',
      description: 'Our admissions team reviews your application and academic credentials',
      duration: 'Day 3-5',
    },
    {
      icon: Calendar,
      title: 'Interview & Assessment',
      description: 'Participate in an interview and complete any required assessments',
      duration: 'Day 6-8',
    },
    {
      icon: CheckCircle,
      title: 'Admission Decision',
      description: 'Receive your admission decision and enrollment instructions',
      duration: 'Day 9-10',
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    toast({
      title: 'Enquiry Submitted Successfully!',
      description: 'Our admissions team will contact you within 24-48 hours.',
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      program: '',
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[60vh] w-full flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/2019fd_06ad44d535114fc6aaa88d52ca13359d~mv2.png?originWidth=1920&originHeight=704"
            alt="Admissions"
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
            Admissions
          </motion.h1>
          <motion.p
            className="text-xl font-paragraph text-white/90"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Begin your journey towards excellence at Pinnacle Global
          </motion.p>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-3xl mx-auto">
              Follow these simple steps to join our community of learners
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative"
              >
                <Card className="p-8 hover:shadow-xl transition-shadow duration-300 border-secondary h-full">
                  <CardContent className="p-0">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-heading font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mt-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-lg text-xs font-paragraph font-semibold mb-4">
                      {step.duration}
                    </span>
                    <h3 className="text-xl font-heading font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="font-paragraph text-foreground/70 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
                {index < admissionSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="py-24 px-6 lg:px-12 bg-secondary/30">
        <div className="max-w-[100rem] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">
                Submit Your Enquiry
              </h2>
              <p className="text-lg font-paragraph text-foreground/80 mb-8 leading-relaxed">
                Have questions about our programs or the admission process? Fill out the form and our admissions team will get back to you promptly.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      Quick Response
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      Our team responds to all enquiries within 24-48 hours
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      Personalized Guidance
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      Get tailored advice based on your academic background and goals
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-primary mb-2">
                      Comprehensive Support
                    </h3>
                    <p className="font-paragraph text-foreground/70">
                      Assistance throughout the entire admission process
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
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
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <Label htmlFor="program" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Program of Interest
                      </Label>
                      <Input
                        id="program"
                        name="program"
                        type="text"
                        value={formData.program}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="e.g., MBA, B.Tech, etc."
                      />
                    </div>

                    <div>
                      <Label htmlFor="message" className="font-paragraph font-semibold text-foreground mb-2 block">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        className="rounded-lg border-secondary"
                        placeholder="Tell us about your academic background and goals..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg py-6 text-lg"
                    >
                      {isSubmitting ? (
                        <>Submitting...</>
                      ) : (
                        <>
                          Submit Enquiry <Send className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Requirements */}
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
              Admission Requirements
            </h2>
            <p className="text-lg font-paragraph text-foreground/80 max-w-3xl mx-auto">
              General requirements for admission to Pinnacle Global programs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Academic Records',
                items: ['Official transcripts', 'Degree certificates', 'Mark sheets', 'Academic references'],
              },
              {
                title: 'Test Scores',
                items: ['Entrance exam scores', 'Language proficiency', 'Aptitude tests', 'Subject-specific tests'],
              },
              {
                title: 'Documents',
                items: ['Application form', 'Statement of purpose', 'Resume/CV', 'Identity proof'],
              },
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="p-8 border-secondary h-full">
                  <CardContent className="p-0">
                    <h3 className="text-2xl font-heading font-semibold text-primary mb-6">
                      {category.title}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3 font-paragraph text-foreground/70">
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
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
