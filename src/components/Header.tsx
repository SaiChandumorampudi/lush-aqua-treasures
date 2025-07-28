import { Search, ShoppingCart, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background shadow-soft sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-nature-gradient rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">GP</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Garden Paradise</h1>
              <p className="text-xs text-muted-foreground">Nurturing Life, Creating Beauty</p>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input 
                placeholder="Search plants, aquarium supplies, gifts..." 
                className="pl-10 pr-4 py-2 w-full rounded-full border-2 border-primary/20 focus:border-primary"
              />
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <User className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex border-t border-border py-4">
          <div className="flex space-x-8">
            <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium">
              🌱 Gardening
            </Button>
            <Button variant="ghost" className="text-secondary hover:text-secondary/80 font-medium">
              🐠 Aquarium
            </Button>
            <Button variant="ghost" className="text-gift hover:text-gift/80 font-medium">
              🎁 Gifts
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
              About
            </Button>
            <Button variant="ghost" className="text-foreground hover:text-primary font-medium">
              Contact
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;