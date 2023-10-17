import Recat from 'react';
import css from './Earning.css'

const earning = () => {
    return(
        <section className="earing">
        <div className="container">
            <div className="earing-main">
        <div className="earing-box">
            <div className="earing-wrapper">
            <div className="earing-images">
            <i className="icon">
                <img src="../images/Assignment7.png"/>
            </i>
        </div>
        <div>
            <span className="earn">
                Earning
            </span>
            <strong className="earn-strong">
                $198k
            </strong>
            <p>
                <em className="color-earn">
                <sup>&#8593;</sup>37.8%
                </em>
                this month
            </p>
        </div>
    </div>
        </div>

        

        <div className="earing-box">
            <div className="earing-wrapper">
            <div className="earing-images two">
            <i className="icon">
                <img src="../images/Assignment8.png"/>
            </i>
        </div>
        <div>
            <span className="earn">
               Orders
            </span>
            <strong className="earn-strong">
                $198k
            </strong>
            <p>
                <em className="color-loss">
                <sup>&#8595;</sup>37.8%
                </em>
                this month
            </p>
        </div>
    </div>
        </div>
        <div className="earing-box">
            <div className="earing-wrapper">
            <div className="earing-images this">
            <i className="icon">
                <img src="../images/Assignment7.png"/>
            </i>
        </div>
        <div>
            <span className="earn">
                Balance
            </span>
            <strong className="earn-strong">
                $198k
            </strong>
            <p>
                <em className="color-loss">
                    <sup>&#8595;</sup>37.8%
                </em>
                this month
            </p>
        </div>
    </div>
        </div>
        <div className="earing-box">
            <div className="earing-wrapper">
            <div className="earing-images four">
            <i className="icon">
                <img src="../images/Assignment9.png"/>
            </i>
        </div>
        <div>
            <span className="earn">
                Total Sales
            </span>
            <strong className="earn-strong">
                $198k
            </strong>
            <p>
                <em className="color-earn">
                <sup>&#8593;</sup>37.8%
                </em>
                this month
            </p>
        </div>
    </div>
        </div>
</div>
</div>
    </section>
    )
}

export default earning