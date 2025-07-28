import CategoryCard from "./CategoryCard";
import gardeningImage from "@/assets/category-gardening.jpg";
import aquariumImage from "@/assets/category-aquarium.jpg";
import giftsImage from "@/assets/category-gifts.jpg";

const CategorySection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Explore Our Categories
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover everything you need to create beautiful gardens, thriving aquariums, 
            and find the perfect gifts for your loved ones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CategoryCard
            title="🌱 Gardening"
            description="Transform your space with our premium plants, tools, and gardening supplies. From beginner-friendly houseplants to professional equipment."
            image={gardeningImage}
            buttonText="Shop Gardening"
            buttonVariant="nature"
            features={[
              "Indoor & Outdoor Plants",
              "Professional Tools & Equipment",
              "Organic Soil & Fertilizers",
              "Planters & Containers"
            ]}
          />
          
          <CategoryCard
            title="🐠 Aquarium"
            description="Create stunning underwater worlds with our complete aquarium solutions. Perfect for beginners and experienced aquarists alike."
            image={aquariumImage}
            buttonText="Explore Aquariums"
            buttonVariant="water"
            features={[
              "Complete Tank Systems",
              "Tropical & Marine Fish",
              "Live Aquatic Plants",
              "Filters, Lighting & Heaters"
            ]}
          />
          
          <CategoryCard
            title="🎁 Gifts"
            description="Find thoughtful gifts that bring joy and beauty. Perfect for gardening enthusiasts, aquarium lovers, or anyone who appreciates nature."
            image={giftsImage}
            buttonText="Find Perfect Gifts"
            buttonVariant="gift"
            features={[
              "Curated Gift Sets",
              "Personalized Plant Pots",
              "Seasonal Collections",
              "Gift Cards Available"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default CategorySection;