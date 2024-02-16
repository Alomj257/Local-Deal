import React, { useState, useEffect } from "react";
import "./Homestore.css"; // Import CSS for Homestore component
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/HomeStore.png';

// Data for HomeStore items
const homestoreItems = [
  {
    id: 1,
    name: "Product 1",
    location: "Location 1",
    category: "Category 1",
    price: "$100",
    image: "https://img.freepik.com/free-photo/gourmet-grilled-meat-plate-glowing-with-heat-generated-by-ai_188544-24644.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=825d8a2d0b1587c459d549df1085ae31c49b62c8bab435a19fd8f03da36ce2fc",
    description: "Description of Product 1",
    discount: "10% off",
    rating: 4.4,
    products: ["Product A", "Product B", "Product C"]
  },
  {
    id: 2,
    name: "Sofa Set",
    location: "Location 2",
    category: "Furniture",
    price: "$500",
    image: "https://img.freepik.com/free-photo/modern-minimalistic-white-living-room-interior-design_144627-44068.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=fb8749d229cb2f48d660db95e0a6ef102cbac01d7c42cd0e8540f99af76e54f3",
    description: "Luxurious sofa set for your living room",
    discount: "15% off",
    rating: 4.5,
    products: ["3-seater sofa", "2-seater sofa", "Armchair"]
  },
  {
    id: 3,
    name: "Bedroom Set",
    location: "Location 3",
    category: "Furniture",
    price: "$800",
    image: "https://img.freepik.com/free-photo/classy-dining-room-interior_1262-12824.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=4cf021d1d7ff4c9f042cbea7e1ae16f0b6ef1232c1b36b5aabb7fb686536e91d",
    description: "Complete bedroom set with bed and wardrobe",
    discount: "20% off",
    rating: 4.9,
    products: ["Queen-size bed", "Wardrobe", "Bedside table"]
  },
  {
    id: 4,
    name: "Dining Table Set",
    location: "Location 4",
    category: "Furniture",
    price: "$600",
    image: "https://img.freepik.com/free-photo/classy-dining-room-interior_1262-12824.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=4cf021d1d7ff4c9f042cbea7e1ae16f0b6ef1232c1b36b5aabb7fb686536e91d",
    description: "Elegant dining table set for your dining room",
    discount: "25% off",
    rating: 5.0,
    products: ["Dining table", "Chairs (x4)", "Buffet table"]
  },
  {
    id: 5,
    name: "Smart TV",
    location: "Location 5",
    category: "Electronics",
    price: "$700",
    image: "https://img.freepik.com/free-photo/tv-living-room-modern-home-interior_58409-8513.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=64f8a1a90a4529a014b5b9ccf29ad72b9e8a460b31a52a80e19ecbfa51f75b5d",
    description: "High-definition smart TV for ultimate entertainment",
    discount: "30% off",
    rating: 3.8,
    products: ["Smart TV", "Remote control", "Wall mount"]
  },
  {
    id: 6,
    name: "Home Theater System",
    location: "Location 6",
    category: "Electronics",
    price: "$900",
    image: "https://img.freepik.com/free-photo/modern-home-cinema-system-living-room-interior_58409-3331.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=dd24676db005514899e560d674d5fc32ad88d1a3b548c0ee8bba63126c7f3c17",
    description: "Immersive home theater system for cinematic experience",
    discount: "35% off",
    rating: 6.8,
    products: ["Soundbar", "Subwoofer", "Surround speakers"]
  },
  {
    id: 7,
    name: "Kitchen Appliances Set",
    location: "Location 7",
    category: "Appliances",
    price: "$400",
    image: "https://img.freepik.com/free-photo/interior-kitchen-room-white-cabinets-white-fridge-woman-stands-cabinet-takes-product_1150-20717.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=5a94f27a13c4293a8a40e31b7a947cb445715a46c0250380bb3f0208945d27f3",
    description: "Essential kitchen appliances for your modern kitchen",
    discount: "15% off",
    rating: 2.8,
    products: ["Refrigerator", "Microwave", "Toaster"]
  },
  {
    id: 8,
    name: "Home Security System",
    location: "Location 8",
    category: "Security",
    price: "$300",
    image: "https://img.freepik.com/free-photo/modern-home-cinema-system-living-room-interior_58409-3331.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=dd24676db005514899e560d674d5fc32ad88d1a3b548c0ee8bba63126c7f3c17",
    description: "Keep your home safe and secure with advanced security system",
    discount: "10% off",
    rating: 2.8,
    products: ["CCTV cameras (x4)", "Alarm system", "Smart door lock"]
  },
  {
    id: 9,
    name: "Smart Home Devices",
    location: "Location 9",
    category: "Smart Home",
    price: "$200",
    image: "https://img.freepik.com/free-photo/handsome-man-showing-touch-control-panel-with-automation-icons_1098-22221.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=67fdca57c040d4e4dfb1f3cf47270706dbf7b27e1e41ed05b68870073df8e0cf",
    description: "Make your home smarter with these intelligent devices",
    discount: "20% off",
    rating: 4.8,
    products: ["Smart speaker", "Smart bulbs (x3)", "Smart thermostat"]
  },
  {
    id: 10,
    name: "Home Office Desk",
    location: "Location 10",
    category: "Furniture",
    price: "$250",
    image:"https://img.freepik.com/free-photo/modern-home-cinema-system-living-room-interior_58409-3331.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=dd24676db005514899e560d674d5fc32ad88d1a3b548c0ee8bba63126c7f3c17",
    description: "Stylish desk for your productive home office",
    discount: "10% off",
    rating: 3.9,
    products: ["Desk", "Office chair", "Desk lamp"]
  },
  {
    id: 11,
    name: "Smart Refrigerator",
    location: "Location 11",
    category: "Appliances",
    price: "$1000",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "High-tech refrigerator with smart features for convenience",
    discount: "15% off",
    rating: 4.1,
    products: ["Smart refrigerator", "Ice maker", "Vegetable drawer"]
  },
  {
    id: 12,
    name: "Garden Furniture Set",
    location: "Location 12",
    category: "Outdoor",
    price: "$600",
    image: "https://img.freepik.com/free-photo/luxury-garden-furniture-set-home-garden-gazebo-outdoor-living-patio-furniture_1150-14192.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=480d0e6ec52f169a0f7eafcb9d4879646f69e62d0c72ec7612608ffeb562d109",
    description: "Relax in your garden with this elegant furniture set",
    discount: "20% off",
    rating: 4.6,
    products: ["Table", "Chairs (x4)", "Umbrella"]
  },
  {
    id: 13,
    name: "Smart Refrigerator",
    location: "Location 11",
    category: "Appliances",
    price: "$1000",
    image: "https://img.freepik.com/free-photo/open-modern-fridge-full-fresh-food-healthy-eating-concept_155003-22183.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=2d0a30bfc67e5c0b9ae9a5c189af71a9ff6c17f4242352926dcd3f0526072be2",
    description: "High-tech refrigerator with smart features for convenience",
    discount: "15% off",
    rating: 4.7,
    products: ["Smart refrigerator", "Ice maker", "Vegetable drawer"]
  }
];


const itemsPerPage = 12;

const HomestoreCard = ({ item }) => {
  const [showProducts, setShowProducts] = useState(false);

  const toggleProducts = () => {
    setShowProducts(!showProducts);
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
          <div className="__products">
            <span onClick={toggleProducts} className="toggle-products">
              See products{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showProducts ? 'rotate' : ''}`} />
            </span>
            <ul className={`products-list ${showProducts ? 'show' : ''}`}>
              {item.products.map((product, index) => (
                <li key={index}>{product}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const Homestore = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const filtered = homestoreItems.filter(
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

  const categories = ["All", ...new Set(homestoreItems.map((item) => item.category))];

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
                  <img src={image} alt="Homestore" style={{ width: '220px', height: '40px' }} />
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
                    <HomestoreCard item={item} />
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

export default Homestore;
export { HomestoreCard, homestoreItems };
