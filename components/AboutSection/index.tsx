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
    <section id="contact" className="scroll-mt-24 pb-8">
      <p className="section-eyebrow">Contact</p>
      <h2 className="section-title">같이 만들 일이 있다면 편하게 연락 주세요.</h2>
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
