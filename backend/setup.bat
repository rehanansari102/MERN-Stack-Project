@echo off
echo 🚀 Setting up MERN Stack Task - TravelPro
echo ========================================

echo 📦 Installing root dependencies...
npm install

echo 📦 Installing client dependencies...
cd client
npm install
cd ..

echo 🌱 Seeding database with sample data...
npm run seed

echo.
echo ✅ Setup complete!
echo.
echo 🚀 To start the application:
echo    1. Start the backend: npm run server
echo    2. Start the frontend: npm run client
echo.
echo 🌐 Application will be available at:
echo    Frontend: http://localhost:3000
echo    Backend:  http://localhost:5000
echo.
echo 📚 For more information, check the README.md file
pause
