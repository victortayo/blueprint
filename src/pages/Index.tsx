import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Instagram, MessageCircle } from "lucide-react";
import OrderBuilder from "@/components/OrderBuilder";
import ColorSwatch from "@/components/ColorSwatch";
import MediaGallery from "@/components/MediaGallery";

// Import images
import heroImage from "@/assets/hero-image.jpg";
import lookbook1 from "@/assets/lookbook-1.jpg";
import lookbook2 from "@/assets/lookbook-2.jpg";
import lookbook3 from "@/assets/lookbook-3.jpg";
import lookbook4 from "@/assets/lookbook-4.jpg";

// Media gallery items - mix of images and videos
const mediaItems = [
  { type: 'image' as const, src: lookbook1, alt: 'Vibrant tees in urban setting' },
  { type: 'image' as const, src: lookbook2, alt: 'Colorful tees in nature' },
  { type: 'image' as const, src: lookbook3, alt: 'Playful tee styling' },
  { type: 'image' as const, src: lookbook4, alt: 'Casual tee moments' },
  // Placeholder for future videos
  { type: 'image' as const, src: lookbook1, alt: 'Blueprint tee collection' },
  { type: 'image' as const, src: lookbook2, alt: 'Tee styling inspiration' },
  { type: 'image' as const, src: lookbook3, alt: 'Colorful fashion moments' },
  { type: 'image' as const, src: lookbook4, alt: 'Blueprint lifestyle' },
];

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
      {/* Colorful Header */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b border-primary/20 shadow-rainbow">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-3xl font-black bg-gradient-rainbow bg-clip-text text-transparent">
              blueprint
            </div>
            <Button 
              onClick={openWhatsApp}
              className="btn-cyan flex items-center gap-2 px-6 py-3 rounded-2xl font-semibold"
            >
              <MessageCircle className="w-5 h-5" />
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
        
        <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            <span className="block bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-pulse">
              The Perfect
            </span>
            <span className="block mt-4 bg-gradient-rainbow bg-clip-text text-transparent">
              Plain Tee.
            </span>
          </h1>
          <p className="text-2xl md:text-3xl mb-12 text-white/95 max-w-3xl mx-auto font-semibold">
            <span className="text-accent">Vibrant colors.</span>{" "}
            <span className="text-secondary">Unbeatable comfort.</span>{" "}
            <span className="text-tertiary">For everyone.</span>
          </p>
          <Button 
            onClick={scrollToOrderBuilder}
            className="btn-hero text-2xl px-12 py-8 font-black"
          >
            🚀 Build Your Order
          </Button>
        </div>
      </section>

      {/* Vibrant Media Gallery */}
      <section className="py-20 px-4 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-rainbow bg-clip-text text-transparent">
                Our Blueprint
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto font-semibold">
              See how our perfect plain tees create{" "}
              <span className="text-primary">colorful moments</span>,{" "}
              <span className="text-secondary">joyful experiences</span>, and{" "}
              <span className="text-tertiary">vibrant memories</span> in every part of your life
            </p>
          </div>
          
          <MediaGallery items={mediaItems} />
        </div>
      </section>

      {/* Order Builder */}
      <OrderBuilder />

      {/* Colorful Pricing and Colors */}
      <section className="py-20 px-4 bg-gradient-to-br from-secondary/10 via-primary/10 to-tertiary/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black mb-6">
              <span className="bg-gradient-accent bg-clip-text text-transparent">
                Our Palette &
              </span>{" "}
              <span className="text-quaternary">
                Pricing
              </span>
            </h2>
            <p className="text-xl text-muted-foreground font-semibold">
              🌈 Premium quality at accessible prices 💫
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Colorful Pricing */}
            <Card className="card-soft p-8 border-2 border-primary/20 shadow-cyan-glow">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-accent bg-clip-text text-transparent">
                💰 Pricing
              </h3>
              <div className="space-y-4">
                {prices.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-4 border-b border-primary/10 last:border-b-0 hover:bg-gradient-subtle transition-colors duration-300 rounded-lg px-2">
                    <span className="font-semibold text-foreground">{item.type}</span>
                    <span className="text-xl font-black bg-gradient-rainbow bg-clip-text text-transparent">{item.price}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Vibrant Colors */}
            <Card className="card-soft p-8 border-2 border-secondary/20 shadow-purple-glow">
              <h3 className="text-3xl font-bold mb-8 bg-gradient-rainbow bg-clip-text text-transparent">
                🎨 Available Colors
              </h3>
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

      {/* Colorful Footer */}
      <footer className="bg-gradient-to-br from-foreground via-foreground to-primary/20 text-background py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h3 className="text-4xl font-black mb-6 bg-gradient-rainbow bg-clip-text text-transparent">
              blueprint
            </h3>
            <p className="text-background/80 mb-6">
              Quality plain tees for every moment of your life
            </p>
            <div className="flex justify-center gap-6">
              <Button 
                onClick={openWhatsApp}
                className="btn-cyan flex items-center gap-3 px-8 py-4 text-lg font-semibold"
              >
                <MessageCircle className="w-5 h-5" />
                💬 Contact Us on WhatsApp
              </Button>
              <Button 
                className="btn-purple flex items-center gap-3 px-8 py-4 text-lg font-semibold"
              >
                <Instagram className="w-5 h-5" />
                📱 Follow Us
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