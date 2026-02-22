import { motion } from "framer-motion";
import { Target, Eye, Heart, Lightbulb, Star } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const values = [
  { icon: Heart, title: "Integrity", desc: "We conduct our business with honesty, transparency, and accountability in every interaction." },
  { icon: Lightbulb, title: "Innovation", desc: "We continuously seek smarter, more efficient ways to deliver infrastructure solutions." },
  { icon: Star, title: "Excellence", desc: "We hold ourselves to the highest standards of quality in every project we undertake." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">About Us</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Engineering Progress, <span className="text-secondary">Building Futures</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Since 2017, Thulanyathi Pty LTD has grown into a trusted name in South Africa's civil engineering, construction, logistics, and power backup sectors. We are 100% South African owned and deeply committed to developing our communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">Our Story</p>
              <h2 className="text-3xl font-extrabold text-foreground mb-6">Built on Strength and Purpose</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2017 by Mr M Mhlanga, Thulanyathi Pty LTD was established with a clear vision: to deliver sustainable, high-quality infrastructure solutions that uplift communities across South Africa.
                </p>
                <p>
                  Over the years, we have expanded our capabilities across civil engineering, construction, logistics, and power backup installation, consistently earning the trust of our clients through reliability, competitive pricing, and a deep commitment to excellence.
                </p>
                <p>
                  Today, Thulanyathi stands as a symbol of South African enterprise — driven by integrity, innovation, and the unwavering belief that strong infrastructure builds strong communities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { val: "2017", label: "Year Founded" },
                { val: "4", label: "Core Services" },
                { val: "100%", label: "SA Owned" },
                { val: "4+", label: "Key Clients" },
              ].map((stat) => (
                <div key={stat.label} className="p-6 rounded-lg bg-section-alt border border-border text-center">
                  <span className="text-3xl font-extrabold text-secondary">{stat.val}</span>
                  <span className="block text-sm text-muted-foreground mt-1">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-section-alt">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To deliver sustainable, efficient and cost-effective infrastructure and logistics solutions that contribute to community development and job creation in South Africa.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="p-8 rounded-lg bg-card border border-border">
              <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be a trusted leader in building sustainable infrastructure and delivering innovative solutions that uplift communities and empower progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-14">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-2">What We Stand For</p>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.5 } },
                }}
                className="text-center p-8"
              >
                <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center mx-auto mb-5">
                  <v.icon className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
