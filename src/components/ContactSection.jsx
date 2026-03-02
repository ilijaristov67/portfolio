import {Facebook, Github, Instagram, Linkedin, Mail, MapPin, Phone, Send} from "lucide-react";
import {cn} from "@/lib/utils.js";
import { toast } from "sonner";
import {useState} from "react";

export const ContactSection = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            await fetch("/", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: new URLSearchParams({
                    "form-name": "contact",
                    ...Object.fromEntries(formData),
                }).toString(),
            });

            toast.success("Message sent!", {
                description: "I’ll get back to you soon.",
                duration: 4000,
            });

            form.reset();
        } catch {
            toast.error("Something went wrong.", {
                description: "Please try again later.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };


  return <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
  >
    <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">
            Touch
      </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out. I am always open to discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">
                    Contact Information
                </h3>
                <div className="space-y-6 justify-center">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary"/> {" "}
                        </div>
                        <div>
                            <h4 className="font-medium ">
                                Email
                            </h4>
                            <a href="mailto:ilijaristov67@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                ilijaristov67@gmail.com
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary"/> {" "}
                        </div>
                        <div>
                            <h4 className="font-medium ">
                                Phone
                            </h4>
                            <a href="tel:+38978318835" className="text-muted-foreground hover:text-primary transition-colors">
                                +389 78 318 835
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary"/> {" "}
                        </div>
                        <div>
                            <h4 className="font-medium ">
                                Location
                            </h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Las Vegas, Nevada
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8">
                    <h4 className="font-mediummb-4">
                        Connect With Me
                    </h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="https://www.instagram.com/ristov__i/" target="_blank">
                            <Instagram/>

                        </a>
                        <a href="https://www.facebook.com/ile.ristov1/" target="_blank">
                            <Facebook/>
                        </a>
                        <a href="https://www.linkedin.com/in/ilija-ristov-a36a77208/">
                            <Linkedin/>
                        </a>
                        <a href="https://github.com/ilijaristov67" target="_blank">
                            <Github/>
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-card p-8 rounded-lg shadow-xs">
                <h3 className="text-2xl font-semibold mb-6">
                    Send a Message
                </h3>
                <form
                    name="contact"
                    method="POST"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                >
                    <input type="hidden" name="form-name" value="contact" />
                    <p className="hidden">
                        <label>
                            Don’t fill this out: <input name="bot-field" />
                        </label>
                    </p>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Your Name..."
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Your Email..."
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                            placeholder="Hello, I would like to talk about..."
                        />
                    </div>
                    <button type="submit" disabled={isSubmitting} className={cn("cosmic-btn w-full flex items-center justify-center gap-2"
                    )}>
                        Send Message
                        <Send size={16}/>
                    </button>
                </form>
            </div>
        </div>
    </div>
  </section>;
};
