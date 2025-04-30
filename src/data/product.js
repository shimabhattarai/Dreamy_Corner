export const dummyProducts = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    price: 29.99,
    description: "A comfortable and stylish t-shirt made from premium cotton.",
    detailedDescription:
      "This premium quality t-shirt is crafted from 100% organic cotton, providing exceptional comfort for all-day wear. The modern fit and reinforced seams ensure durability while maintaining a sleek silhouette. Available in multiple colors and sizes.",
    image: "/api/placeholder/300/300",
    images: [
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
      "/api/placeholder/500/500",
    ],
    colors: ["Black", "White", "Navy", "Red"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    rating: 4.5,
    ratingCount: 120,
    availability: true,
    features: [
      "100% premium cotton",
      "Reinforced seams",
      "Modern fit",
      "Machine washable",
      "Pre-shrunk fabric",
    ],
  },
  {
    id: 2,
    name: "Classic Denim Jeans",
    price: 59.99,
    description: "Classic denim jeans with a modern fit and premium quality.",
    image: "/api/placeholder/300/300",
    availability: true,
  },
  {
    id: 3,
    name: "Wireless Headphones",
    price: 89.99,
    description: "High-quality wireless headphones with noise cancellation.",
    image: "/api/placeholder/300/300",
    availability: true,
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 199.99,
    description:
      "Feature-rich smart watch with fitness tracking and notifications.",
    image: "/api/placeholder/300/300",
    availability: false,
  },
  {
    id: 5,
    name: "Laptop Backpack",
    price: 49.99,
    description:
      "Durable and water-resistant backpack with laptop compartment.",
    image: "/api/placeholder/300/300",
    availability: true,
  },
  {
    id: 6,
    name: "Coffee Maker",
    price: 79.99,
    description: "Programmable coffee maker with thermal carafe.",
    image: "/api/placeholder/300/300",
    availability: true,
  },
];
export default product;
