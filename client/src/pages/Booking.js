import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking.css';

const Booking = () => {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedHotel, setSelectedHotel] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    hotelId: '',
    roomType: '',
    checkInDate: '',
    checkOutDate: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const response = await axios.get('/api/hotels');
        setHotels(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load hotels');
        setLoading(false);
      }
    };

    fetchHotels();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleHotelSelect = (hotelId) => {
    setSelectedHotel(hotelId);
    setFormData(prev => ({
      ...prev,
      hotelId: hotelId
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.hotelId) {
      setSubmitMessage('Please select a hotel');
      return;
    }

    setSubmitting(true);
    setSubmitMessage('');

    try {
      const appointmentData = {
        ...formData,
        guests: 1
      };

      await axios.post('/api/appointments', appointmentData);
      setSubmitMessage('Booking submitted successfully! We will contact you soon.');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        hotelId: '',
        roomType: '',
        checkInDate: '',
        checkOutDate: '',
        message: ''
      });
      setSelectedHotel('');
    } catch (err) {
      setSubmitMessage('Failed to submit booking. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return (
      <div className="booking">
        <div className="container">
          <div className="loading">Loading hotels...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="booking">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="booking">
      {/* Hero Section */}
      <section className="booking-hero">
        <div className="hero-content">
          <h1>Booking</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">></span>
            <span>Booking</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="booking-main">
        <div className="container">
          {/* Section Header */}
          <div className="section-header">
            <span className="section-subtitle">STAY WITH US</span>
            <h2 className="section-title">Make An Appointment</h2>
          </div>

          <div className="booking-content">
            {/* Booking Form */}
            <div className="booking-form-container">
              <form onSubmit={handleSubmit} className="booking-form">
                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstName"
                      placeholder="Ex. first name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Ex. last name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Ex. info@domain.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Ex. phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <select
                      name="hotelId"
                      value={formData.hotelId || selectedHotel}
                      onChange={(e) => {
                        setSelectedHotel(e.target.value);
                        handleInputChange(e);
                      }}
                      required
                    >
                      <option value="">Select Hotel</option>
                      {hotels.map((hotel) => (
                        <option key={hotel._id} value={hotel._id}>
                          {hotel.name} - ${hotel.price}/night
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-group">
                    <select
                      name="roomType"
                      value={formData.roomType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Room</option>
                      <option value="deluxe">Deluxe Room</option>
                      <option value="junior">Junior Suite</option>
                      <option value="family">Family Room</option>
                      <option value="presidential">Presidential Suite</option>
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="date"
                      name="checkInDate"
                      value={formData.checkInDate}
                      onChange={handleInputChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="date"
                      name="checkOutDate"
                      value={formData.checkOutDate}
                      onChange={handleInputChange}
                      min={formData.checkInDate || new Date().toISOString().split('T')[0]}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    placeholder="Your message..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                  />
                </div>

                {submitMessage && (
                  <div className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'error'}`}>
                    {submitMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  className="book-appointment-btn"
                  disabled={submitting || !formData.hotelId}
                >
                  <span>Book Appointment</span>
                  <span className="arrow">→</span>
                </button>
              </form>
            </div>

            {/* Contact Card */}
            <div className="contact-card">
              <div className="contact-image">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop&auto=format" alt="Hotel Room" />
                <div className="yellow-stripe"></div>
              </div>
              <div className="contact-info">
                <div className="phone-number">(+1) 987 654 3210</div>
                <div className="hours">
                  <div>Mon-Fri: 7:00 am - 9:00 pm</div>
                  <div>24/7 Service Available</div>
                </div>
                <button className="call-us-btn">
                  <span>Call Us Now</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Luxury Rooms Section */}
      <section className="luxury-rooms">
        <div className="container">
          <div className="rooms-header">
            <span className="rooms-subtitle">OUR BEST ROOMS</span>
            <h2 className="rooms-title">Luxury Rooms and Resort</h2>
          </div>

          <div className="rooms-grid">
            <div className="room-card">
              <div className="price-tag">$800/Night</div>
              <div className="room-image">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&auto=format" alt="Deluxe Room" />
              </div>
              <div className="room-info">
                <h3>Deluxe Rooms</h3>
                <div className="room-details">
                  <span>2 Guests</span>
                  <span>2 Beds</span>
                  <span>1 Bath</span>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <button className="read-more-btn">
                  <span>Read More</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="price-tag">$1200/Night</div>
              <div className="room-image">
                <img src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=400&h=300&fit=crop&auto=format" alt="Junior Suite" />
              </div>
              <div className="room-info">
                <h3>Junior Rooms</h3>
                <div className="room-details">
                  <span>3 Guests</span>
                  <span>2 Beds</span>
                  <span>2 Bath</span>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <button className="read-more-btn">
                  <span>Read More</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>

            <div className="room-card">
              <div className="price-tag">$1500/Night</div>
              <div className="room-image">
                <img src="https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=400&h=300&fit=crop&auto=format" alt="Family Room" />
              </div>
              <div className="room-info">
                <h3>Family Rooms</h3>
                <div className="room-details">
                  <span>4 Guests</span>
                  <span>3 Beds</span>
                  <span>2 Bath</span>
                </div>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                <button className="read-more-btn">
                  <span>Read More</span>
                  <span className="arrow">→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
