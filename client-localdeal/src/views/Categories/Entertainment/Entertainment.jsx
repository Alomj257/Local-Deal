import React, { useState, useEffect } from "react";
import "./Entertainment.css"; // Import CSS for Entertainment component
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Entertainment.png'; // Update image import

// Data for Entertainment items
const entertainmentItems = [
  {
    id: 1,
    name: "Movie Night",
    location: "Local Cinema",
    category: "Movies",
    type: "Indoor",
    description: "Enjoy the latest blockbuster movies in the comfort of a local cinema.",
    price: "$12",
    schedule: "Every Friday at 7:00 PM",
    image: "https://img.freepik.com/free-photo/front-view-fresh-popcorn-pink-table-movie-cinema-color_140725-72928.jpg?w=740&t=st=1708120520~exp=1708121120~hmac=adc00452abc3bf2844ec524d54f89e5c63ef654fa19b0ca001d9981d11ddf3b4",
    rating: 4.5
  },
  {
    id: 2,
    name: "Movie Night",
    location: "Local Cinema",
    category: "Movies 1",
    type: "Indoor",
    description: "Enjoy the latest blockbuster movies in the comfort of a local cinema.",
    price: "$12",
    schedule: "Every Friday at 7:00 PM",
    image: "https://img.freepik.com/premium-psd/cinema-time-with-3d-glasses-popcorn_23-2148470121.jpg?w=740",
    rating: 4.5
  },
  {
    "id": 3,
    "name": "Live Concert",
    "location": "City Arena",
    "category": "Concerts",
    "type": "Outdoor",
    "description": "Experience the thrill of a live music performance at the iconic City Arena.",
    "price": "$50",
    "schedule": "Saturday, June 15th at 8:00 PM",
    "image": "https://img.freepik.com/free-photo/crowd-fans-enjoying-rock-concert-during-festival_53876-64707.jpg?size=626&ext=jpg",
    "rating": 4.8
  },
  {
    "id": 4,
    "name": "Stand-up Comedy Show",
    "location": "Laugh House Comedy Club",
    "category": "Comedy",
    "type": "Indoor",
    "description": "Laugh until your sides hurt with hilarious stand-up acts at Laugh House Comedy Club.",
    "price": "$20",
    "schedule": "Every Thursday at 9:00 PM",
    "image": "https://img.freepik.com/free-photo/happy-comedian-telling-jokes-performing-stage_1150-25732.jpg?size=626&ext=jpg",
    "rating": 4.6
  },
  {
    "id": 5,
    "name": "Art Exhibition",
    "location": "City Art Gallery",
    "category": "Art",
    "type": "Indoor",
    "description": "Discover captivating artworks from local and international artists at the City Art Gallery.",
    "price": "Free",
    "schedule": "Open daily from 10:00 AM to 6:00 PM",
    "image": "https://img.freepik.com/free-photo/blurred-exhibition-gallery-museum-abstract-art-display-background_1418-2195.jpg?size=626&ext=jpg",
    "rating": 4.3
  },
  {
    id: 6,
    name: "Movie Night",
    location: "Local Cinema",
    category: "Movies",
    type: "Indoor",
    description: "Enjoy the latest blockbuster movies in the comfort of a local cinema.",
    price: "$12",
    schedule: "Every Friday at 7:00 PM",
    image: "https://img.freepik.com/free-photo/front-view-fresh-popcorn-pink-table-movie-cinema-color_140725-72928.jpg?w=740&t=st=1708120520~exp=1708121120~hmac=adc00452abc3bf2844ec524d54f89e5c63ef654fa19b0ca001d9981d11ddf3b4",
    rating: 4.5
  },
  {
    id: 7,
    name: "Movie Night",
    location: "Local Cinema",
    category: "Movies 1",
    type: "Indoor",
    description: "Enjoy the latest blockbuster movies in the comfort of a local cinema.",
    price: "$12",
    schedule: "Every Friday at 7:00 PM",
    image: "https://img.freepik.com/premium-psd/cinema-time-with-3d-glasses-popcorn_23-2148470121.jpg?w=740",
    rating: 4.5
  },
  {
    "id": 8,
    "name": "Live Concert",
    "location": "City Arena",
    "category": "Concerts",
    "type": "Outdoor",
    "description": "Experience the thrill of a live music performance at the iconic City Arena.",
    "price": "$50",
    "schedule": "Saturday, June 15th at 8:00 PM",
    "image": "https://img.freepik.com/free-photo/crowd-fans-enjoying-rock-concert-during-festival_53876-64707.jpg?size=626&ext=jpg",
    "rating": 4.8
  },
  {
    "id": 9,
    "name": "Stand-up Comedy Show",
    "location": "Laugh House Comedy Club",
    "category": "Comedy",
    "type": "Indoor",
    "description": "Laugh until your sides hurt with hilarious stand-up acts at Laugh House Comedy Club.",
    "price": "$20",
    "schedule": "Every Thursday at 9:00 PM",
    "image": "https://img.freepik.com/free-photo/happy-comedian-telling-jokes-performing-stage_1150-25732.jpg?size=626&ext=jpg",
    "rating": 4.6
  },
  {
    "id": 10,
    "name": "Art Exhibition",
    "location": "City Art Gallery",
    "category": "Art",
    "type": "Indoor",
    "description": "Discover captivating artworks from local and international artists at the City Art Gallery.",
    "price": "Free",
    "schedule": "Open daily from 10:00 AM to 6:00 PM",
    "image": "https://img.freepik.com/free-photo/blurred-exhibition-gallery-museum-abstract-art-display-background_1418-2195.jpg?size=626&ext=jpg",
    "rating": 4.3
  },
  // Add more entertainment items here
];

const itemsPerPage = 12;

const EntertainmentCard = ({ item }) => {
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
          <p>{item.location}</p>
          <p>{item.price}</p>
          <div className="__type">
            <span>{item.category}</span>
            <span>{item.type}</span>
          </div>
          <div className="__detail">
            <i className="fas fa-star"></i> <span>{item.rating}</span>{" "}
            <i className="fas fa-clock"></i> <span>3 km</span>
          </div>
          <div className="__description">
            {/* <p>{item.description}</p> */}
            <span onClick={toggleDetails} className="toggle-details">
              {showDetails ? "Hide schedule" : "See schedule"}{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showDetails ? 'rotate' : ''}`} />
            </span>
            {showDetails && <p><strong>Schedule:</strong> {item.schedule}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

const Entertainment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = entertainmentItems.filter(
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

  const categories = ["All", ...new Set(entertainmentItems.map((item) => item.category))];

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
                  <img src={image} alt="Entertainment" style={{ width: '220px', height: '40px' }} />
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
                    <EntertainmentCard item={item} />
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

export default Entertainment;
export { EntertainmentCard, entertainmentItems };
