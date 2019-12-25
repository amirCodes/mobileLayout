import React from 'react';
import '../home.css';

setTimeout(() => {
    document.getElementById('splash-image').classList.toggle('fade');
}, 2000);

function Home() {
    return (
        <div className="">
            <div id="splash-image">
                <img className="logo" src="https://seeklogo.com/images/S/subway-logo-336176FC64-seeklogo.com.png" alt=""/>
            </div>
            <div className="content">
                <header className="app-header">
                    <div className="container">
                        <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVM4mg6Dhosu3ZVcQjR0tdaP6H_tXeyJEfu6I6riEiit5mF3n&s" alt=""/>
                        <input className="search" type="text" placeholder="Search..."/>
                    </div>
                </header>

                <div className="subheader">
                    <div>
                        <p>Ads and promotions will be here</p>
                        <p>Find out now <i className="fa fa-heart-right"></i></p>
                        {/*<p>Find out now <i className="fa fa-cart-plus fa-spin " aria-hidden="true"></i></p>*/}

                    </div>
                    <img src="https://i.ibb.co/PxGygfW/delivery.png" alt=""/>
                </div>

                <div className="grid container">
                    <div className="item">
                        <h4>Full Menu</h4>
                        <p className="desc">NEW! SUBWAY® SLIDERS</p>
                        <img src="https://shopfskmall.com/filesystem//image%20library/fivedollar.jpg" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Signature Wraps</h4>
                        <p className="desc">2 TraversyCare offers expiring</p>
                        <img src="https://www.subway.com/~/media/Base_English/Images/FooterButtons/footer_popup-menu_group.jpg?la=en-MY&hash=7A351CAE5B42BE9D0D65F2C397E4D2922A167078" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Breakfast</h4>
                        <p className="desc">The meatball sub our signature sub and one of our customers favourites</p>
                        <img src="https://5.imimg.com/data5/VV/SS/GLADMIN-30169571/cheese-and-egg-500x500.jpg" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Fresh Fit for Kids</h4>
                        <p className="desc">Free shipping on orders $25+</p>
                        <img src="https://mma.prnewswire.com/media/791811/Subway_Fresh_Fit_For_Kids_Meal.jpg?p=publish&w=950" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Sides and Drinks</h4>
                        <p className="desc">The orange jus our and other cold dring are our customers favourites</p>
                        <img src="https://www.imaginbank.com/deployedfiles/imaginbank/Estaticos/Imagenes/Descuentos/610x450_subway.jpg" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Sandwiches</h4>
                        <p className="desc">View your weekly ad</p>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdA-oO4oMTLpdSlTUnwu3ARSe_CkH6qoaQvz-pd7EpONTpv1mA&s" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Chopped Salads</h4>
                        <p className="desc">View your weekly ad</p>
                        <img src="http://randall-reilly-cms-blogs.dir.s3.amazonaws.com/117/files/2015/09/Subway-salad.jpg" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Breads, Toppings & Extras</h4>
                        <p className="desc">View your weekly ad</p>
                        <img src="https://www.subway.com/~/media/Australia/Images/Promotions/bread-unscorched.jpg?h=234&w=350&la=en-AU&hash=CD085CBF6DB3D2C305C49D4C2C826F4637F03FC3" alt=""/>
                    </div>
                    <div className="item">
                        <h4>Rewards & Deals</h4>
                        <p>Join today to start earning
                            rewards on all qualifying purchases</p>
                        <img src="http://cdn.greatdeals.com.sg/wp-content/uploads/2018/03/17215913/subway-everyday-value-fresh-meals-590-promo-march-2018.jpg"/>
                    </div>
                </div>
            </div>

            <footer className="app-footer">
                <ul>
                    <li>
                        <i className="fa fa-home"></i>
                        Home
                    </li>
                    <li>
                        <i className="fa fa-barcode"></i>
                        Order Now!
                    </li>
                    <li>
                        <i className="fa fa-user"></i>
                        Account
                    </li>
                    <li>
                        <i className="fa fa-map-marker"></i>
                        Find Nearest Subway
                    </li>
                </ul>
            </footer>
        </div>
    );
}

export default Home;
