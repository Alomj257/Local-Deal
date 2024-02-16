import React, { useState, useEffect } from "react";
import "./Services.css"; // Import CSS for Service component
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Services.png';

// Data for Service items
const serviceItems = [
  {
    id: 1,
    name: "House Cleaning",
    category: "Home Services",
    description: "Professional cleaning for your home, including dusting, vacuuming, and sanitizing.",
    price: "$80",
    provider: "Clean Sweep Services",
    duration: "2 hours",
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?w=740&t=st=1708121058~exp=1708121658~hmac=e06aef71aae0aac2e469acd53489099dcc20521d06ceefd6657b7494cc4f3a5e",
    rating: 4.8
  },
  {
    id: 2,
    name: "Personal Training Session",
    category: "Fitness",
    description: "Customized workout sessions with a certified personal trainer to help you achieve your fitness goals.",
    price: "$50",
    provider: "FitFusion Fitness",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/portrait-man-cleaning-his-house_23-2148119212.jpg?w=740&t=st=1708121138~exp=1708121738~hmac=0f6208b6983bb716c6b880bb98e8a759205c9096a40d2c71d807440ae8b41e6b",
    rating: 4.9
  },
  {
    id: 3,
    name: "Graphic Design Consultation",
    category: "Creative Services",
    description: "Professional consultation and design services for branding, logos, and marketing materials.",
    price: "$100",
    provider: "Creative Minds Design Studio",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/cheerful-asian-plumber-sitting-floor-repairing-kitchen-sink_1098-17780.jpg?w=740&t=st=1708121124~exp=1708121724~hmac=9f027137fbed51ca92ac23728dc1411b4a86e45fedf800bb1ceb3f9122c2f95d",
    rating: 4.7
  },
  {
    id: 4,
    name: "Massage Therapy",
    category: "Wellness",
    description: "Relaxing massage therapy sessions to relieve stress, tension, and muscle pain.",
    price: "$60",
    provider: "Tranquil Touch Spa",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/part-male-construction-worker_329181-3734.jpg?w=740&t=st=1708121101~exp=1708121701~hmac=e9f1b56345f0fef904fe0ee00f34769738f7e0bee688725b698cc27256c4b408",
    rating: 4.6
  },
  {
    id: 5,
    name: "Computer Repair Service",
    category: "Technology",
    description: "Expert repair and troubleshooting services for computers, laptops, and peripherals.",
    price: "$70",
    provider: "TechFix Solutions",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/side-view-woman-working-as-plumber_23-2150746373.jpg?w=740&t=st=1708121091~exp=1708121691~hmac=df7036beb830f427bfa7bd96323f5d9a60e0b4c1e67a2162edee51e637d1d5d5",
    rating: 4.5
  },
  {
    id: 6,
    name: "House Cleaning",
    category: "Home Services",
    description: "Professional cleaning for your home, including dusting, vacuuming, and sanitizing.",
    price: "$80",
    provider: "Clean Sweep Services",
    duration: "2 hours",
    image: "https://img.freepik.com/free-photo/standard-quality-control-collage-concept_23-2149595847.jpg?w=740&t=st=1708121058~exp=1708121658~hmac=e06aef71aae0aac2e469acd53489099dcc20521d06ceefd6657b7494cc4f3a5e",
    rating: 4.8
  },
  {
    id: 7,
    name: "Personal Training Session",
    category: "Fitness",
    description: "Customized workout sessions with a certified personal trainer to help you achieve your fitness goals.",
    price: "$50",
    provider: "FitFusion Fitness",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/portrait-man-cleaning-his-house_23-2148119212.jpg?w=740&t=st=1708121138~exp=1708121738~hmac=0f6208b6983bb716c6b880bb98e8a759205c9096a40d2c71d807440ae8b41e6b",
    rating: 4.9
  },
  {
    id: 8,
    name: "Graphic Design Consultation",
    category: "Creative Services",
    description: "Professional consultation and design services for branding, logos, and marketing materials.",
    price: "$100",
    provider: "Creative Minds Design Studio",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/cheerful-asian-plumber-sitting-floor-repairing-kitchen-sink_1098-17780.jpg?w=740&t=st=1708121124~exp=1708121724~hmac=9f027137fbed51ca92ac23728dc1411b4a86e45fedf800bb1ceb3f9122c2f95d",
    rating: 4.7
  },
  {
    id: 9,
    name: "Massage Therapy",
    category: "Wellness",
    description: "Relaxing massage therapy sessions to relieve stress, tension, and muscle pain.",
    price: "$60",
    provider: "Tranquil Touch Spa",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/part-male-construction-worker_329181-3734.jpg?w=740&t=st=1708121101~exp=1708121701~hmac=e9f1b56345f0fef904fe0ee00f34769738f7e0bee688725b698cc27256c4b408",
    rating: 4.6
  },
  {
    id: 10,
    name: "Computer Repair Service",
    category: "Technology",
    description: "Expert repair and troubleshooting services for computers, laptops, and peripherals.",
    price: "$70",
    provider: "TechFix Solutions",
    duration: "1 hour",
    image: "https://img.freepik.com/free-photo/side-view-woman-working-as-plumber_23-2150746373.jpg?w=740&t=st=1708121091~exp=1708121691~hmac=df7036beb830f427bfa7bd96323f5d9a60e0b4c1e67a2162edee51e637d1d5d5",
    rating: 4.5
  }
  // Add more items here...
];

const itemsPerPage = 12;

const ServiceCard = ({ item }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
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
          <p>{item.price}</p>
          <p>By {item.provider}</p>
          <div className="__type">
            <span>{item.category}</span>
            <span>{item.duration}</span>
          </div>
          <div className="__detail">
          <i className="fas fa-star"></i> <span>{item.rating}</span>{" "}
            <i className="fas fa-clock"></i> <span>3 km</span>
            {/* Example rating */}
          </div>
          <div className="__details">
            <span onClick={toggleDetails} className="toggle-details">
              See details{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showDetails ? 'rotate' : ''}`} />
            </span>
            <div className={`details ${showDetails ? 'show' : ''}`}>
              <p>{item.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = serviceItems.filter(
      (item) =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        (!searchQuery ||
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
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

  const categories = ["All", ...new Set(serviceItems.map((item) => item.category))];

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
                  <img src={image} alt="Service" style={{ width: '220px', height: '40px' }} />
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
                    <ServiceCard item={item} />
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

export default Services;
export { ServiceCard, serviceItems };
