// Food.js
import React, { useState, useEffect } from "react";
import "./Food.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Container, Row, Col } from "react-bootstrap";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Foods.png';

const menuItems = [
  {
    id: 1,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 1",
    price: "$ 1260",
    image:
      "https://img.freepik.com/free-photo/flame-grilled-meat-cooking-flames-generative-ai_188544-12355.jpg?w=826&t=st=1706554228~exp=1706554828~hmac=3449b07e79260ddbfed437bba428545b3fcb21584e9bf00b0b17b941ee688c72",
    description:
      "Satisfy Your Tastebuds with Flavourful Chicken and Seafood at Mozambik",
    discount: "Save 26%",
    rating: 4.3
  },
  {
    id: 2,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 2",
    price: "$ 2499",
    image:
      "https://img.freepik.com/free-photo/fresh-pasta-with-hearty-bolognese-parmesan-cheese-generated-by-ai_188544-9469.jpg?w=826&t=st=1706554250~exp=1706554850~hmac=954c2e92a7dcabee57952d4ede7ca632f8b95a0308602b073e7aac072351351c",
    description: "A Deluxe Weekend Breakfast Buffet for 2",
    discount: "Save 35%",
    rating: 4.7
  },
  {
    id: 3,
    name: "Food Name",
    location: "Kolkata",
    category: "Food 2",
    price: "$ 3454",
    image:
      "https://img.freepik.com/free-photo/gourmet-grilled-meat-plate-glowing-with-heat-generated-by-ai_188544-24644.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=825d8a2d0b1587c459d549df1085ae31c49b62c8bab435a19fd8f03da36ce2fc",
    description: "Enjoy a Mouthwatering Chicken and Seafood Combo at Mozambik",
    discount: "Save 35%",
    rating: 4
  },
  {
    id: 4,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 3",
    price: "$ 2605",
    image:
      "https://img.freepik.com/premium-photo/indian-vegetable-pulav-biryani-made-using-basmati-rice-served-terracotta-bowl-selective-focus_466689-55615.jpg?w=740",
    description:
      "Satisfy Your Tastebuds with Flavourful Chicken and Seafood at Mozambik",
    discount: "Save 26%",
    rating: 4.0
  },
  {
    id: 5,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 4",
    price: "$ 276",
    image:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1706554350~exp=1706554950~hmac=3e6b0c6d52ef6ec59778877cddbf643bdb584f69430971f46209be077a146772",
    description: "A Deluxe Weekend Breakfast Buffet for 2",
    discount: "Save 35%",
    rating: 4.7
  },
  {
    id: 6,
    name: "Food Name",
    location: "Kolkata",
    category: "Food 5",
    price: "$ 154",
    image:
      "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=740&t=st=1706554369~exp=1706554969~hmac=06b1b6e8b74120ab43b22b29e2e13ea4d7f7a4af334b3ecf98a1bc61188ecdd8",
    description: "Enjoy a Mouthwatering Chicken and Seafood Combo at Mozambik",
    discount: "Save 35%",
    rating: 4.1
  },
  {
    id: 7,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 3",
    price: "$ 240",
    image:
      "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1706554350~exp=1706554950~hmac=3e6b0c6d52ef6ec59778877cddbf643bdb584f69430971f46209be077a146772",
    description:
      "Satisfy Your Tastebuds with Flavourful Chicken and Seafood at Mozambik",
    discount: "Save 26%",
    rating: 4.5
  },
  {
    id: 8,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 3",
    price: "$ 259",
    image:
      "https://img.freepik.com/free-photo/gourmet-grilled-meat-plate-glowing-with-heat-generated-by-ai_188544-24644.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=825d8a2d0b1587c459d549df1085ae31c49b62c8bab435a19fd8f03da36ce2fc",
    description: "A Deluxe Weekend Breakfast Buffet for 2",
    discount: "Save 35%",
    rating: 4.7
  },
  {
    id: 9,
    name: "Food Name",
    location: "Kolkata",
    category: "Food 5",
    price: "$ 354",
    image:
      "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=740&t=st=1706554369~exp=1706554969~hmac=06b1b6e8b74120ab43b22b29e2e13ea4d7f7a4af334b3ecf98a1bc61188ecdd8",
    description: "Enjoy a Mouthwatering Chicken and Seafood Combo at Mozambik",
    discount: "Save 35%",
    rating: 4.1
  },
  {
    id: 10,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 4",
    price: "$ 260",
    image:
      "https://img.freepik.com/free-photo/gourmet-grilled-meat-plate-glowing-with-heat-generated-by-ai_188544-24644.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=825d8a2d0b1587c459d549df1085ae31c49b62c8bab435a19fd8f03da36ce2fc",
    description:
      "Satisfy Your Tastebuds with Flavourful Chicken and Seafood at Mozambik",
    discount: "Save 26%",
    rating: 4.5
  },
  {
    id: 11,
    name: "Food Name",
    location: "Cape Town",
    category: "Food 2",
    price: "$ 299",
    image:
      "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=740&t=st=1706554369~exp=1706554969~hmac=06b1b6e8b74120ab43b22b29e2e13ea4d7f7a4af334b3ecf98a1bc61188ecdd8",
    description: "A Deluxe Weekend Breakfast Buffet for 2",
    discount: "Save 35%",
    rating: 4.6
  },
  {
    id: 12,
    name: "Food Name",
    location: "Kolkata",
    category: "Food 3",
    price: "$ 354",
    image:
      "https://img.freepik.com/free-photo/gourmet-grilled-meat-plate-glowing-with-heat-generated-by-ai_188544-24644.jpg?w=826&t=st=1706554271~exp=1706554871~hmac=825d8a2d0b1587c459d549df1085ae31c49b62c8bab435a19fd8f03da36ce2fc",
    description: "Enjoy a Mouthwatering Chicken and Seafood Combo at Mozambik",
    discount: "Save 35%",
    rating: 4.1
  },
  {
    id: 13,
    name: "Food Name",
    location: "Kolkata",
    category: "Food 1",
    price: "$ 354",
    image:
      "https://img.freepik.com/free-photo/traditional-indian-soup-lentils-indian-dhal-spicy-curry-bowl-spices-herbs-rustic-black-wooden-table_2829-18717.jpg?w=740&t=st=1706554369~exp=1706554969~hmac=06b1b6e8b74120ab43b22b29e2e13ea4d7f7a4af334b3ecf98a1bc61188ecdd8",
    description: "Enjoy a Mouthwatering Chicken and Seafood Combo at Mozambik",
    discount: "Save 35%",
    rating: 4.2
  },
  // Add more menu items here...
];
const itemsPerPage = 12;

