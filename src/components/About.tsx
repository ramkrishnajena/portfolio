import { motion } from "framer-motion";
import { Code, Database, Globe, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Expertise",
      description: "React, Next.js, TypeScript with modern UI libraries"
    },
    {
      icon: Database,
      title: "Backend Development",
      description: "Node.js, Express, MongoDB with scalable architecture"
    },
    {
      icon: Globe,
      title: "Full-Stack Solutions",
      description: "End-to-end application development and deployment"
    },
    {
      icon: Lightbulb,
      title: "AI Integration",
      description: "Exploring AI-powered features and automation"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold">
              Building the Future, One Line of Code at a Time
            </h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate MERN stack developer with 3+ years of experience 
                creating robust, scalable web applications. My journey in tech has been 
                driven by curiosity and a love for solving complex problems through elegant code.
              </p>
              
              <p>
                I specialize in modern frontend development with React and TypeScript, 
                while also building powerful backend systems with Node.js and MongoDB. 
                My focus is on creating user-centric applications that not only look great 
                but perform exceptionally.
              </p>
              
              <p>
                Currently exploring the intersection of web development and AI, 
                I'm always eager to integrate cutting-edge technologies into practical solutions 
                that make a real difference in users' lives.
              </p>
            </div>

            <motion.div
              className="pt-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <h4 className="font-semibold text-lg mb-3">What drives me:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Clean, maintainable, and scalable code architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  User experience and interface design excellence
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Continuous learning and adopting new technologies
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Building solutions that solve real-world problems
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((highlight, index) => (
              <motion.div key={index} variants={itemVariants}>
                <Card className="h-full card-gradient card-shadow hover:hover-shadow transition-all duration-300 border-0">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h4 className="font-semibold text-lg mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;