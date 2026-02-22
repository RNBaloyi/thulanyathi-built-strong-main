import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HardHat, Building2, Truck, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const servicesData = [
  {
    id: "civil-engineering",
    icon: HardHat,
    title: "Civil Engineering",
    desc: "We specialise in delivering high-quality civil engineering solutions, with a strong focus on safety, sustainability, and precision. From road networks to earthworks, our team ensures every project meets the highest standards.",
    offerings: [
      "Road construction and surfacing",
      "Earthworks and land preparation",
      "Drainage and stormwater management",
      "Project planning and site assessment",
      "Focus on safety, quality and sustainability",
    ],
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction",
    desc: "Our construction division delivers residential, commercial, and industrial projects with meticulous attention to detail. We bring precision and craftsmanship to every build, ensuring structures that stand the test of time.",
    offerings: [
      "Residential structures and housing",
      "Commercial buildings and offices",
      "Industrial projects and warehouses",
      "Renovations and refurbishments",
      "Emphasis on precision and craftsmanship",
    ],
  },
  {
    id: "logistics",
    icon: Truck,
    title: "Logistics",
    desc: "Thulanyathi's logistics division provides reliable local and regional freight transport services. We specialise in moving construction materials and heavy equipment safely and on time.",
    offerings: [
      "Local and regional freight transport",
      "Heavy-duty transport for construction materials",
      "Equipment hauling and relocation",
      "Fleet management and route optimisation",
      "Focus on reliability and on-time delivery",
    ],
  },
  {
    id: "power-backup",
    icon: Zap,
    title: "Power Backup Installation",
    desc: "We provide tailored power backup solutions for homes and businesses, ensuring uninterrupted energy supply. From generators to inverter systems, we design and install reliable power solutions for any need.",
    offerings: [
      "Backup power systems for homes",
      "Commercial and industrial power solutions",
      "Generator installation and maintenance",
      "Inverter and UPS systems",
      "Emphasis on reliability and uninterrupted power",
    ],
  },
];

const Services = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Our Services</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Comprehensive Solutions for <span className="text-secondary">Every Challenge</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              From civil engineering to power backup installation, we deliver end-to-end infrastructure and logistics solutions with precision, reliability, and a commitment to excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Sections */}
      {servicesData.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 ${i % 2 === 1 ? "bg-section-alt" : ""}`}
        >
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid md:grid-cols-2 gap-12 items-start"
            >
              <div>
                <div className="h-14 w-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                  <service.icon className="h-7 w-7 text-secondary" />
                </div>
                <h2 className="text-3xl font-extrabold text-foreground mb-4">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{service.desc}</p>
                <Button asChild className="bg-secondary text-secondary-foreground hover:bg-orange-dark">
                  <Link to="/contact">Request a Quote <ArrowRight className="ml-2 h-4 w-4" /></Link>
                </Button>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <h3 className="font-bold text-foreground mb-4">Key Offerings</h3>
                <ul className="space-y-3">
                  {service.offerings.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Need a Customised Solution?</h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Every project is unique. Contact us to discuss your specific requirements and let us tailor a solution that fits.
            </p>
            <Button asChild size="lg" className="bg-secondary text-secondary-foreground hover:bg-orange-dark px-10">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
