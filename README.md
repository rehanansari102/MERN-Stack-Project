# MERN Stack Task - TravelPro

A complete MERN stack application for travel booking with responsive design and modern UI.

## 🚀 Features

### Frontend (React.js)
- **Home Page**: Hero section with features and call-to-action
- **About Us Page**: Company story, mission, values, and expert staff showcase
- **Booking Page**: Hotel selection and appointment booking form
- **404 Page**: Custom not found page with helpful navigation
- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox

### Backend (Express.js)
- **Expert Staff API**: GET endpoint for staff data with specialties and experience
- **Hotels API**: GET endpoint for hotel listings with amenities and pricing
- **Appointment API**: POST endpoint for saving booking appointments
- **CORS Configuration**: Properly configured for React frontend access
- **Data Validation**: Comprehensive input validation and error handling

## 📁 Project Structure
```
├── client/                 # React frontend
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── pages/         # Page components
│   │   ├── App.js         # Main app component
│   │   └── index.js       # Entry point
│   └── package.json       # Frontend dependencies
├── models/                # MongoDB models
│   ├── Staff.js          # Staff member schema
│   ├── Hotel.js          # Hotel schema
│   └── Appointment.js    # Booking schema
├── routes/               # API routes
│   ├── staff.js         # Staff endpoints
│   ├── hotels.js        # Hotel endpoints
│   └── appointments.js  # Booking endpoints
├── server.js            # Express server
├── seedData.js          # Database seeding script
└── package.json         # Root dependencies
```

## 🛠️ Getting Started

### Prerequisites
- **Node.js** (v14 or higher)
- **MongoDB** (local or cloud instance)
- **npm** or **yarn**

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd mern-stack-task
```

2. **Install root dependencies**
```bash
npm install
```

3. **Install frontend dependencies**
```bash
cd client
npm install
cd ..
```

4. **Set up environment variables**
Create a `.env` file in the root directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-task
NODE_ENV=development
```

### Database Setup

1. **Start MongoDB** (if running locally)
```bash
mongod
```

2. **Seed the database with sample data**
```bash
npm run seed
```

This will populate the database with:
- 4 expert staff members
- 6 premium hotels
- Sample data for testing

### Running the Application

#### Development Mode

1. **Start the backend server**
```bash
npm run server
```
Server will run on http://localhost:5000

2. **Start the frontend** (in a new terminal)
```bash
npm run client
```
Frontend will run on http://localhost:3000

#### Production Mode

1. **Build the frontend**
```bash
npm run build
```

2. **Start the production server**
```bash
npm start
```

## 🔌 API Endpoints

### Staff API
- `GET /api/staff` - Get all staff members
- `GET /api/staff/:id` - Get specific staff member

### Hotels API
- `GET /api/hotels` - Get all available hotels
- `GET /api/hotels/:id` - Get specific hotel details

### Appointments API
- `POST /api/appointments` - Create new booking appointment
- `GET /api/appointments` - Get all appointments (admin)

### Request/Response Examples

**Create Appointment:**
```json
POST /api/appointments
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "hotelId": "hotel_id_here",
  "checkInDate": "2024-02-15",
  "checkOutDate": "2024-02-20",
  "guests": 2,
  "specialRequests": "Vegetarian meals preferred"
}
```

## 🎨 Design Features

- **Modern UI**: Clean, professional design with smooth animations
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile
- **Interactive Elements**: Hover effects, form validation, and dynamic content
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Performance**: Optimized images and efficient component structure

## 🚀 Deployment

### Heroku Deployment

1. **Create Heroku app**
```bash
heroku create your-app-name
```

2. **Set environment variables**
```bash
heroku config:set MONGODB_URI=your_mongodb_connection_string
heroku config:set NODE_ENV=production
```

3. **Deploy**
```bash
git push heroku main
```

4. **Seed production database**
```bash
heroku run npm run seed
```

### Other Platforms
The application can be deployed on any platform that supports Node.js:
- **Vercel**
- **Netlify**
- **DigitalOcean**
- **AWS**

## 🧪 Testing

Test the application by:

1. **Visiting the About page** - Staff data should load from API
2. **Booking a hotel** - Select a hotel and fill the form
3. **Checking responsiveness** - Resize browser window
4. **Testing 404 page** - Visit a non-existent route

## 🛠️ Technologies Used

### Frontend
- **React.js** - Component-based UI library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Modern styling with Grid and Flexbox

### Backend
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **Body-parser** - Request body parsing

### Development Tools
- **Nodemon** - Development server with auto-restart
- **Dotenv** - Environment variable management

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📞 Support

For support or questions, please contact the development team or create an issue in the repository.
