import React from "react";
import header from './Header.css' 

const Header = () => {
  return (
      <header class="header">
        <div class="container">
          <div class="header-wrap">  
               
            <div class="left-heder">
              <h1>Hello Shahrukh</h1>
            </div>
            <div class="search-wrapper">
              <div class="search-container">
                <form action="/action_page.php" class="form-wrap">
                  <input
                    type="text"
                    placeholder="Search.."
                    name="search"
                    class="search-ber"
                    />
                  <button type="submit" class="search-btn">
                    <i class="search-icon">
                      <img src="../images/icon-search.png"/>
                    </i>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
   
  );
};

export default Header;
