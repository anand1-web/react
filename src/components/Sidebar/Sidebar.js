import {React,useState} from 'react';
import css from './Sidebar.css';

const Sidebar = () => {
    const [isActive, setActive] = useState(true);

  const toggleClass = () => {
    setActive(!isActive);
  };
    return(
        <div className='sidebar-wrap'> 
        <div id="toggle" onClick={toggleClass}>
  <div class="one"></div>
  <div class="two"></div>
  <div class="three"></div>
</div> 
       <div className={isActive ? 'sideBarDisplay': null}>
        <div className="side-bar"> 
        <h2><img src='../images/dash-icon.png'/> Dashboard</h2>
        <ul className="left-menu">
        <li> <a  href="#"><i className="dash-image"><img src="../images/dashboard-icon_1.svg" alt="dashboard"/></i>Dashboard</a></li>
        <li> <a  href="#"><i className="dash-image"><img src="../images/promote icon.svg" alt="dashboard"/></i>Product</a></li>
        <li><a  href="#"><i className="dash-image"><img src="../images/customers-icon.svg" alt="dashboard"/></i>Customers</a></li>
        <li> <a  href="#"><i className="dash-image"><img src="../images/income_icon.svg" alt="dashboard"/></i>Income</a></li>
        <li> <a  href="#"><i className="dash-image"><img src="../images/promote icon.svg" alt="dashboard"/></i>Prompte</a></li>
        <li><a  href="#"><i className="dash-image"><img src="../images/help-icon.svg" alt="dashboard"/></i>Help</a></li>
        </ul>
        </div>
    </div>
    </div>
    )
}

export default Sidebar