const FoodCard = ({ item }) => {
  return (
    <>
    <div className="__area text-center">
      <a href=" " className="__card">
        <button className="__favorit">
          <i className="fas fa-heart"></i>
        </button>
        <img
          src={item.image}
          className="img-fluid __img"
          alt={item.name}
        />
        <div className="__card_detail text-left">
          <h4>{item.name}</h4>
          <p>{item.location}</p>
          <p>{item.price}</p>
          <div className="__type">
            <span>{item.category}</span>
            <span>{item.discount}</span>
          </div>
          <div className="__detail">
          <i className="fas fa-star"></i> <span>{item.rating}</span>{" "}
            <i className="fas fa-clock"></i> <span>30 m</span>
          </div>
        </div>
      </a>
    </div>
    </>
  );
};

const Food = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("All"); // Initially selected category is "All"
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    // Filter items based on the selected category and search query
    const filtered = menuItems.filter(
      (item) =>
        (selectedCategory === "All" || item.category === selectedCategory) &&
        (!searchQuery ||
          item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );
    setFilteredItems(filtered);
    setCurrentPage(1); // Reset page to 1 when category or search query changes
  }, [selectedCategory, searchQuery]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Extracting unique categories
  const categories = ["All", ...new Set(menuItems.map((item) => item.category))];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Set the selected category
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
                  <img src={image} alt="food" style={{ width: '220px', height: '40px' }} />
                </div>
              </div>
            </Col>
            <Col md={8}><SearchBar value={searchQuery} onChange={handleSearchChange} /></Col>
          </Row>
          {/* Category tags */}
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
                    <FoodCard item={item} /> {/* Use the FoodCard component */}
                  </Col>
                ))}
              </Row>
              {totalPages > 1 && (
                <CustomPagination
                  totalPages={totalPages}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  total={filteredItems.length} // Pass the total number of items
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

export default Food;
export { FoodCard, menuItems };