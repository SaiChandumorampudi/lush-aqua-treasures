import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-primary-light/20">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Connected with Nature</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get seasonal gardening tips, aquarium care guides, and exclusive offers delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button variant="secondary" size="lg">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-primary font-bold">GP</span>
              </div>
              <span className="text-xl font-bold">Garden Paradise</span>
            </div>
            <p className="text-primary-foreground/80 mb-4">
              Nurturing life and creating beauty in every home. Your trusted partner for gardening, aquariums, and thoughtful gifts.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Plant Care Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Aquarium Setup</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Gift Ideas</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Blog</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">Track Your Order</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">1-800-GARDEN-1</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">hello@gardenparadise.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-primary-foreground/60" />
                <span className="text-primary-foreground/80">123 Garden Lane, Green City</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-primary-light/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Garden Paradise. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;