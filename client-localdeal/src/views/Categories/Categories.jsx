// Categories.js
import React from "react";
import "./Categories.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Layout from "../../utils/Layout";
import { FoodCard, menuItems } from "./Food/Food";

function Categories() {
  // Static data for demonstration purposes
  const categoryData = [
    {
      category: "Food",
      icon: "fas fa-utensils",
      link: "/categories/food",
    },
    {
      category: "Accommodation",
      icon: "fas fa-bed",
      link: "/categories/accommodation",
    },
    {
      category: "Home",
      icon: "fas fa-home",
      link: "/categories/home",
    },
    {
      category: "Beauty",
      icon: "fas fa-scissors",
      link: "/categories/beauty",
    },
    {
      category: "Activities",
      icon: "fas fa-gamepad",
      link: "/categories/activities",
    },
    {
      category: "Entertainment",
      icon: "fas fa-film",
      link: "/categories/entertainment",
    },
    {
      category: "Services",
      icon: "fas fa-cogs",
      link: "/categories/services",
    },
    // Add more categories as needed
  ];

  return (
    <>
      <Layout showNavbar={true} showFooter={false}>
        <Container>
          <div className="category-container justify-content-center">
            {categoryData.map((category, index) => (
              <Link key={index} to={category.link} className="category-link">
                <Card className="category-card mb-3">
                  <div className="category-content">
                    <i className={category.icon}></i>
                    <span>{category.category}</span>
                  </div>
                </Card>
              </Link>
            ))}
          </div>

          <Row>
          {menuItems.map((item, index) => (
              <Col
                key={item.id}
                xs={12}
                md={4}
                lg={3}
                className="mb-5 mt-3"
              >
                  <FoodCard key={index} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </Layout>
    </>
  );
}

export default Categories;
