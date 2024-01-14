// Categories.js

import React from 'react';
import './Categories.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Categories() {
    const categoryList = [
        { name: 'Food', icon: 'fa-cutlery', link: '/categories/food' },
        { name: 'Accommodation', icon: 'fa-bed', link: '/categories/accommodation' },
        { name: 'Home', icon: 'fa-home', link: '/categories/homestore' },
        { name: 'Beauty', icon: 'fa-scissors', link: '/categories/beauty' },
        { name: 'Activities', icon: 'fa-gamepad', link: '/categories/activities' },
        { name: 'Entertainment', icon: 'fa-film', link: '/categories/entertainment' },
        { name: 'Services', icon: 'fa-cogs', link: '/categories/services' },
        // Add more categories as needed
    ];

    return (
        <div>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css" rel="stylesheet" />

            <section className="section category-section" id="category">
                <div className="container">
                    <div className="row text-center align-items-center">
                        <div className="col-lg-12">
                            <div className="section-title">
                                <h2>Discover our categories</h2>
                                <p>Your local deal haven for top-notch products and friendly service. We appreciate your support!</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        {categoryList.map((category, index) => (
                            <div key={index} className="col-sm-6 mb-4 col-lg-4">
                                <Link to={category.link} className={`category-${category.name.toLowerCase()}`} style={{ textDecoration: 'none' }}>
                                    <div className="category-feature-box-1">
                                        <div className="category-icon">
                                            <i className={`fa ${category.icon}`}></i>
                                        </div>
                                        <div className="category-feature-content">
                                            <h5>{category.name}</h5>
                                        </div>
                                        <p>Your local deal haven for top-notch products and friendly service. We appreciate your support!</p>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Categories;
