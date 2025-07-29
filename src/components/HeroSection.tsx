import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-garden-paradise.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white via-white/95 to-white/90 bg-clip-text text-transparent drop-shadow-2xl">
            Welcome to Garden Paradise
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/95 drop-shadow-lg font-light leading-relaxed">
            Your one-stop shop for gardening, aquariums, and thoughtful gifts. 
            Nurturing life and creating beauty in every home.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              🌱 Shop Gardens
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              🐠 Explore Aquariums
            </Button>
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              🎁 Find Perfect Gifts
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full p-1">
          <div className="w-1 h-3 bg-white rounded-full mx-auto animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;