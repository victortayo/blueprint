import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Minus, Plus, ShoppingBag, MessageCircle } from "lucide-react";
import ColorSwatch from "./ColorSwatch";

interface OrderItem {
  type: string;
  size: string;
  color: string;
  colorValue: string;
  quantity: number;
  price: number;
}

interface ColorOption {
  name: string;
  value: string;
}

const colors: ColorOption[] = [
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

const tshirtTypes = [
  { name: "Round Neck", price: 4000 },
  { name: "V-Neck", price: 4200 },
  { name: "Round Neck (XXL)", price: 4200 },
  { name: "Round Neck (3XL)", price: 4500 },
  { name: "Kids Round Neck", price: 3000 },
  { name: "Kids V-Neck", price: 3200 }
];

const sizes = ["S", "M", "L", "XL", "XXL", "3XL"];

const OrderBuilder = () => {
  const [selectedType, setSelectedType] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedColorValue, setSelectedColorValue] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  const handleColorSelect = (colorName: string, colorValue: string) => {
    setSelectedColor(colorName);
    setSelectedColorValue(colorValue);
  };

  const addToOrder = () => {
    if (!selectedType || !selectedSize || !selectedColor) return;

    const typeInfo = tshirtTypes.find(t => t.name === selectedType);
    if (!typeInfo) return;

    const newItem: OrderItem = {
      type: selectedType,
      size: selectedSize,
      color: selectedColor,
      colorValue: selectedColorValue,
      quantity: quantity,
      price: typeInfo.price * quantity
    };

    setOrderItems([...orderItems, newItem]);
    
    // Reset form
    setSelectedType("");
    setSelectedSize("");
    setSelectedColor("");
    setSelectedColorValue("");
    setQuantity(1);
  };

  const removeFromOrder = (index: number) => {
    setOrderItems(orderItems.filter((_, i) => i !== index));
  };

  const generateWhatsAppMessage = () => {
    const orderText = orderItems.map((item, index) => 
      `${index + 1}. ${item.quantity}x ${item.type} - ${item.size} - ${item.color} (₦${item.price.toLocaleString()})`
    ).join('\n');
    
    const total = orderItems.reduce((sum, item) => sum + item.price, 0);
    
    const message = `Hello blueprint! I'd like to place the following order:\n\n${orderText}\n\nTotal: ₦${total.toLocaleString()}\n\nThank you!`;
    
    const whatsappUrl = `https://wa.me/2348000000000?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const canAddToOrder = selectedType && selectedSize && selectedColor && quantity > 0;

  return (
    <section id="order-builder" className="py-16 px-4 bg-gradient-subtle">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Create Your Perfect Pack</h2>
          <p className="text-lg text-muted-foreground">Select your t-shirts and build your order</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <Card className="card-soft p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <ShoppingBag className="w-6 h-6 text-primary" />
              Item Selector
            </h3>
            
            <div className="space-y-6">
              {/* T-Shirt Type */}
              <div>
                <label className="block text-sm font-medium mb-2">T-Shirt Type</label>
                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select t-shirt type" />
                  </SelectTrigger>
                  <SelectContent>
                    {tshirtTypes.map((type) => (
                      <SelectItem key={type.name} value={type.name}>
                        {type.name} - ₦{type.price.toLocaleString()}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Size */}
              <div>
                <label className="block text-sm font-medium mb-2">Size</label>
                <Select value={selectedSize} onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select size" />
                  </SelectTrigger>
                  <SelectContent>
                    {sizes.map((size) => (
                      <SelectItem key={size} value={size}>
                        {size}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Color */}
              <div>
                <label className="block text-sm font-medium mb-2">Color</label>
                <div className="grid grid-cols-5 gap-2">
                  {colors.map((color) => (
                    <ColorSwatch
                      key={color.name}
                      colorName={color.name}
                      colorValue={color.value}
                      isSelected={selectedColor === color.name}
                      onClick={() => handleColorSelect(color.name, color.value)}
                    />
                  ))}
                </div>
                {selectedColor && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Selected: {selectedColor}
                  </p>
                )}
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-medium mb-2">Quantity</label>
                <div className="flex items-center gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-xl font-semibold min-w-[3ch] text-center">
                    {quantity}
                  </span>
                  <Button
                    type="button"
                    variant="outline"
                    size="icon"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <Button
                onClick={addToOrder}
                disabled={!canAddToOrder}
                className="w-full btn-hero"
              >
                Add to Order
              </Button>
            </div>
          </Card>

          {/* Order Summary */}
          <Card className="card-elevated p-8">
            <h3 className="text-2xl font-semibold mb-6">Order Summary</h3>
            
            {orderItems.length === 0 ? (
              <p className="text-muted-foreground text-center py-8">
                No items in your order yet. Start building your perfect pack!
              </p>
            ) : (
              <div className="space-y-4">
                {orderItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background rounded-lg border">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-6 h-6 rounded-full border border-border"
                        style={{ backgroundColor: item.colorValue }}
                      />
                      <div>
                        <p className="font-medium">
                          {item.quantity}x {item.type}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {item.size} • {item.color}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">₦{item.price.toLocaleString()}</p>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeFromOrder(index)}
                        className="text-destructive hover:text-destructive"
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span>₦{orderItems.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span>
                  </div>
                </div>

                <Button
                  onClick={generateWhatsAppMessage}
                  className="w-full btn-hero mt-6"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Place Order via WhatsApp
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </section>
  );
};

export default OrderBuilder;