import React from "react";
import css from "./Product.css";

const Product = () => {
  return (
    <section className="proudct-sell">
      <div className="container">
        <div className="product-wrap">
          <div className="product-head">
            <div className="left-proudct">
              <h1>Proudct-sell</h1>
            </div>
            <div className="search-wrapper">
              <form action="/action_page.php" className="form-search">
                <input
                  type="text"
                  placeholder="Search.."
                  name="search"
                  className="search-ber"
                />
                <button type="submit" className="search-btn">
                  <i className="search-icon">
                    <img src="../images/icon-search.png" />
                  </i>
                </button>
              </form>
              <select>
                <option value="0">Last 30 days</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8s</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
              </select>
            </div>
          </div>
          <div className="pro-tab">
            <table>
              <tr>
                <th>Product Name</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Total Sales</th>
              </tr>
              <tr>
                <td>
                    <div className="product-name"> 
                    <figure><img src="../images/Assignment13.png"/> </figure>
                    <strong>Abstract 3D</strong>
                    <span>Alfreds Futterkiste</span>
                    </div>
                </td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
              </tr>
              <tr>
                <td>
                    <div className="product-name"> 
                    <figure><img src="../images/Assignment12.png"/> </figure>
                    <strong>Sharphens Illustration</strong>
                    <span>Alfreds Futterkiste</span>
                    </div>
                </td>
                <td>32 in stock</td>
                <td>$ 45.99</td>
                <td>20</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
