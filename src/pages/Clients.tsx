import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import Layout from "@/components/Layout";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const clientsData = [
  {
    name: "Broadbank Infraco",
    desc: "A strategic partner in telecommunications infrastructure. We have collaborated on multiple projects delivering fibre and network infrastructure across key regions.",
  },
  {
    name: "IRBA",
    desc: "Thulanyathi has supported the Independent Regulatory Board for Auditors with reliable logistics and infrastructure services, demonstrating our capability in government-adjacent projects.",
  },
  {
    name: "Lundstar",
    desc: "Our partnership with Lundstar reflects our commitment to delivering construction and civil engineering solutions that meet the highest commercial standards.",
  },
  {
    name: "Ngutyana Pty Ltd",
    desc: "A valued collaborator in the construction sector. Together, we have successfully delivered projects that contribute to local development and economic growth.",
  },
];

const Clients = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-secondary mb-3">Our Clients</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
              Partnerships Built on <span className="text-secondary">Trust</span>
            </h1>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              We are proud to work with leading organisations across South Africa. Our clients trust us to deliver reliable, high-quality infrastructure and logistics solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {clientsData.map((client, i) => (
              <motion.div
                key={client.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.5 } },
                }}
                className="p-8 rounded-lg border border-border bg-card hover:shadow-lg transition-shadow"
              >
                <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                  <Handshake className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{client.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{client.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 bg-section-alt">
        <div className="container text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our track record of successful project delivery and client satisfaction speaks for itself. We approach every partnership with integrity, professionalism, and a commitment to exceeding expectations.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Clients;
