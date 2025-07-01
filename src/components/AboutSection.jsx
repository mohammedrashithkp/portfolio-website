import { Bot, Briefcase, Code, Package, Terminal, User } from "lucide-react";

export const AboutSection = () => {

    return (<section id="about" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">Emerging Robotics Developer & Mechanical Engineering Student</h3>
                    <p className="text-muted-foreground">
                        I design and build robotics projects that combine mechanical design, ROS2 development, and Linux workflows.
                        From academic teams to national competitions, I enjoy creating systems that work beautifully and reliably.</p>
                    <p className="text-muted-foreground">I’m passionate about turning ideas into practical technology that makes an impact.
                        Curious by nature, I’m always exploring new tools to stay ahead in robotics and automation.</p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button"> Get In Touch
                        </a>
                        <a
                            href="/LuxSleek_CV.pdf" className="px-6 py-2 rounded-full border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            Download CV
                        </a>

                    </div>

                </div>



                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Bot className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Robotics Development</h4>
                                <p className="text-muted-foreground">
                                    Designing, simulating, and building robotic systems with ROS2, SolidWorks, and Python.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Terminal className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Automation & Scripting</h4>
                                <p className="text-muted-foreground">
                                    Creating efficient workflows and automation tools on Linux to streamline development processes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Package className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Mechanical Design & Simulation</h4>
                                <p className="text-muted-foreground">
                                    Developing CAD models and performing structural and kinematic analysis for reliable prototypes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );
};