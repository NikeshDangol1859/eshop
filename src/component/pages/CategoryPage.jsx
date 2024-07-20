import React from 'react';
import Catagory from '../../data/Catagory';
import { Link } from 'react-router-dom';

function CategoryPage() {
  return (
    <>
    <div className="categories-container sticky-md-top">
      <div className="categories-header bg-dark text-white fs-3 text-center rounded py-2">
        CATEGORIES
      </div>
      <div className="categories-list">
      <div>
      <ul>
      <li><Link to="/">ALL</Link></li>
      </ul>
        {Catagory.map((cat) => (
          <div className="category-item py-1 px-2" key={cat}>
            <ul>                
              <li>
                <Link to={`/catagory_detail/${cat}`} className="category-link">
                  {cat}
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </div>
      </div>
    </div>
    </>
  );
}

export default CategoryPage;
