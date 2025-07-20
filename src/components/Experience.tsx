import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Frontend Developer",
      company: "Tech Solutions Inc.",
      location: "Remote",
      period: "2023 - Present",
      description: [
        "Led frontend development for a high-traffic e-commerce platform serving 100K+ users",
        "Implemented modern React patterns and TypeScript for improved code maintainability",
        "Collaborated with design team to create responsive, accessible user interfaces",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "GraphQL"]
    },
    {
      title: "Full-Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY",
      period: "2022 - 2023",
      description: [
        "Built and maintained multiple web applications using MERN stack",
        "Developed RESTful APIs and integrated third-party services",
        "Optimized application performance resulting in 40% faster load times",
        "Worked in agile environment with cross-functional teams"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Express", "AWS"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Agency Co.",
      location: "San Francisco, CA",
      period: "2021 - 2022",
      description: [
        "Developed responsive websites and web applications for various clients",
        "Collaborated with designers to implement pixel-perfect UI components",
        "Integrated CMSs and e-commerce platforms for client projects",
        "Maintained and updated existing client websites"
      ],
      technologies: ["JavaScript", "React", "CSS3", "Shopify", "WordPress"]
    },
    {
      title: "Junior Developer",
      company: "Web Development Studio",
      location: "Austin, TX",
      period: "2020 - 2021",
      description: [
        "Assisted in frontend development tasks and bug fixes",
        "Learned modern web development technologies and best practices",
        "Participated in code reviews and team knowledge sharing sessions",
        "Contributed to internal tools and documentation"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "jQuery", "Bootstrap"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const experienceVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through different roles and companies, building expertise in modern web development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                variants={experienceVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:gap-8`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <Card className="card-gradient card-shadow hover:hover-shadow transition-all duration-300 border-0">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className={`mb-4 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        <h3 className="text-xl font-bold text-foreground mb-1">
                          {experience.title}
                        </h3>
                        <p className="text-lg font-semibold text-primary mb-2">
                          {experience.company}
                        </p>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {experience.period}
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {experience.location}
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <ul className={`space-y-2 mb-4 text-muted-foreground ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                        {experience.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm leading-relaxed">
                            • {item}
                          </li>
                        ))}
                      </ul>

                      {/* Technologies */}
                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-16 pt-12 border-t border-border"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Ready for New Challenges</h3>
            <p className="text-muted-foreground mb-6">
              I'm always excited about new opportunities to work on innovative projects 
              and collaborate with talented teams. Let's build something amazing together!
            </p>
            <div className="flex items-center justify-center text-primary">
              <Briefcase className="w-5 h-5 mr-2" />
              <span className="font-medium">Open to new opportunities</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;