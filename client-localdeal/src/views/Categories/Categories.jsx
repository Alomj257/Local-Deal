// Categories.js
import React from "react";
import "./Categories.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../utils/Layout";

function Categories() {
  // Static data for demonstration purposes
  const categoryData = [
    {
      image:
        "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).webp",
      category: "Food",
      icon: "fas fa-utensils",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
      link: "Food",
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Others/photo6.webp",
      category: "Accommodation",
      icon: "fas fa-bed",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Others/men.webp",
      category: "Home",
      icon: "fas fa-home",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Others/images/43.webp",
      category: "Beauty",
      icon: "fas fa-scissors",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
    },
    {
      image:
        "https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).webp",
      category: "Activities",
      icon: "fas fa-gamepad",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
    },
    {
      image: "https://mdbootstrap.com/img/Photos/Others/men.webp",
      category: "Entertainment",
      icon: "fas fa-film",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
    },
    {
      image:
        "https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(147).webp",
      category: "Services",
      icon: "fas fa-cogs",
      title: "Cheat day inspirations",
      description:
        "LocalDeal Categories: Uncover Your Communitys Treasures, Where Savings Meet Discovery!",
      date: "2 days ago",
    },
    // ... (other category data)
  ];

  return (
    <>
      <Layout showLayout={true}>
        <Container>
          <Row>
            <h3 className="categories-heading">
              Categories <small> Explore different categories</small>
            </h3>
          </Row>
          <Row md={12}>
            {categoryData.map((category, index) => (
              <Col md={3} key={index}>
                <Card className="card-cascade narrower">
                  <Card.Img
                    variant="rounded"
                    src={category.image}
                    alt="Card image cap"
                    className="rounded-top"
                  />
                  <Card.Body className="card-body-cascade">
                    <h5 className="pink-text pb-2 pt-1">
                      <i className={[category.icon]}></i> {category.category}
                    </h5>
                    <h4 className="font-weight-bold card-title">
                      {category.title}
                    </h4>
                    <p className="card-text">{category.description}</p>
                    <Link
                      to={`/categories/${category.category}`}
                      className="btn btn-unique"
                    >
                      Read More
                    </Link>
                  </Card.Body>
                  <Card.Footer className="text-muted text-center">
                    {category.date}
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Categories;
