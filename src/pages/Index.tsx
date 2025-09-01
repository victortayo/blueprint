import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";
import OrderBuilder from "@/components/OrderBuilder";
import ColorSwatch from "@/components/ColorSwatch";

// Import images
import heroImage from "@/assets/hero-image.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";

const colors = [
  { name: "Light Yellow", value: "#FFE135" },
  { name: "Sky Blue", value: "#87CEEB" },
  { name: "Pink", value: "#FFC0CB" },
  { name: "Dark Gray", value: "#696969" },
  { name: "Dark Green", value: "#006400" },
  { name: "White", value: "#FFFFFF" },
  { name: "Purple", value: "#800080" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Light Gray", value: "#D3D3D3" },
  { name: "Green", value: "#008000" },
  { name: "Brown", value: "#A0522D" },
  { name: "Light Green", value: "#90EE90" },
  { name: "Red", value: "#FF0000" },
  { name: "Orange", value: "#FFA500" },
  { name: "Light Blue", value: "#ADD8E6" },
  { name: "Maroon", value: "#800000" },
  { name: "Light Pink", value: "#FFB6C1" },
  { name: "Blue", value: "#0000FF" },
  { name: "Pale Pink", value: "#FADADD" },
  { name: "Coral", value: "#FF7F50" }
];

const prices = [
  { type: "Round Neck", price: "₦4,000" },
  { type: "V-Neck", price: "₦4,200" },
  { type: "Round Neck (XXL)", price: "₦4,200" },
  { type: "Round Neck (3XL)", price: "₦4,500" },
  { type: "Kids Round Neck", price: "₦3,000" },
  { type: "Kids V-Neck", price: "₦3,200" }
];

const Index = () => {
  const scrollToOrderBuilder = () => {
    document.getElementById('order-builder')?.scrollIntoView({ behavior: 'smooth' });
  };

  const openWhatsApp = () => {
    window.open('https://wa.me/2348000000000', '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-primary">blueprint</div>
            <Button 
              onClick={openWhatsApp}
              variant="outline" 
              size="sm"
              className="flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              Contact
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Perfect Plain Tee.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Vibrant colors. Unbeatable comfort. For everyone.
          </p>
          <Button 
            onClick={scrollToOrderBuilder}
            className="btn-hero text-xl px-10 py-6"
          >
            Build Your Order
          </Button>
        </div>
      </section>

      {/* Lookbook Gallery */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Blueprint
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See how our perfect plain tees fit into every moment of your life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[lookbook1, lookbook2, lookbook3, lookbook4].map((image, index) => (
              <div 
                key={index}
                className="group overflow-hidden rounded-2xl card-soft transform hover:scale-105 transition-all duration-300"
              >
                <img
                  src={image}
                  alt={`Lookbook ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Builder */}
      <OrderBuilder />

      {/* Pricing and Colors */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our Palette & Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Premium quality at accessible prices
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Pricing */}
            <Card className="card-soft p-8">
              <h3 className="text-2xl font-semibold mb-6">Pricing</h3>
              <div className="space-y-4">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                    <span className="font-medium">{item.type}</span>
                    <span className="text-lg font-bold text-primary">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Colors */}
            <Card className="card-soft p-8">
              <h3 className="text-2xl font-semibold mb-6">Available Colors</h3>
              <div className="grid grid-cols-5 gap-4">
                {colors.map((color) => (
                  <div key={color.name} className="text-center">
                    <ColorSwatch
                      colorName={color.name}
                      colorValue={color.value}
                      isSelected={false}
                      onClick={() => {}}
                    />
                    <p className="text-xs text-muted-foreground mt-2 leading-tight">
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4 text-primary">blueprint</h3>
            <p className="text-background/80 mb-6">
              Quality plain tees for every moment of your life
            </p>
            <div className="flex justify-center gap-4">
              <Button 
                onClick={openWhatsApp}
                variant="secondary"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Us on WhatsApp
              </Button>
              <Button 
                variant="outline"
                className="flex items-center gap-2 border-background/20 text-background hover:bg-background hover:text-foreground"
              >
                <Instagram className="w-4 h-4" />
                Follow Us
              </Button>
            </div>
          </div>
          
          <div className="border-t border-background/20 pt-8">
            <p className="text-background/60">
              © 2025 blueprint. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;