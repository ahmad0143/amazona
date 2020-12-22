import React from "react";
import "./App.css";

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  };
  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  };
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>&#9776;</button>
          <a href="index.html">Ace Galleria</a>
        </div>
        <div className="header-link">
          <a href="cart.hmtl">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Shopping Categories</h3>
        <button className="sidebar-closebutton" onClick={closeMenu}>
          x
        </button>
        <ul>
          <li>
            <a href="index.html">Pants</a>
          </li>
          <li>
            <a href="index.html">Shirts</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/d1.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                  <div className="product-brand">OutFitter</div>
                  <div className="product-price">$20</div>
                  <div className="product-rating">4.5 Stars(10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/p2.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$30</div>
                  <div className="product-rating">4 Stars(5 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/p3.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Shirt</a>
                  <div className="product-brand">Live's</div>
                  <div className="product-price">$35</div>
                  <div className="product-rating">4.5 Stars(7 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/p4.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Pant</a>
                  <div className="product-brand">Diesel</div>
                  <div className="product-price">$45</div>
                  <div className="product-rating">4.5 Stars(10 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/p5.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Pant</a>
                  <div className="product-brand">Ednrobe</div>
                  <div className="product-price">$50</div>
                  <div className="product-rating">4.3 Stars(8 Reviews)</div>
                </div>
              </div>
            </li>
            <li>
              <div className="product">
                <img
                  className="product-image"
                  src="/images/p6.jpg"
                  alt="product"
                />
                <div className="product-name">
                  <a href="product.html">Slim Pant</a>
                  <div className="product-brand">Nike</div>
                  <div className="product-price">$40</div>
                  <div className="product-rating">3.5 Stars(9 Reviews)</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </main>
      <footer className="footer">All Right Reserved.</footer>
    </div>
  );
}

export default App;
