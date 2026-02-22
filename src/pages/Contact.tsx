import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "Thank you for your enquiry. We will be in touch shortly.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Contact Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Let's Build <span className="text-secondary">Together</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Ready to start your next project? Get in touch with our team and let's discuss how Thulanyathi can deliver the solutions you need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <h2 className="text-2xl font-extrabold text-foreground mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <a href="tel:+27614647084" className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Phone className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Phone</p>
                    <p className="text-muted-foreground">+27 61 464 7084</p>
                  </div>
                </a>
                <a href="mailto:nyathi@thulanyathi.co.za" className="flex items-start gap-4 group">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0 group-hover:bg-secondary/20 transition-colors">
                    <Mail className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Email</p>
                    <p className="text-muted-foreground">nyathi@thulanyathi.co.za</p>
                  </div>
                </a>
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">South Africa</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 rounded-lg overflow-hidden border border-border h-48 bg-muted flex items-center justify-center">
                <iframe
                  title="Thulanyathi Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14889398.998498784!2d17.37453!3d-30.5595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c34a689d9ee1251%3A0xe85d630c1fa4e8a0!2sSouth%20Africa!5e0!3m2!1sen!2s!4v1700000000000"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="lg:col-span-2">
              <div className="p-8 rounded-lg border border-border bg-card">
                <h2 className="text-2xl font-extrabold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground mb-8">Fill in the form below and we'll get back to you as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                      <Input id="fullName" name="fullName" required placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1.5">Company Name</label>
                      <Input id="company" name="company" placeholder="Your company" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email *</label>
                      <Input id="email" name="email" type="email" required placeholder="your@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone</label>
                      <Input id="phone" name="phone" type="tel" placeholder="+27 ..." />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Service Required</label>
                    <Select name="service">
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="civil-engineering">Civil Engineering</SelectItem>
                        <SelectItem value="construction">Construction</SelectItem>
                        <SelectItem value="logistics">Logistics</SelectItem>
                        <SelectItem value="power-backup">Power Backup Installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Message *</label>
                    <Textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." />
                  </div>
                  <Button type="submit" disabled={isSubmitting} size="lg" className="bg-secondary text-secondary-foreground hover:bg-orange-dark w-full sm:w-auto px-10">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
