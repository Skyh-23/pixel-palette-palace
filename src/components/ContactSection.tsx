import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: integrate with backend
    alert("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          CONTACT US
        </h2>
        <div className="flex justify-center mb-16">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <form onSubmit={handleSubmit} className="pixel-card p-6 space-y-4">
            <div>
              <label className="font-pixel text-[8px] block mb-2 text-foreground">NAME</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full p-3 border-4 border-black bg-neon-green-lightest font-body text-sm text-foreground outline-none focus:border-neon-magenta"
                style={{ background: '#eeffdd' }}
              />
            </div>
            <div>
              <label className="font-pixel text-[8px] block mb-2 text-foreground">EMAIL</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none focus:border-neon-magenta"
                style={{ background: '#eeffdd' }}
              />
            </div>
            <div>
              <label className="font-pixel text-[8px] block mb-2 text-foreground">MESSAGE</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none resize-none focus:border-neon-magenta"
                style={{ background: '#eeffdd' }}
              />
            </div>
            <button type="submit" className="pixel-btn !text-[10px] !w-full !py-4">
              SEND MESSAGE
            </button>
          </form>

          {/* Info */}
          <div className="space-y-6">
            <div className="pixel-card p-6">
              <Mail size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">EMAIL</p>
              <p className="font-body text-sm text-foreground/80">hello@liethueis.com</p>
            </div>
            <div className="pixel-card p-6">
              <Phone size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">PHONE</p>
              <p className="font-body text-sm text-foreground/80">+1 (555) 123-4567</p>
            </div>
            <div className="pixel-card p-6">
              <MapPin size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">LOCATION</p>
              <p className="font-body text-sm text-foreground/80">Remote-first, Worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
