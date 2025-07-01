import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    // CAD & Mechanical
    { name: "SolidWorks", level: 85, category: "mechanical" },
    { name: "Ansys", level: 70, category: "mechanical" },
    { name: "Fusion360", level: 85, category: "mechanical" },
    { name: "Mastercam", level: 75, category: "mechanical" },

    // Frontend
    { name: "HTML/CSS", level: 85, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },
    { name: "Figma", level: 65, category: "frontend" },
    { name: "Flutter", level: 60, category: "frontend" },
    { name: "Streamlit", level: 90, category: "frontend" },

    // Backend
    { name: "Flask", level: 80, category: "backend" },
    { name: "MySQL", level: 70, category: "backend" },
    { name: "SQLite", level: 65, category: "backend" },

    // DevOps & Tools
    { name: "GitHub", level: 95, category: "devops" },
    { name: "Git", level: 90, category: "devops" },
    { name: "Linux", level: 90, category: "devops" },
    { name: "Bash", level: 80, category: "devops" },
    { name: "Asana", level: 70, category: "devops" },

    // Robotics & Simulation
    { name: "ROS2", level: 85, category: "robotics" },
    { name: "Gazebo/Rviz2", level: 75, category: "robotics" },
    { name: "MATLAB", level: 65, category: "robotics" },
    { name: "OpenCV", level: 80, category: "robotics" },


    // Data & Machine Learning
    { name: "PyTorch", level: 70, category: "data" },
    { name: "Scikit-learn", level: 75, category: "data" },
    { name: "Pandas", level: 70, category: "data" },
    { name: "scikit-image", level: 60, category: "data" },
    { name: "TensorFlow", level: 65, category: "data" },

    // Desktop & Scripting
    { name: "PyQt", level: 60, category: "desktop" },
    { name: "Pygame", level: 60, category: "desktop" },
    { name: "Selenium", level: 70, category: "desktop" },


];
const categories = [
    "all", "mechanical",
    "frontend",
    "backend",
    "devops",
    "robotics",
    "data",
    "desktop"

];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter(
        (skill) => activeCategory == "all" || skill.category == activeCategory);
    return (
        <section id="skills"
            className="py-24 px-4 relative bg-secondary/30">

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory == category ? "bg-primary text-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                            )}
                        >{category}</button>
                    )
                    )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div
                            key={key}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">
                                    {skill.name}
                                </h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    );
};