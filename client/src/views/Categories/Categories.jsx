import React from 'react';
import './Categories.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Categories() {
    const categories = [
        { name: 'Food', icon: 'fa-cutlery', link: '/categories/food' },
        { name: 'Accommodation', icon: 'fa-bed', link: '/categories/accommodation' },
        { name: 'Home', icon: 'fa-home', link: '/categories/homestore' },
        { name: 'Beauty', icon: 'fa-scissors', link: '/categories/beauty' },
        { name: 'Activities', icon: 'fa-gamepad', link: '/categories/activities' },
        { name: 'Entertainment', icon: 'fa-film', link: '/categories/entertainment' },
        { name: 'Services', icon: 'fa-cogs', link: '/categories/services' },
    ];

    return (
        <>
            <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
            <section className="container pt-3 mb-3 bg-white">
                <h2 className="h3 block-title text-center pb-5" style={{ color: '#20247b', fontWeight: 700 }}>
                    Categories<small> Explore different categories</small>
                </h2>
                <div className="row pt-5 mt-30">
                    {categories.map((category, index) => (
                        <div key={index} className="col-lg-4 col-sm-6 mb-4 pb-5">
                            <div className="card">
                                <div className="box-shadow custom-bg-color rounded-circle mx-auto text-center" style={{ width: '75px', height: '75px', marginTop: '-40px' }}>
                                    <i className={`fa ${category.icon} fa-2x head-icon`}></i>
                                </div>
                                <div className="card-body text-center">
                                    <h3 className="card-title pt-1">{category.name}</h3>
                                    <p className="card-text text-sm text-justify">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.
                                    </p>
                                    <a href={category.link} className="text-decoration-none"><span className="text-lg text-uppercase font-weight-bold">Learn More&nbsp;</span></a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
            </>
    );
}

export default Categories;
