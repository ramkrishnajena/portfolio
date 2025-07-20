import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Smartphone, Database, Globe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB featuring real-time inventory management, secure payments, and admin dashboard.",
      image: "/placeholder.svg",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      icon: Globe
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/placeholder.svg",
      technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Frontend",
      icon: Smartphone
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization dashboard with interactive charts, real-time metrics, and customizable widgets for business intelligence.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "D3.js", "Chart.js", "MongoDB"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      icon: Database
    },
    {
      title: "Social Media API",
      description: "RESTful API for social media platform with authentication, file uploads, real-time messaging, and content moderation.",
      image: "/placeholder.svg",
      technologies: ["Node.js", "Express", "JWT", "Cloudinary"],
      github: "https://github.com",
      live: null,
      category: "Backend",
      icon: Code
    },
    {
      title: "Weather Forecast App",
      description: "Weather application with location-based forecasts, interactive maps, and weather alerts using external APIs.",
      image: "/placeholder.svg",
      technologies: ["React", "OpenWeather API", "Leaflet", "PWA"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Frontend",
      icon: Globe
    },
    {
      title: "Blog CMS",
      description: "Content management system for blogs with markdown editor, SEO optimization, and comment system.",
      image: "/placeholder.svg",
      technologies: ["Next.js", "MDX", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com",
      category: "Full-Stack",
      icon: Code
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

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={projectVariants}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="h-full card-gradient card-shadow hover:hover-shadow transition-all duration-300 border-0 overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <project.icon className="w-16 h-16 text-primary/60" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs bg-primary/5 border-primary/20 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                    {project.live && (
                      <Button 
                        size="sm" 
                        className="flex-1 hero-gradient glow-effect"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Button 
            variant="outline" 
            size="lg"
            className="font-semibold px-8 py-3 rounded-full border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            asChild
          >
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;