import { Button } from "@web/components/ui/button";
import { Mail, ExternalLink } from "lucide-react";

const contacts = [
  {
    name: "Email",
    url: "mailto:bamin0422@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    url: "https://github.com/bamin0422",
    icon: ExternalLink,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/대인-민-7a8a0b143",
    icon: ExternalLink,
  },
];

export function AboutSection() {
  return (
    <section id="contact" className="pb-16">
      <h2 className="text-2xl font-bold tracking-tight mb-6">Contact</h2>
      <div className="flex flex-wrap gap-3">
        {contacts.map((contact) => (
          <Button key={contact.name} variant="outline" asChild>
            <a href={contact.url} target="_blank" rel="noopener noreferrer">
              <contact.icon className="mr-2 h-4 w-4" />
              {contact.name}
            </a>
          </Button>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
