import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitter, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
export const ContactSection = () => {

    const [isSubmitting, setIsSubmitting] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.target;
        const formData = new FormData(form);

        // Netlify requires the "form-name" field
        formData.append("form-name", "contact");

        try {
            await fetch("/", {
                method: "POST",
                body: formData,
            });

            toast({
                title: "Message sent!",
                description: "Thank you for your message. I'll get back to you soon.",
            });

            form.reset(); // Clear the form
        } catch (error) {
            console.error(error);
            toast({
                title: "Error",
                description: "Something went wrong. Please try again.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


    return (<section id="contact"
        className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-secondary">
                Get In <span className="text-primary"> Touch</span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto ">
                Have a project in mind or want to collaborate? Feel free to reach out.
                I'm always open to discussing new opportunities. </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                               <a href="mailto:mohammedrashithkp@gmail.com"
className = "card-hover"
	    > <Mail className="h-6 w-6  text-primary" />
            </a>                
	    </div>
                            <div>
                                <h4 className="font-medium"> Email</h4>
                                <a href="mailto:mohammedrashithkp@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                    mohammedrashithkp@gmail.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
	    <a href="tel:+918129766999" className="card-hover">
                                <Phone className="h-6 w-6  text-primary" />
	    </a>
                            </div>
                            <div>
                                <h4 className="font-medium"> Phone</h4>
                                <a href="tel:+918129766999" className="text-muted-foreground hover:text-primary transition-colors">
                                    +91 812 976 6999
                                </a>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6  text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium"> Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Malappuram, Kerala, India
                                </a>
                            </div>
                        </div>

                    </div>
                    <div className="pt-8">
                        <h4 className="font-medium mb-4"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://linkedin.com/in/mohammed-rashith-kp"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/charismatic_ninja/"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Instagram />
                            </a>
                            <a href="https://x.com/Charismatic_nin"
                                target="_blank"
                                rel="noopener noreferrer">
                                <Twitter />
                            </a>
                        </div>
                    </div>

                </div>
                <div className="bg-card p-8 rounded-lg shadow-xs" >
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    <form
                        className="space-y-6"
                        name="contact"
                        method="POST"
                        onSubmit={handleSubmit}
                        data-netlify-honeypot="bot-field"
                        data-netlify="true">
                        {/* Hidden field to trigger Netlify */}
                        <input type="hidden" name="form-name" value="contact" />
                        {/* Honeypot field */}
                        <p hidden>
                            <label>
                                Don’t fill this out: <input name="bot-field" />
                            </label>
                        </p>

                        <div>
                            <label htmlFor="name"
                                className="block text-sm font-medium mb-2"> Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="John Doe"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium mb-2"> Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                placeholder="johndoe@gmail.com"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium mb-2"> Your Message</label>
                            <textarea

                                id="message"
                                name="message"
                                required
                                className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                placeholder="Hello,I'd like to talk about ..."
                            />
                        </div>
	    <div data-netlify-recaptcha="true"></div>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={cn("cosmic-button w-full flex items-center justify-center gap-2",)}>
                            {isSubmitting ? "Sending..." : "Send Message"} <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>);
};
