import React, { useState, useEffect } from "react";
import "./Entertainment.css"; // Import CSS for Entertainment component
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Layout from "../../../utils/Layout";
import SearchBar from "../../../components/SearchBar/SearchBar";
import CustomPagination from "../../../components/CustomPagination/CustomPagination";
import image from '../../../assets/categories/Accommodation.png';

// Data for Entertainment items
const entertainmentItems = [
  {
    id: 1,
    name: "Concert Night: Jazz Under the Stars",
    location: "Central Park, New York",
    category: "Concert",
    type: "Live Music",
    description: "Enjoy an evening of smooth jazz under the starry sky at Central Park. Renowned jazz musicians will perform their best hits, creating a magical atmosphere.",
    price: "$25",
    schedule: "Every Friday and Saturday at 7:00 PM",
    image: "https://img.freepik.com/free-vector/realistic-cinematography-bright-with-film-reels-camera-filmstrip-cinema-awards-illustration_1284-51085.jpg?w=900&t=st=1708117586~exp=1708118186~hmac=e47ee6de0490ba9947ff7da50acf5fade4243610abe39280a940d6d067f6562d",
    rating: 4.8
  },
  {
    id: 2,
    name: "Movie Marathon: Classic Cinema Rewind",
    location: "CinemaCity Theater, Los Angeles",
    category: "Movie",
    type: "Film Screening",
    description: "Immerse yourself in the golden age of cinema with a marathon of classic movies. From iconic comedies to timeless dramas, experience the magic of the silver screen.",
    price: "$15",
    schedule: "Every Sunday from 2:00 PM to 10:00 PM",
    image: "https://img.freepik.com/free-photo/copy-space-lightbox-anf-popcorn_23-2148470128.jpg?w=740&t=st=1708117832~exp=1708118432~hmac=0934e6f639efd0a362526861432a0250ff445d77475f935a6f01092449eda5eb",
    rating: 4.5
  },
  {
    id: 3,
    name: "Stand-Up Comedy Night",
    location: "Laugh Lounge, Chicago",
    category: "Comedy Show",
    type: "Stand-Up",
    description: "Get ready for an evening filled with laughter and good vibes! Top comedians from around the country will tickle your funny bone with their hilarious performances.",
    price: "$20",
    schedule: "Every Wednesday and Thursday at 8:00 PM",
    image: "https://img.freepik.com/free-vector/film-strip-with-light-effect-cinema-background_1017-38171.jpg?w=826&t=st=1708117659~exp=1708118259~hmac=8ddc4e8f89292c2509dbbe04a25ccdf364dcb3c8483562722200d93999817174",
    rating: 4.7
  },
  {
    id: 4,
    name: "Magic Show Extravaganza",
    location: "Mystique Theater, Las Vegas",
    category: "Magic Show",
    type: "Illusion",
    description: "Prepare to be amazed as world-class illusionists take you on a journey through the realm of magic. Witness mind-bending tricks and breathtaking illusions that defy explanation.",
    price: "$30",
    schedule: "Every Friday and Saturday at 9:00 PM",
    image: "https://img.freepik.com/free-vector/film-strip-with-light-effect-cinema-background_1017-38171.jpg?w=826&t=st=1708117659~exp=1708118259~hmac=8ddc4e8f89292c2509dbbe04a25ccdf364dcb3c8483562722200d93999817174",
    rating: 4.9
  },
  {
    id: 5,
    name: "Art Exhibition: Beyond Boundaries",
    location: "Metropolitan Museum of Art, New York",
    category: "Art Exhibition",
    type: "Showcase",
    description: "Explore a world of artistic wonder at the Metropolitan Museum of Art. From classical masterpieces to contemporary creations, this exhibition transcends boundaries and inspires the imagination.",
    price: "Free Admission",
    schedule: "Ongoing Exhibition",
    image: "https://img.freepik.com/free-photo/copy-space-lightbox-anf-popcorn_23-2148470128.jpg?w=740&t=st=1708117832~exp=1708118432~hmac=0934e6f639efd0a362526861432a0250ff445d77475f935a6f01092449eda5eb",
    rating: 4.6
  },
  {
    id: 1,
    name: "Concert Night: Jazz Under the Stars",
    location: "Central Park, New York",
    category: "Concert",
    type: "Live Music",
    description: "Enjoy an evening of smooth jazz under the starry sky at Central Park. Renowned jazz musicians will perform their best hits, creating a magical atmosphere.",
    price: "$25",
    schedule: "Every Friday and Saturday at 7:00 PM",
    image: "https://img.freepik.com/free-vector/realistic-cinematography-bright-with-film-reels-camera-filmstrip-cinema-awards-illustration_1284-51085.jpg?w=900&t=st=1708117586~exp=1708118186~hmac=e47ee6de0490ba9947ff7da50acf5fade4243610abe39280a940d6d067f6562d",
    rating: 4.8
  },
  {
    id: 2,
    name: "Movie Marathon: Classic Cinema Rewind",
    location: "CinemaCity Theater, Los Angeles",
    category: "Movie",
    type: "Film Screening",
    description: "Immerse yourself in the golden age of cinema with a marathon of classic movies. From iconic comedies to timeless dramas, experience the magic of the silver screen.",
    price: "$15",
    schedule: "Every Sunday from 2:00 PM to 10:00 PM",
    image: "https://img.freepik.com/free-photo/copy-space-lightbox-anf-popcorn_23-2148470128.jpg?w=740&t=st=1708117832~exp=1708118432~hmac=0934e6f639efd0a362526861432a0250ff445d77475f935a6f01092449eda5eb",
    rating: 4.5
  },
  {
    id: 3,
    name: "Stand-Up Comedy Night",
    location: "Laugh Lounge, Chicago",
    category: "Comedy Show",
    type: "Stand-Up",
    description: "Get ready for an evening filled with laughter and good vibes! Top comedians from around the country will tickle your funny bone with their hilarious performances.",
    price: "$20",
    schedule: "Every Wednesday and Thursday at 8:00 PM",
    image: "https://img.freepik.com/free-vector/film-strip-with-light-effect-cinema-background_1017-38171.jpg?w=826&t=st=1708117659~exp=1708118259~hmac=8ddc4e8f89292c2509dbbe04a25ccdf364dcb3c8483562722200d93999817174",
    rating: 4.7
  },
  {
    id: 4,
    name: "Magic Show Extravaganza",
    location: "Mystique Theater, Las Vegas",
    category: "Magic Show",
    type: "Illusion",
    description: "Prepare to be amazed as world-class illusionists take you on a journey through the realm of magic. Witness mind-bending tricks and breathtaking illusions that defy explanation.",
    price: "$30",
    schedule: "Every Friday and Saturday at 9:00 PM",
    image: "https://img.freepik.com/free-vector/film-strip-with-light-effect-cinema-background_1017-38171.jpg?w=826&t=st=1708117659~exp=1708118259~hmac=8ddc4e8f89292c2509dbbe04a25ccdf364dcb3c8483562722200d93999817174",
    rating: 4.9
  },
  {
    id: 5,
    name: "Art Exhibition: Beyond Boundaries",
    location: "Metropolitan Museum of Art, New York",
    category: "Art Exhibition",
    type: "Showcase",
    description: "Explore a world of artistic wonder at the Metropolitan Museum of Art. From classical masterpieces to contemporary creations, this exhibition transcends boundaries and inspires the imagination.",
    price: "Free Admission",
    schedule: "Ongoing Exhibition",
    image: "https://img.freepik.com/free-photo/copy-space-lightbox-anf-popcorn_23-2148470128.jpg?w=740&t=st=1708117832~exp=1708118432~hmac=0934e6f639efd0a362526861432a0250ff445d77475f935a6f01092449eda5eb",
    rating: 4.6
  },
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
            {/* Example rating */}
          </div>
          <div className="__details">
            <span onClick={toggleDetails} className="toggle-details">
              See details{" "}
              <FontAwesomeIcon icon={faAngleDown} className={`toggle-icon ${showDetails ? 'rotate' : ''}`} />
            </span>
            <div className={`details ${showDetails ? 'show' : ''}`}>
              <p>{item.description}</p>
              <p>Schedule: {item.schedule}</p>
            </div>
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
