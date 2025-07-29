import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  description: string;
  image: string;
  buttonText: string;
  buttonVariant: "nature" | "water" | "gift";
  features: string[];
}

const CategoryCard = ({ title, description, image, buttonText, buttonVariant, features }: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden hover:shadow-floating transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1 backdrop-blur-sm border-2 border-white/10">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{title}</h3>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        
        <ul className="space-y-2 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-foreground">
              <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
              {feature}
            </li>
          ))}
        </ul>
        
        <Button variant={buttonVariant} className="w-full" size="lg">
          {buttonText}
        </Button>
      </div>
    </Card>
  );
};

export default CategoryCard;