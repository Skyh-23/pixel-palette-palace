import { useState } from "react";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", budget: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", company: "", budget: "", message: "" });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="font-pixel text-xl md:text-3xl text-center mb-4 text-foreground" style={{ textShadow: '3px 3px 0px rgba(0,0,0,0.3)' }}>
          LET'S BUILD TOGETHER
        </h2>
        <div className="flex justify-center mb-4">
          <div className="w-32 h-1 bg-neon-magenta border border-black" />
        </div>
        <p className="font-body text-sm text-center text-foreground/60 mb-16 max-w-xl mx-auto">
          Ready to turn your idea into reality? Fill out the form below and we'll get back to you within 24 hours with a free project estimate.
        </p>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Form - takes 3 cols */}
          <form onSubmit={handleSubmit} className="pixel-card p-6 space-y-4 md:col-span-3">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-pixel text-[8px] block mb-2 text-foreground">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none focus:border-neon-magenta"
                  style={{ background: '#eeffdd' }}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="font-pixel text-[8px] block mb-2 text-foreground">EMAIL *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none focus:border-neon-magenta"
                  style={{ background: '#eeffdd' }}
                  placeholder="john@company.com"
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="font-pixel text-[8px] block mb-2 text-foreground">COMPANY</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none focus:border-neon-magenta"
                  style={{ background: '#eeffdd' }}
                  placeholder="Your Company"
                />
              </div>
              <div>
                <label className="font-pixel text-[8px] block mb-2 text-foreground">BUDGET RANGE</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none focus:border-neon-magenta"
                  style={{ background: '#eeffdd' }}
                >
                  <option value="">Select range...</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>
            </div>
            <div>
              <label className="font-pixel text-[8px] block mb-2 text-foreground">PROJECT DETAILS *</label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 border-4 border-black font-body text-sm text-foreground outline-none resize-none focus:border-neon-magenta"
                style={{ background: '#eeffdd' }}
                placeholder="Tell us about your project, goals, and timeline..."
              />
            </div>
            <button type="submit" className="pixel-btn !text-[10px] !w-full !py-4 flex items-center justify-center gap-2">
              SEND MESSAGE <ArrowRight size={14} />
            </button>
            <p className="font-body text-[10px] text-foreground/40 text-center">
              Free consultation • No obligation • Response within 24 hours
            </p>
          </form>

          {/* Info - takes 2 cols */}
          <div className="space-y-4 md:col-span-2">
            <div className="pixel-card p-5">
              <Mail size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">EMAIL</p>
              <p className="font-body text-sm text-foreground/80">hello@liethueis.com</p>
            </div>
            <div className="pixel-card p-5">
              <Phone size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">PHONE</p>
              <p className="font-body text-sm text-foreground/80">+1 (555) 123-4567</p>
            </div>
            <div className="pixel-card p-5">
              <MapPin size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">LOCATION</p>
              <p className="font-body text-sm text-foreground/80">Remote-first, Worldwide</p>
            </div>
            <div className="pixel-card p-5">
              <Clock size={20} style={{ color: '#f500ff' }} className="mb-3" />
              <p className="font-pixel text-[8px] mb-1 text-foreground">AVAILABILITY</p>
              <p className="font-body text-sm text-foreground/80">Mon - Fri, 9AM - 6PM IST</p>
              <p className="font-body text-xs text-foreground/50 mt-1">Flexible for global clients</p>
            </div>

            {/* Quick FAQ */}
            <div className="pixel-card p-5">
              <p className="font-pixel text-[8px] mb-3" style={{ color: '#f500ff' }}>QUICK FAQ</p>
              <div className="space-y-3">
                <div>
                  <p className="font-body text-xs font-semibold text-foreground/80">How long does a project take?</p>
                  <p className="font-body text-xs text-foreground/50">Typically 4-12 weeks depending on scope.</p>
                </div>
                <div>
                  <p className="font-body text-xs font-semibold text-foreground/80">Do you offer maintenance?</p>
                  <p className="font-body text-xs text-foreground/50">Yes, all projects include 30 days free support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
