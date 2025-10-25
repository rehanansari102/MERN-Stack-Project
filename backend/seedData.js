const mongoose = require('mongoose');
const Staff = require('./models/Staff');
const Hotel = require('./models/Hotel');

// Connect to MongoDB
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/mern-task';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const seedData = async () => {
  try {
    // Clear existing data
    await Staff.deleteMany({});
    await Hotel.deleteMany({});

    // Seed Staff data
    const staffData = [
      {
        name: "Sarah Johnson",
        position: "Senior Travel Consultant",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        bio: "With over 10 years of experience in luxury travel, Sarah specializes in creating unforgettable experiences for discerning travelers.",
        experience: "10+ years",
        specialties: ["Luxury Travel", "European Destinations", "Adventure Tours"]
      },
      {
        name: "Michael Chen",
        position: "Hotel Relations Manager",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        bio: "Michael has built strong relationships with hotels worldwide and ensures our clients get the best accommodations and rates.",
        experience: "8+ years",
        specialties: ["Hotel Partnerships", "Group Bookings", "Corporate Travel"]
      },
      {
        name: "Emily Rodriguez",
        position: "Customer Experience Specialist",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        bio: "Emily is passionate about ensuring every client has a seamless travel experience from booking to return.",
        experience: "6+ years",
        specialties: ["Customer Service", "Travel Planning", "Destination Research"]
      },
      {
        name: "David Thompson",
        position: "Adventure Travel Expert",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=400&q=80",
        bio: "David is our go-to expert for adventure travel, having explored over 50 countries and countless adventure destinations.",
        experience: "12+ years",
        specialties: ["Adventure Travel", "Eco-Tourism", "Outdoor Activities"]
      }
    ];

    // Seed Hotel data
    const hotelData = [
      {
        name: "Grand Palace Hotel",
        location: "Paris, France",
        price: 350,
        rating: 4.8,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        description: "Luxury hotel in the heart of Paris with stunning views of the Eiffel Tower. Experience world-class service and elegant accommodations.",
        amenities: ["WiFi", "Spa", "Restaurant", "Room Service", "Concierge", "Fitness Center"],
        availability: true
      },
      {
        name: "Tropical Paradise Resort",
        location: "Bali, Indonesia",
        price: 180,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop",
        description: "Beachfront resort offering traditional Balinese hospitality with modern amenities. Perfect for relaxation and adventure.",
        amenities: ["Beach Access", "Pool", "Restaurant", "Spa", "Water Sports", "Airport Shuttle"],
        availability: true
      },
      {
        name: "Mountain View Lodge",
        location: "Swiss Alps, Switzerland",
        price: 280,
        rating: 4.7,
        image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop",
        description: "Charming alpine lodge with breathtaking mountain views. Ideal for skiing, hiking, and mountain adventures.",
        amenities: ["Ski Storage", "Restaurant", "Spa", "WiFi", "Parking", "Ski Equipment Rental"],
        availability: true
      },
      {
        name: "Urban Boutique Hotel",
        location: "Tokyo, Japan",
        price: 220,
        rating: 4.5,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        description: "Modern boutique hotel in Tokyo's vibrant Shibuya district. Experience Japanese hospitality with contemporary design.",
        amenities: ["WiFi", "Restaurant", "Concierge", "Laundry Service", "Business Center", "Metro Access"],
        availability: true
      },
      {
        name: "Desert Oasis Resort",
        location: "Dubai, UAE",
        price: 400,
        rating: 4.9,
        image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop",
        description: "Ultra-luxury resort in the heart of Dubai with world-class facilities and stunning desert views.",
        amenities: ["Private Beach", "Multiple Pools", "Fine Dining", "Spa", "Golf Course", "Shopping Mall"],
        availability: true
      },
      {
        name: "Historic Manor House",
        location: "Cotswolds, England",
        price: 320,
        rating: 4.6,
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop",
        description: "Beautiful 17th-century manor house set in the picturesque Cotswolds countryside. Perfect for a romantic getaway.",
        amenities: ["Garden", "Restaurant", "Library", "WiFi", "Parking", "Guided Tours"],
        availability: true
      }
    ];

    // Insert data
    await Staff.insertMany(staffData);
    await Hotel.insertMany(hotelData);

    console.log('Data seeded successfully!');
    console.log(`Created ${staffData.length} staff members`);
    console.log(`Created ${hotelData.length} hotels`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
