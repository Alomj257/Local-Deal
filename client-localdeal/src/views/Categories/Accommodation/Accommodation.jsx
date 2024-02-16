// Accommodation.js
import React, { useState, useEffect } from "react";
import "./Accommodation.css"; // Import CSS for Accommodation component
import "@fortawesome/fontawesome-free/css/all.css";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Accommodation.png';

const accommodationItems = [
  {
    id: 1,
    name: "Accommodation 1",
    location: "Cape Town",
    category: "Accommodation 1",
    price: "$ 1260",
    image: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=740&t=st=1707589100~exp=1707589700~hmac=8bfe997cb84d16421c68c9e8bbc7063e18db737c0ed3f60692d171fb2021afe4",
    description: "Luxurious accommodation with stunning views",
    facilities: ["Free Wi-Fi", "Swimming Pool", "Room Service"],
    discount: "10% off", // Add discount information
    rating: 4.8
  },
  {
    "id": 2,
    "name": "Luxury Paradise Hotel",
    "location": "Maldives",
    "category": "Luxury Hotels",
    "price": "$ 2500",
    "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
    "description": "Experience unparalleled luxury and comfort in the heart of Maldives",
    "facilities": ["Private Beach Access", "Spa & Wellness Center", "Fine Dining Restaurants"],
    "discount": "15% off",
    "rating": 4.8
},
{
  "id": 3,
  "name": "Budget Backpackers",
  "location": "Bangkok",
  "category": "Budget Hostels",
  "price": "$ 20",
  "image": "https://img.freepik.com/free-photo/young-girls-travellers-sitting-lobby-hostel-hotel_74855-11619.jpg?size=626&ext=jpg",
  "description": "Affordable and cozy accommodation perfect for budget travelers",
  "facilities": ["Dormitory Beds", "Common Kitchen", "Free Breakfast"],
  "discount": "35%",
  "rating": 4.8
},
,{
  "id": 4,
  "name": "Charming Boutique Inn",
  "location": "Paris",
  "category": "Boutique Hotels",
  "price": "$ 400",
  "image": "https://img.freepik.com/free-photo/interior-design-modern-living-room-boutique-hotel_1262-18577.jpg?size=626&ext=jpg",
  "description": "Experience the charm of Paris in our intimate boutique hotel",
  "facilities": ["Vintage Decor", "Artisanal Breakfast", "Library Lounge"],
  "discount": "20% off",
  "rating": 4.8
},
{
  "id": 5,
  "name": "Seaside Villa Retreat",
  "location": "Santorini",
  "category": "Vacation Rentals",
  "price": "$ 800",
  "image": "https://img.freepik.com/free-photo/modern-luxury-villa-sea-view-swimming-pool-sunbeds-santorini-greece_176420-290.jpg?size=626&ext=jpg",
  "description": "Escape to a private villa overlooking the Aegean Sea",
  "facilities": ["Private Pool", "Panoramic Views", "Fully Equipped Kitchen"],
  "discount": "10% off",
  "rating": 4.7
},
{
  "id": 6,
  "name": "Cityscape Serviced",
  "location": "New York",
  "category": "Serviced Apart..",
  "price": "$ 1500",
  "image": "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?size=626&ext=jpg",
  "description": "Spacious and modern apartments for extended stays",
  "facilities": ["Weekly Housekeeping", "Fitness Center", "Concierge Service"],
  "discount": "5% off",
  "rating": 4.5
,},
{
  "id": 7,
  "name": "Tropical Paradise",
  "location": "Bali",
  "category": "Resorts",
  "price": "$ 1800",
  "image": "https://img.freepik.com/free-photo/villa-pool_1203-1205.jpg?size=626&ext=jpg",
  "description": "Indulge in luxury surrounded by lush tropical landscapes",
  "facilities": ["Infinity Pool", "Private Villas", "Beachfront Dining"],
  "discount": "13%",
  "rating": 4.1
},
,{
  id: 8,
  name: "Accommodation 1",
  location: "Cape Town",
  category: "Accommodation 1",
  price: "$ 1260",
  image: "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?w=740&t=st=1707589100~exp=1707589700~hmac=8bfe997cb84d16421c68c9e8bbc7063e18db737c0ed3f60692d171fb2021afe4",
  description: "Luxurious accommodation with stunning views",
  facilities: ["Free Wi-Fi", "Swimming Pool", "Room Service"],
  discount: "10% off", // Add discount information
  "rating": 4.3
},
{
  "id": 9,
  "name": "Luxury Paradise Hotel",
  "location": "Maldives",
  "category": "Luxury Hotels",
  "price": "$ 2500",
  "image": "https://img.freepik.com/free-photo/luxury-hotel-lobby-interior_1150-15761.jpg?size=626&ext=jpg",
  "description": "Experience unparalleled luxury and comfort in the heart of Maldives",
  "facilities": ["Private Beach Access", "Spa & Wellness Center", "Fine Dining Restaurants"],
  "discount": "15% off",
  "rating": 4.8
},
{
"id": 10,
"name": "Budget Backpackers",
"location": "Bangkok",
"category": "Budget Hostels",
"price": "$ 20",
"image": "https://img.freepik.com/free-photo/young-girls-travellers-sitting-lobby-hostel-hotel_74855-11619.jpg?size=626&ext=jpg",
"description": "Affordable and cozy accommodation perfect for budget travelers",
"facilities": ["Dormitory Beds", "Common Kitchen", "Free Breakfast"],
"discount": "35%",
"rating": 4.9
},
,{
"id": 11,
"name": "Charming Boutique Inn",
"location": "Paris",
"category": "Boutique Hotels",
"price": "$ 400",
"image": "https://img.freepik.com/free-photo/interior-design-modern-living-room-boutique-hotel_1262-18577.jpg?size=626&ext=jpg",
"description": "Experience the charm of Paris in our intimate boutique hotel",
"facilities": ["Vintage Decor", "Artisanal Breakfast", "Library Lounge"],
"discount": "20% off",
"rating": 4.7
},
{
"id": 12,
"name": "Seaside Villa Retreat",
"location": "Santorini",
"category": "Vacation Rentals",
"price": "$ 800",
"image": "https://img.freepik.com/free-photo/modern-luxury-villa-sea-view-swimming-pool-sunbeds-santorini-greece_176420-290.jpg?size=626&ext=jpg",
"description": "Escape to a private villa overlooking the Aegean Sea",
"facilities": ["Private Pool", "Panoramic Views", "Fully Equipped Kitchen"],
"discount": "10% off",
"rating": 4.8
},
{
"id": 13,
"name": "Cityscape Serviced",
"location": "New York",
"category": "Serviced Apart..",
"price": "$ 1500",
"image": "https://img.freepik.com/free-photo/modern-studio-apartment-design-with-bedroom-living-space_1262-12375.jpg?size=626&ext=jpg",
"description": "Spacious and modern apartments for extended stays",
"facilities": ["Weekly Housekeeping", "Fitness Center", "Concierge Service"],
"discount": "5% off",
"rating": 5
,},
{
"id": 14,
"name": "Tropical Paradise",
"location": "Bali",
"category": "Resorts",
"price": "$ 1800",
"image": "https://img.freepik.com/free-photo/villa-pool_1203-1205.jpg?size=626&ext=jpg",
"description": "Indulge in luxury surrounded by lush tropical landscapes",
"facilities": ["Infinity Pool", "Private Villas", "Beachfront Dining"],
"discount": "13%",
"rating": 4.8
}
 , // Add more accommodation items here...
];

const itemsPerPage = 12;

const AccommodationCard = ({ item }) => {
  const [showFacilities, setShowFacilities] = useState(false);

  const toggleFacilities = () => {
    setShowFacilities(!showFacilities);
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
          <div className="__facilities">
            <span onClick={toggleFacilities} className="toggle-facilities">
              See facilities{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showFacilities ? 'rotate' : ''}`} />
            </span>
            <ul className={`facilities-list ${showFacilities ? 'show' : ''}`}>
              {item.facilities.map((facility, index) => (
                <li key={index}>{facility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
const Accommodation = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = accommodationItems.filter(
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

  const categories = ["All", ...new Set(accommodationItems.map((item) => item.category))];

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
                  <img src={image} alt="accommodation" style={{ width: '220px', height: '40px' }} />
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
                    <AccommodationCard item={item} />
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

export default Accommodation;
export { AccommodationCard, accommodationItems };
