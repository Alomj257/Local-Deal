// Food.js
import React, { useState } from "react";
import "./Food.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import Layout from "../../../utils/Layout";

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
  },
  // Add more menu items here...
];

const itemsPerPage = 6;

const Food = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState([0, 5000]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const handlePriceRangeChange = (values) => {
    setPriceRange(values);
    setCurrentPage(1);
  };

  const filteredItems = menuItems
    .filter(
      (item) => selectedCategory === null || item.category === selectedCategory
    )
    .filter(
      (item) =>
        searchQuery === "" ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter(
      (item) =>
        parseFloat(item.price.slice(2)) >= priceRange[0] &&
        parseFloat(item.price.slice(2)) <= priceRange[1]
    );

  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getCategoryCounts = () => {
    const categoryCounts = {};
    menuItems.forEach((item) => {
      if (categoryCounts[item.category]) {
        categoryCounts[item.category]++;
      } else {
        categoryCounts[item.category] = 1;
      }
    });
    return categoryCounts;
  };

  const categoryCounts = getCategoryCounts();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <Layout>
        <Container>
          <Row>
            <Col md={3}>
              <h2>Food</h2>
              <div className="card">
                <div className="card-header">Food category</div>
                <ul className="list-group list-group-flush">
                  <li
                    key="all"
                    className={`list-group-item ${
                      selectedCategory === null ? "active" : ""
                    }`}
                    onClick={() => handleCategoryClick(null)}
                  >
                    All ({menuItems.length})
                  </li>
                  {Object.entries(categoryCounts).map(([category, count]) => (
                    <li
                      key={category}
                      className={`list-group-item ${
                        selectedCategory === category ? "active" : ""
                      }`}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category} ({count})
                    </li>
                  ))}
                </ul>
              </div>
              <label>Price filter</label>
              <input
                type="range"
                className="form-range"
                value={priceRange[0]}
                onChange={(e) =>
                  handlePriceRangeChange([
                    parseFloat(e.target.value),
                    priceRange[1],
                  ])
                }
                min="0"
                max="5000"
                data-min={`$${priceRange[0]}`}
                data-max={`$${priceRange[1]}`}
              />
              <div className="range-tooltip">${priceRange[0]}</div>
            </Col>
            <Col md={9}>
              <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                <div className="input-group">
                  <input
                    type="search"
                    placeholder="Search food by location"
                    aria-describedby="button-addon1"
                    className="form-control border-0 bg-light"
                    value={searchQuery}
                    onChange={handleSearchChange}
                  />
                  <div className="input-group-append">
                    <button
                      id="button-addon1"
                      type="submit"
                      className="btn btn-link text-primary"
                    >
                      <i className="fa fa-search"></i>
                    </button>
                  </div>
                </div>
              </div>
              <Row>
                {currentItems.map((item) => (
                  <Col key={item.id} md={4} className="mb-5">
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
                            <i className="fas fa-star"></i> <span>5.0</span>{" "}
                            <i className="fas fa-clock"></i> <span>30 m</span>
                          </div>
                        </div>
                      </a>
                    </div>
                  </Col>
                ))}
              </Row>
              <Pagination>
                {Array.from({ length: totalPages }, (_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === currentPage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
              </Pagination>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Food;
