import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Portfolio Website",
        description: "Developed and deployed a personal portfolio using Hugo/Vite.js and Tailwind CSS.",
        githubUrl: "https://github.com/mohammedrashithkp/portfolio-website",
        DemoUrl: "#",
        image: "/projects/Portfolio-Website.png",
        tags: ["HTML", "CSS", "Vite", "Tailwind"]
    },
    {
        id: 2,
        title: "DRL Agent for Snake Game",
        description: "Built a Q-learning deep reinforcement learning agent with PyTorch to play Snake in a Pygame environment.",
        githubUrl: "https://github.com/mohammedrashithkp/DRLForSnakeGame",
        DemoUrl: "https://github.com/mohammedrashithkp/DRLForSnakeGame",
        image: "/projects/DRLBASEDSnakeGame.png",
        tags: ["Python", "PyTorch", "Pygame"],
    },
    {
        id: 3,
        title: "Movie Recommendation App",
        description: "Streamlit app using TMDB data to recommend movies based on text similarity and show posters.",
        githubUrl: "https://github.com/mohammedrashithkp/CB-Movie-Recommender",
        DemoUrl: 'https://cbmr-12.streamlit.app/',
        image: "/projects/CBMR.png",
        tags: ["Python", "Streamlit", "Machine Learning"],
    },
    {
        id: 4,
        title: "Fingerprint Attendance System",
        description: "Streamlit app for displaying and filtering fingerprint attendance data from Raspberry Pi.",
        githubUrl: "https://github.com/mohammedrashithkp/Fingerprint-Attendence-System",
        DemoUrl: "https://github.com/mohammedrashithkp/Fingerprint-Attendence-System",
        image: "/projects/fingerprint-attendance-system.png",
        tags: ["Python", "Streamlit", "Raspberry Pi"]
    },
    {
        id: 5,
        title: "ESP32 WEB MOTOR CONTROL",
        description: "Arduino control software and web interface for an adjustable hospital bed.",
        githubUrl: "https://github.com/mohammedrashithkp/esp32-web-motor-control.git",
        DemoUrl: 'https://github.com/mohammedrashithkp/esp32-web-motor-control.git',
        image: "/projects/esp32-motor-control.png",
        tags: ["Arduino", "HTML", "CSS", "Embedded"]
    },

    {
        id: 6,
        title: "Elephant Quadruped Robot Analysis",
        description: "Static and fatigue analysis of a quadruped robot leg using Ansys Structural Mechanical.",
        githubUrl: "https://github.com/mohammedrashithkp/elephant_quadruped_robot.git",
        DemoUrl: "https://github.com/mohammedrashithkp/elephant_quadruped_robot.git",
        image: "/projects/elephant_qr.png",
        tags: ["Ansys", "Mechanical Design", "Robotics"]
    },
    {
        id: 7,
        title: "Ros2 Installer Script",
        description: "Python package and Bash script for automated ROS 2 setup on Ubuntu-based systems, published to PyPI.",
        githubUrl: "https://github.com/mohammedrashithkp/ros2-installer.git",
        DemoUrl: 'https://pypi.org/project/ros2-installer/',
        image: "/projects/Ros2-installer.png",
        tags: ["ROS2", "Bash", "Linux", "Robotics"]
    },
    {
        id: 8,
        title: "Automatic Wi-Fi Auth Script",
        description: "Automated captive portal logins with Selenium for Linux and Windows.",
        githubUrl: "https://github.com/mohammedrashithkp/Automatic-WiFi-Auth",
        DemoUrl: 'https://github.com/mohammedrashithkp/Automatic-WiFi-Auth',
        image: "/projects/Wifi-Auth.png",
        tags: ["Python", "Selenium", "Automation"]
    },
    {
        id: 9,
        title: "Space Invaders Arcade Game",
        description: "Classic arcade-style shooter game developed in Python using Pygame.",
        githubUrl: "https://github.com/mohammedrashithkp/SpaceInvaders/tree/main",
        DemoUrl: 'https://github.com/mohammedrashithkp/SpaceInvaders/tree/main',
        image: "/projects/SpaceInvader.png",
        tags: ["Python", "Pygame"]
    },


];



export const ProjectsSection = () => {
    return (<section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                Featured <span className="text-primary">
                    Projects
                </span>
            </h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of my recent projects.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs cardhover">
                        {/* h-48 */}
                        <div className="h-48 w-full overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        </div>
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag) => (<span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                                    {tag}
                                </span>)

                                )}

                            </div>


                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.DemoUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                        <ExternalLink size={20} />
                                    </a>
                                    <a href={project.githubUrl}
                                        target="_blank"
                                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>


                ))}


            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2"
                    target="_blank"
                    href="https://www.github.com/mohammedrashithkp">
                    Check My Github <ArrowRight size={16} />
                </a>
            </div>
        </div>

    </section>);
}
