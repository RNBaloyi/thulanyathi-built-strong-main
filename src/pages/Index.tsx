import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  HardHat,
  Building2,
  Truck,
  Zap,
  ShieldCheck,
  Users,
  Award,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import heroImage from "@/assets/hero-construction.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

const services = [
  {
    icon: HardHat,
    title: "Civil Engineering",
    desc: "Road construction, earthworks, and land preparation with uncompromising safety and quality standards.",
    link: "/services",
  },
  {
    icon: Building2,
    title: "Construction",
    desc: "Residential, commercial, and industrial projects built with precision and craftsmanship.",
    link: "/services",
  },
  {
    icon: Truck,
    title: "Logistics",
    desc: "Reliable local and regional freight transport for construction materials and heavy equipment.",
    link: "/services",
  },
  {
    icon: Zap,
    title: "Power Backup",
    desc: "Tailored backup power systems ensuring uninterrupted energy for homes and businesses.",
    link: "/services",
  },
];

const reasons = [
  {
    icon: Award,
    title: "Established Since 2017",
    desc: "Years of proven experience in infrastructure delivery.",
  },
  {
    icon: TrendingUp,
    title: "Sustainability Focus",
    desc: "Committed to sustainable practices in every project.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Standards",
    desc: "Competitive pricing without compromising on quality.",
  },
  {
    icon: Users,
    title: "Community Impact",
    desc: "Creating jobs and driving community development.",
  },
];

const clients = ["Broadbank Infraco", "IRBA", "Lundstar", "Ngutyana Pty Ltd"];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Infrastructure construction site"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div initial="hidden" animate="visible" className="max-w-2xl">
            <motion.div
              custom={0}
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6"
            >
              <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">
                100% South African Owned
              </span>
            </motion.div>
            <motion.h1
              custom={1}
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-[1.1] mb-6"
            >
              Building Sustainable Infrastructure for a{" "}
              <span className="text-secondary">Better Tomorrow</span>
            </motion.h1>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-xl"
            >
              Expert Civil Engineering, Construction, Logistics and Power Backup
              Installation solutions — delivering excellence across South Africa
              since 2017.
            </motion.p>
            <motion.div
              custom={3}
              variants={fadeUp}
              className="flex flex-wrap gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-orange-dark text-base px-8"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-secondary text-secondary-foreground hover:bg-orange-dark text-base px-8"
              >
                <Link to="/services">View Our Services</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-6">
              A Trusted Partner in{" "}
              <span className="text-secondary">Infrastructure</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Thulanyathi Pty LTD is a 100% South African owned company focused
              on innovation, integrity, and excellence. Since 2017, we have been
              delivering sustainable, efficient, and cost-effective
              infrastructure and logistics solutions that contribute to
              community development and job creation.
            </p>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <Link to="/about">
                Learn More About Us <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
              What We Do
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Our Core Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <Link
                  to={service.link}
                  className="group block p-6 rounded-lg border border-border bg-card hover:border-secondary/50 hover:shadow-lg transition-all duration-300 h-full"
                >
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <service.icon className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                  <span className="mt-4 inline-flex items-center text-sm font-medium text-secondary opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="ml-1 h-3 w-3" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
              Our Advantages
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Why Choose Thulanyathi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6"
              >
                <div className="h-14 w-14 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
                  <r.icon className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{r.title}</h3>
                <p className="text-sm text-primary-foreground/70">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients Preview */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">
              Trusted By
            </p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
              Our Valued Clients
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clients.map((client) => (
              <div
                key={client}
                className="flex items-center justify-center p-8 rounded-lg border border-border bg-card hover:shadow-md transition-shadow"
              >
                <span className="font-heading font-bold text-lg text-foreground/70 text-center">
                  {client}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-primary p-10 md:p-16 text-center"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">
                Ready to Build Together?
              </h2>
              <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
                Partner with Thulanyathi for your next infrastructure,
                construction, or logistics project. Let's create something that
                lasts.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-orange-dark text-base px-10"
              >
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
