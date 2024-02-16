import React, { useState, useEffect } from "react";
import "./Beauty.css"; // Import CSS for Beauty component
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Beauty.png';

// Data for Beauty items
const beautyItems = [
  {
    "id": 1,
    "name": "Glowing Locks Salon",
    "location": "Johannesburg, South Africa",
    "category": "Hair",
    "services": ["Haircut", "Hair Coloring", "Hair Styling"],
    "price": "$100",
    "discount": "10% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Premium salon for all your haircare needs",
    "rating": 4.5
  },
  {
    "id": 2,
    "name": "Silk Touch Spa",
    "location": "Cape Town, South Africa",
    "category": "Body",
    "services": ["Massage", "Body Scrub", "Body Wrap"],
    "price": "$120",
    "discount": "15% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Indulge in relaxation and rejuvenation at our spa",
    "rating": 4.2
  },
  {
    "id": 3,
    "name": "Natural Beauty Haven",
    "location": "Durban, South Africa",
    "category": "Skin",
    "services": ["Facial", "Skincare Consultation", "Chemical Peel"],
    "price": "$90",
    "discount": "20% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Discover the beauty of natural skincare",
    "rating": 4.7
  },
  {
    "id": 4,
    "name": "Zen Wellness Center",
    "location": "Pretoria, South Africa",
    "category": "Mind & Body",
    "services": ["Yoga", "Meditation", "Mindfulness Workshops"],
    "price": "$80",
    "discount": "15% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Rejuvenate your mind, body, and soul",
    "rating": 4.8
  },
  {
    "id": 5,
    "name": "Golden Glow Tanning Studio",
    "location": "Bloemfontein, South Africa",
    "category": "Tanning",
    "services": ["Spray Tan", "Sunbed Tanning", "Tanning Lotions"],
    "price": "$50",
    "discount": "10% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Get the perfect sun-kissed glow all year round",
    "rating": 4.3
  },
  {
    "id": 6,
    "name": "Nail Artistry Boutique",
    "location": "Port Elizabeth, South Africa",
    "category": "Nails",
    "services": ["Manicure", "Pedicure", "Nail Art"],
    "price": "$60",
    "discount": "10% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Express yourself with stunning nail designs",
    "rating": 4.6
  },
  {
    "id": 7,
    "name": "Crystal Clear Dental Spa",
    "location": "Johannesburg, South Africa",
    "category": "Dental Care",
    "services": ["Teeth Cleaning", "Teeth Whitening", "Dental Checkup"],
    "price": "$150",
    "discount": "25% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Experience dental care in a luxurious spa setting",
    "rating": 4.9
  },
  {
    "id": 8,
    "name": "Luxe Lashes Studio",
    "location": "Durban, South Africa",
    "category": "Eyelashes",
    "services": ["Eyelash Extensions", "Lash Lift", "Lash Tinting"],
    "price": "$70",
    "discount": "15% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Enhance your natural beauty with luxurious lashes",
    "rating": 4.4
  },
  {
    "id": 9,
    "name": "Sculpted Body Fitness Center",
    "location": "Pretoria, South Africa",
    "category": "Fitness",
    "services": ["Personal Training", "Group Classes", "Nutritional Counseling"],
    "price": "$80",
    "discount": "10% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Achieve your fitness goals in a supportive environment",
    "rating": 4.7
  },
  {
    "id": 10,
    "name": "Radiant Beauty Clinic",
    "location": "Cape Town, South Africa",
    "category": "Skin & Hair",
    "services": ["Laser Hair Removal", "Acne Treatment", "Hair Restoration"],
    "price": "$120",
    "discount": "20% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Unleash your radiance with our comprehensive beauty treatments",
    "rating": 4.6
  },
  {
    "id": 11,
    "name": "Relaxation Oasis Spa",
    "location": "Bloemfontein, South Africa",
    "category": "Spa",
    "services": ["Hot Stone Massage", "Aromatherapy", "Body Scrub"],
    "price": "$100",
    "discount": "15% off",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Escape the hustle and bustle and unwind in our serene oasis",
    "rating": 4.8
  },
  // Add more entries with the same image URL
];

const itemsPerPage = 12;

const BeautyCard = ({ item }) => {
  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices(!showServices);
  };

  return (
    <div className="__area text-center">
      <div className="__card">
        <button className="__favorit">
          <i className="fas fa-heart"></i>
        </button>
        <img
          src={item.image}
          className="img-fluid __img"
          alt={item.name}
        />
        <div className="__card_detail text-left">
          <a href="#"><h4>{item.name}</h4></a>
          <p>{item.location}</p>
          <p>{item.price}</p>
          <div className="__type">
            <span>{item.category}</span>
            <span>{item.discount}</span>
          </div>
          <div className="__detail">
          <i className="fas fa-star"></i> <span>{item.rating}</span>{" "}
          <i className="fas fa-clock"></i> <span>3 km</span>
            {/* Example rating */}
          </div>
          <div className="__beauty_services">
            <span onClick={toggleServices} className="toggle-beauty-services">
              See Beauty services{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showServices ? 'rotate' : ''}`} />
            </span>
            <ul className={`beauty-services-list ${showServices ? 'show' : ''}`}>
              {item.services.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Beauty = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = beautyItems.filter(
      (item) =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        (!searchQuery ||
          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredItems(filtered);
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const categories = ["All", ...new Set(beautyItems.map((item) => item.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <Layout showNavbar={true}>
        <Container>
          <Row>
            <Col md={4} className="mb-4">
              <div className="row justify-content-center">
                <div className="col-auto">
                  <img src={image} alt="Beauty" style={{ width: '220px', height: '40px' }} />
                </div>
              </div>
            </Col>
            <Col md={8}><SearchBar value={searchQuery} onChange={handleSearchChange} /></Col>
          </Row>
          <div className="category-tags mb-5">
            {categories.map((category, index) => (
              <span key={index} className={`category-tag ${selectedCategory === category ? 'active' : ''}`} onClick={() => handleCategoryClick(category)}>
                {category}
              </span>
            ))}
          </div>
          <Row>
            <Col md={12}>
              {currentItems.length === 0 && (
                <p className="text-center not-found-message">Nothing found {searchQuery ? `for "${searchQuery}"` : ''} {selectedCategory !== "All" ? `in category "${selectedCategory}"` : ''}</p>
              )}
              <Row>
                {currentItems.map((item) => (
                  <Col
                    key={item.id}
                    xs={12}
                    md={4}
                    lg={3}
                    className="mb-5"
                  >
                    <BeautyCard item={item} />
                  </Col>
                ))}
              </Row>
              {totalPages > 1 && (
                <CustomPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  total={filteredItems.length}
                  itemsPerPage={itemsPerPage}
                />
              )}
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Beauty;
export { BeautyCard, beautyItems };
