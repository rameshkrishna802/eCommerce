import mongoose from "mongoose";
import Product from "./models/Product.js";

const MONGODB_URI = "mongodb://localhost:27017/ecommerce";

const products = [
  {
    title: "Hybrid Tomato Seeds",
    description: "High yield hybrid tomato seeds suitable for all seasons.",
    price: 120,
    category: "Seeds",
    stock: 150,
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1b8b2"
  },
  {
    title: "Organic Chili Seeds",
    description: "Premium quality chili seeds with high germination rate.",
    price: 90,
    category: "Seeds",
    stock: 200,
    image: "https://images.unsplash.com/photo-1583666303053-5a3c7b4e62a3"
  },
  {
    title: "Brinjal Seeds",
    description: "Disease resistant brinjal seeds for better yield.",
    price: 80,
    category: "Seeds",
    stock: 180,
    image: "https://images.unsplash.com/photo-1615485737651-b6d6f2d14a3c"
  },
  {
    title: "Cabbage Seeds",
    description: "Fast growing cabbage seeds ideal for winter farming.",
    price: 100,
    category: "Seeds",
    stock: 140,
    image: "https://images.unsplash.com/photo-1572449043416-55f4685c1bb5"
  },
  {
    title: "Carrot Seeds",
    description: "Sweet and crunchy carrot seeds for healthy crops.",
    price: 70,
    category: "Seeds",
    stock: 170,
    image: "https://images.unsplash.com/photo-1582515073490-dc1a7d5bdb0c"
  },

  {
    title: "Urea Fertilizer",
    description: "Nitrogen rich fertilizer for boosting crop growth.",
    price: 350,
    category: "Fertilizer",
    stock: 100,
    image: "https://images.unsplash.com/photo-1620207418302-439b387441b0"
  },
  {
    title: "DAP Fertilizer",
    description: "Provides phosphorus and nitrogen to plants.",
    price: 450,
    category: "Fertilizer",
    stock: 90,
    image: "https://images.unsplash.com/photo-1603425526960-f7e0328c63b1"
  },
  {
    title: "Vermicompost",
    description: "Organic fertilizer made from earthworms.",
    price: 250,
    category: "Fertilizer",
    stock: 120,
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae"
  },
  {
    title: "Potash Fertilizer",
    description: "Improves plant resistance and crop quality.",
    price: 380,
    category: "Fertilizer",
    stock: 85,
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
  },
  {
    title: "Organic Bio Fertilizer",
    description: "Eco friendly fertilizer for sustainable farming.",
    price: 300,
    category: "Fertilizer",
    stock: 130,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
  },

  {
    title: "Neem Oil Pesticide",
    description: "Natural pesticide to control insects and pests.",
    price: 220,
    category: "Pesticide",
    stock: 110,
    image: "https://images.unsplash.com/photo-1615486368053-8f4b6bde3d0c"
  },
  {
    title: "Insect Killer Spray",
    description: "Effective spray for eliminating harmful insects.",
    price: 260,
    category: "Pesticide",
    stock: 95,
    image: "https://images.unsplash.com/photo-1605007493699-af65834f8a1c"
  },
  {
    title: "Fungicide Spray",
    description: "Protects plants from fungal diseases.",
    price: 310,
    category: "Pesticide",
    stock: 80,
    image: "https://images.unsplash.com/photo-1592928302687-5dbf7c2d4b3c"
  },
  {
    title: "Herbicide Solution",
    description: "Controls unwanted weeds effectively.",
    price: 280,
    category: "Pesticide",
    stock: 90,
    image: "https://images.unsplash.com/photo-1598514982831-6c4d2c7c9b09"
  },
  {
    title: "Organic Pest Control Spray",
    description: "Safe pest control for vegetables and fruits.",
    price: 240,
    category: "Pesticide",
    stock: 105,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
  },

  {
    title: "Drip Irrigation Kit",
    description: "Efficient irrigation system for farms.",
    price: 1200,
    category: "Farming Tools",
    stock: 40,
    image: "https://images.unsplash.com/photo-1581091870627-3d3c8c7a9c3e"
  },
  {
    title: "Garden Water Sprayer",
    description: "Hand sprayer for watering plants and crops.",
    price: 450,
    category: "Farming Tools",
    stock: 60,
    image: "https://images.unsplash.com/photo-1589927986089-35812388d1f4"
  },
  {
    title: "Soil Testing Kit",
    description: "Check soil nutrients and pH levels easily.",
    price: 850,
    category: "Farming Tools",
    stock: 55,
    image: "https://images.unsplash.com/photo-1598514982831-6c4d2c7c9b09"
  },
  {
    title: "Hand Cultivator",
    description: "Useful tool for loosening soil and removing weeds.",
    price: 320,
    category: "Farming Tools",
    stock: 70,
    image: "https://images.unsplash.com/photo-1592928302636-c83cf1e1b8b2"
  },
  {
    title: "Pruning Shears",
    description: "Sharp tool for trimming plants and branches.",
    price: 400,
    category: "Farming Tools",
    stock: 65,
    image: "https://images.unsplash.com/photo-1615485737651-b6d6f2d14a3c"
  },

  {
    title: "Rice Seeds",
    description: "High quality rice seeds for better harvest.",
    price: 150,
    category: "Seeds",
    stock: 200,
    image: "https://images.unsplash.com/photo-1603048719539-1b7bdf8b7cb5"
  },
  {
    title: "Wheat Seeds",
    description: "Premium wheat seeds for large scale farming.",
    price: 140,
    category: "Seeds",
    stock: 190,
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854"
  },
  {
    title: "Corn Seeds",
    description: "Hybrid corn seeds for high productivity.",
    price: 160,
    category: "Seeds",
    stock: 170,
    image: "https://images.unsplash.com/photo-1598515214211-89d3c8b2f43c"
  },
  {
    title: "Sunflower Seeds",
    description: "Oil rich sunflower seeds for cultivation.",
    price: 130,
    category: "Seeds",
    stock: 180,
    image: "https://images.unsplash.com/photo-1508747703725-719777637510"
  },
  {
    title: "Groundnut Seeds",
    description: "Best quality groundnut seeds for farming.",
    price: 145,
    category: "Seeds",
    stock: 175,
    image: "https://images.unsplash.com/photo-1615485737651-b6d6f2d14a3c"
  }
];

async function seedProducts() {
  try {
    await mongoose.connect(MONGODB_URI);

    await Product.deleteMany();

    await Product.insertMany(products);

    console.log("25 Agriculture products inserted successfully");

    mongoose.connection.close();
  } catch (error) {
    console.log(error);
  }
}

seedProducts();