import React from "react";
import css from './Graph.css' 

const Graph = () => {
  return (
    
    <section className="overview">
    <div className="container ">
        <div className="overview-wrapper">
<div className="overview-left">
<div className="graph-head">
    <div> 
        <h2>Overview</h2>
        <p>Monthly Earning</p>
    </div>
    <select>
        <option value="0">Select car:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
        <option value="6">Jaguar</option>
        <option value="7">Land Rover</option>
        <option value="8">Mercedes</option>
        <option value="9">Mini</option>
        <option value="10">Nissan</option>
        <option value="11">Toyota</option>
        <option value="12">Volvo</option>
      </select>

</div>
<div>
    <img src="../images/Assignment11.png"/>
</div>
</div>
<div className="overview-right">
<h2>
Customers
</h2>
<p>
customers that buy products
</p>
<div className="overview-graph">
    <img src="../images/Assignment10.png"/>
</div>
</div>
</div>
    </div>
</section>
   
  );
};

export default Graph;
