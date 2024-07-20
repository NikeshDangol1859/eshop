import React from 'react';
import Items from '../../data/Items';
import { Link } from 'react-router-dom';
import CategoryPage from './CategoryPage';
// import './Home.css'; // Assuming you have a CSS file for custom styles

function Home() {
  return (
    <div className="container my-5">
      <h3 className="text-center fs-1 text-secondary bg-body-tertiary mb-4">Our Products</h3>
      <div className="row">
        <div className="col-md-3">
          <CategoryPage />
        </div>
        <div className="col-md-9">
          <div className="row">
            {Items.map((item) => (
              <div className="col-md-4 col-sm-6 my-4" key={item.id}>
                <Link to={`/item_detail/${item.id}`} className="text-decoration-none">
                  <div className="card h-100">
                    <img src={item.image} className="card-img-top" alt={item.item_name} />
                    <div className="card-body">
                      <h5 className="card-title text-dark">{item.item_name}</h5>
                      <p className="card-text text-dark">{item.description}</p>
                      <p className="card-text text-primary">Rs. {item.price}</p>
                      <div className="d-flex justify-content-between">
                        <button type="button" className="btn btn-outline-primary">Buy Now</button>
                        <button type="button" className="btn btn-danger">Cancel</button>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
