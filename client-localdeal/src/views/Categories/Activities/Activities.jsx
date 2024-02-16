import React, { useState, useEffect } from "react";
import "./Activities.css"; // Import CSS for Activities component
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Activity.png';

// Data for Activities items
const activitiesItems = [
  {
    id: 1,
    name: "Hiking Adventure",
    location: "Mountain Range",
    category: "Hiking",
    price: "$30",
    discount: "10% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Explore scenic trails and breathtaking views on this hiking adventure.",
    participants: ["John Doe", "Jane Smith", "Michael Johnson"],
    rating: 4.5
  },
  {
    id: 2,
    name: "Scuba Diving Excursion",
    location: "Coral Reef",
    category: "Scuba Diving",
    price: "$80",
    discount: "15% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Dive into the depths of the ocean and discover vibrant marine life.",
    participants: ["Emily Brown", "David Wilson", "Sophia Martinez"],
    rating: 4.8
  },
  {
    id: 3,
    name: "Rock Climbing",
    location: "Cliffside",
    category: "Rock Climbing",
    price: "$50",
    discount: "5% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Test your strength and agility as you scale challenging rock faces.",
    participants: ["Robert Jones", "Olivia Taylor", "William Anderson"],
    rating: 4.3
  },
  {
    id: 4,
    name: "Kayaking Expedition",
    location: "River",
    category: "Parasailing",
    price: "$40",
    discount: "20% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Paddle through scenic waterways and explore hidden coves on this kayaking adventure.",
    participants: ["Ethan Garcia", "Ava Hernandez", "Logan Martinez"],
    rating: 4.7
  },
  {
    id: 5,
    name: "Zip Lining Thrill",
    location: "Forest",
    category: "Zip Lining",
    price: "$60",
    discount: "25% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Experience the adrenaline rush as you soar through the treetops on a thrilling zip line.",
    participants: ["Chloe Rodriguez", "Gabriel Perez", "Sophia King"],
    rating: 4.9
  },
  {
    id: 6,
    name: "Hot Air Balloon Ride",
    location: "Sky",
    category: "Parasailing",
    price: "$150",
    discount: "30% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Drift peacefully above stunning landscapes and enjoy breathtaking views from a hot air balloon.",
    participants: ["Harper Scott", "Zoe Flores", "Jayden Lee"],
    rating: 4.6
  },
  {
    id: 7,
    name: "Whitewater Rafting",
    location: "River",
    category: "Zip Lining",
    price: "$55",
    discount: "10% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Conquer thrilling rapids and navigate wild waters on an exciting whitewater rafting trip.",
    participants: ["Liam Baker", "Aria Gonzalez", "Nathan Young"],
    rating: 4.4
  },
  {
    id: 8,
    name: "Parasailing Excursion",
    location: "Beach",
    category: "Parasailing",
    price: "$70",
    discount: "15% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Soar high above the ocean and enjoy stunning aerial views while parasailing.",
    participants: ["Mia Carter", "Elijah Hill", "Madison Allen"],
    rating: 4.7
  },
  {
    id: 9,
    name: "Mountain Biking Trail",
    location: "Mountain",
    category: "Mountain Biking",
    price: "$45",
    discount: "5% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Embark on thrilling trails and experience the rush of mountain biking through rugged terrain.",
    participants: ["Mason Ward", "Avery Cooper", "Elena Foster"],
    rating: 4.3
  },
  {
    id: 10,
    name: "Rock Climbing",
    location: "Canyon",
    category: "Mountain",
    price: "$50",
    discount: "5% off",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "Test your strength and agility as you scale challenging rock faces.",
    participants: ["Robert Jones", "Olivia Taylor", "William Anderson"],
    rating: 4.3
  }
];


const itemsPerPage = 12;

const ActivitiesCard = ({ item }) => {
  const [showParticipants, setShowParticipants] = useState(false);

  const toggleParticipants = () => {
    setShowParticipants(!showParticipants);
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
          </div>
          <div className="__participants">
            <span onClick={toggleParticipants} className="toggle-participants">
              See participants{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showParticipants ? 'rotate' : ''}`} />
            </span>
            <ul className={`participants-list ${showParticipants ? 'show' : ''}`}>
              {item.participants.map((participant, index) => (
                <li key={index}>{participant}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Activities = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = activitiesItems.filter(
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

  const categories = ["All", ...new Set(activitiesItems.map((item) => item.category))];

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
                  <img src={image} alt="Activities" style={{ width: '220px', height: '40px' }} />
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
                    <ActivitiesCard item={item} />
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

export default Activities;
export { ActivitiesCard, activitiesItems };
