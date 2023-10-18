import PropTypes from "prop-types";
import React from "react";
import { Link } from 'react-router-dom';
import "./dashboard.css";
import moneySvg from './svg/money-recive-1.svg';
import arrowUp1Svg from './svg/arrow-up-1.svg';
import walletMoney1Svg from './svg/wallet-money-1.svg';
import bag2_1Svg from './svg/bag-2-1.svg';
import arrowUp1_2Svg from './svg/arrow-up-1-2.svg';
import arrowUp1_3Svg from './svg/arrow-up-1-3.svg';
import line2Svg from './svg/line-2.svg';
import line3Svg from './svg/line-3.svg';
import line4Svg from './svg/line-4.svg';
import unsplashWh2fhl0vEoSvg from './svg/unsplash-wh2fhl0v-eo.svg';
import unsplashA2jNamzagSvg from './svg/unsplash-a2j-namzag.svg';
import unsplashRazuR66vucSvg from './svg/unsplash-RAZU-r66vuc.svg';
import unsplashCpccybprfASvg from './svg/unsplash-cpccybprf-a.svg';
import vector2Svg from './svg/vector-2.svg';
import ellipse6Svg from './svg/ellipse-6.svg';
import ellipse7Svg from './svg/ellipse-7.svg';
import search1Svg from './svg/search-1.svg';
import search1_2Svg from './svg/search-1-2.svg';
import chevronDown1_2Svg from './svg/chevron-down-1-2.svg';
import chevronDown1Svg from './svg/chevron-down-1.svg';
import chevronDown2Svg from './svg/chevron-down-2.svg';
import chevronright from './svg/chevron-right-2.svg';
import Square1Svg from './svg/3d-square-1.svg';
import keysquare from './svg/key-square.svg';
import userSquare1Svg from './svg/user-square-1.svg';
import walletMoney2Svg from './svg/wallet-money-2.svg';
import discountShape1Svg from './svg/discount-shape-1.svg';
import messageQuestion1Svg from './svg/message-question-1.svg';
import ellipse8Png from './svg/ellipse-8.png';
import setting1Svg from './svg/setting-1.svg';

export const Dashboard = ({ inputType = "text" }) => {
  return (
    <div className="dashboard">
      <div className="container dashboarditems">
        <div className="text-wrapper-43">Hello Shahrukh 👋🏼,</div>
        <div className="earning">
          <div className="overlap-group">
            <div className="group">
              <div className="div">
                <div className="text-wrapper">Earning</div>
                <div className="text-wrapper-2">$198k</div>
                <div className="money-recive-wrapper">
                  <img className="img" alt="Money recive" src={moneySvg} />
                </div>
                <div className="group-2">
                  <p className="p">
                    <span className="span">37.8%</span>
                    <span className="text-wrapper-3"> this month</span>
                  </p>
                  <img className="arrow-up" alt="Arrow up" src={arrowUp1Svg} />
                </div>
              </div>
              <div className="group-3">
                <div className="text-wrapper">Balance</div>
                <div className="text-wrapper-2">$2.4k</div>
                <div className="wallet-money-wrapper">
                  <img className="img" alt="Wallet money" src={walletMoney1Svg} />
                </div>
                <div className="group-4">
                  <p className="p">
                    <span className="text-wrapper-4">2%</span>
                    <span className="text-wrapper-3"> this month</span>
                  </p>
                  <img className="arrow-up" alt="Arrow up" src={arrowUp1_2Svg} />
                </div>
              </div>
              <div className="group-5">
                <div className="text-wrapper">Total Sales</div>
                <div className="text-wrapper-2">$89k</div>
                <div className="bag-wrapper">
                  <img className="bag" alt="Bag" src={bag2_1Svg} />
                </div>
                <div className="group-6">
                  <p className="p">
                    <span className="span">11%</span>
                    <span className="text-wrapper-3"> this week</span>
                  </p>
                  <img className="arrow-up" alt="Arrow up" src={arrowUp1_3Svg} />
                </div>
              </div>
              <img className="line" alt="Line" src={line2Svg} />
              <img className="line-2" alt="Line" src={line3Svg} />
            </div>
          </div>
        </div>
        <div className="overview">
          <div className="overlap">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <img className="chevron-down" alt="Chevron down" src={chevronDown1_2Svg} />
                <div className="text-wrapper-5">Quarterly</div>
              </div>
            </div>
            <div className="text-wrapper-6">Overview</div>
            <div className="text-wrapper-7">Monthly Earning</div>
            <div className="text-wrapper-8">Jan</div>
            <div className="text-wrapper-9">Feb</div>
            <div className="text-wrapper-10">Mar</div>
            <div className="text-wrapper-11">Apr</div>
            <div className="text-wrapper-12">May</div>
            <div className="text-wrapper-13">Jun</div>
            <div className="text-wrapper-14">Jul</div>
            <div className="text-wrapper-15">Aug</div>
            <div className="text-wrapper-16">Sep</div>
            <div className="text-wrapper-17">Oct</div>
            <div className="text-wrapper-18">Nov</div>
            <div className="text-wrapper-19">Dec</div>
            <div className="rectangle" />
            <div className="rectangle-2" />
            <div className="rectangle-3" />
            <div className="rectangle-4" />
            <div className="rectangle-5" />
            <div className="rectangle-6" />
            <div className="rectangle-7" />
            <div className="rectangle-8" />
            <div className="rectangle-9" />
            <div className="rectangle-10" />
            <div className="rectangle-11" />
            <div className="rectangle-12" />
            <div className="group-wrapper">
              <div className="group-7">
                <div className="text-wrapper-20">35%</div>
                <div className="vector-wrapper">
                  <img className="vector" alt="Vector" src={vector2Svg} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="customers">
          <div className="overlap-2">
            <div className="text-wrapper-6">Customers</div>
            <div className="text-wrapper-21">Customers that buy products</div>
            <div className="overlap-group-3">
              <div className="ellipse" />
              <img className="ellipse-2" alt="Ellipse" src={ellipse6Svg} />
              <img className="ellipse-3" alt="Ellipse" src={ellipse7Svg} />
              <p className="element-total-new">
                <span className="text-wrapper-22">
                  65%
                  <br />
                </span>
                <span className="text-wrapper-23">Total New Customers</span>
              </p>
            </div>
          </div>
        </div>
        <div className="product">
          <div className="overlap-3">
            <div className="text-wrapper-24">Product Sell</div>
            <div className="group-8">
              <div className="text-wrapper-25">32 in stock</div>
              <div className="text-wrapper-26">$ 45.99</div>
              <div className="text-wrapper-27">20</div>
              <div className="group-9">
                <div className="text-wrapper-28">Abstract 3D</div>
                <p className="text-wrapper-29">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <img className="img-2" alt="Unsplash eo" src={unsplashWh2fhl0vEoSvg} />
              </div>
            </div>
            <div className="group-10">
              <div className="text-wrapper-28">Sarphens Illustration</div>
              <div className="text-wrapper-25">32 in stock</div>
              <div className="text-wrapper-26">$ 45.99</div>
              <div className="text-wrapper-27">20</div>
              <p className="text-wrapper-29">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img className="img-2" alt="Unsplash namzag" src={unsplashA2jNamzagSvg} />
            </div>
            <div className="group-11">
              <div className="text-wrapper-28">Landing Page 3D max</div>
              <div className="text-wrapper-25">32 in stock</div>
              <div className="text-wrapper-26">$ 45.99</div>
              <div className="text-wrapper-27">20</div>
              <p className="text-wrapper-29">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img className="img-2" alt="Unsplash RAZU" src={unsplashRazuR66vucSvg} />
            </div>
            <div className="group-12">
              <div className="text-wrapper-28">Collab Illustration</div>
              <div className="text-wrapper-25">32 in stock</div>
              <div className="text-wrapper-26">$ 45.99</div>
              <div className="text-wrapper-27">20</div>
              <p className="text-wrapper-29">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <img className="img-2" alt="Unsplash cpccybprf a" src={unsplashCpccybprfASvg} />
            </div>
            <div className="group-13">
              <div className="group-14">
                <div className="text-wrapper-30">Product Name</div>
                <div className="text-wrapper-31">Stock</div>
                <div className="text-wrapper-32">Price</div>
                <div className="text-wrapper-33">Total Sales</div>
              </div>
              <img className="line-3" alt="Line" src={line4Svg} />
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-4">
                <input className="input" placeholder="Search" type={inputType} />
                <img className="search" alt="Search" src={search1_2Svg} />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-4">
                <img className="chevron-down-2" alt="Chevron down" src={chevronDown1Svg} />
                <div className="text-wrapper-35">Last 30 days</div>
              </div>
            </div>
          </div>
        </div>
        <div className="search-2">
          <div className="overlap-5">
            <input className="input" placeholder="Search" type={inputType} />
            <img className="search" alt="Search" src={search1_2Svg} />
          </div>
        </div>
      </div>
      <div className="side-menu">
        <div className="overlap-6">
          <div className="list-menu-wrapper">
            <Link to="/dashboard" className="list-menu">
              <img className="img-3" alt="Icon outline key" src={keysquare} />
              <div className="text-wrapper-36">Dashboard</div>
            </Link>
          </div>
          <div className="list-menu-2">
            <Link to="/product" className="list-menu">
              <img className="img-3" alt="Element square" src={Square1Svg} />
              <div className="text-wrapper-37">Product</div>
              <img className="chevron-right" alt="Chevron right" src={chevronright} />
            </Link>
          </div>
          <div className="list-menu-3">
            <Link to="/customers" className="list-menu">
              <img className="img-3" alt="User square" src={userSquare1Svg} />
              <div className="text-wrapper-37">Customers</div>
              <img className="chevron-right" alt="Chevron right" src={chevronright} />
            </Link>
          </div>
          <div className="list-menu-4">
            <Link to="/income" className="list-menu">
              <img className="img-3" alt="Wallet money" src={walletMoney2Svg} />
              <div className="text-wrapper-37">Income</div>
              <img className="chevron-right" alt="Chevron right" src={chevronright} />
            </Link>
          </div>
          <div className="list-menu-5">
            <Link to="/promote" className="list-menu">
              <img className="img-3" alt="Discount shape" src={discountShape1Svg} />
              <div className="text-wrapper-37">Promote</div>
              <img className="chevron-right" alt="Chevron right" src={chevronright} />
            </Link>
          </div>
          <div className="list-menu-6">
            <Link to="/help" className="list-menu"> {/* Added Link for clickability */}
              <img className="img-3" alt="Message question" src={messageQuestion1Svg} />
              <div className="text-wrapper-37">Help</div>
              <img className="chevron-right" alt="Chevron right" src={chevronright} />
            </Link>
          </div>
          <img className="ellipse-4" alt="Ellipse" src={ellipse8Png} />
          <div className="group-15">
            <div className="overlap-group-5">
              <div className="text-wrapper-38">Evano</div>
              <div className="text-wrapper-39">Project Manager</div>
            </div>
          </div>
          <img className="chevron-down-3" alt="Chevron down" src={chevronDown2Svg} />

          <div className="group-16">
            <div className="text-wrapper-41">Dashboard</div>
            <img className="setting" alt="Setting" src={setting1Svg} />
          </div>
          <div className="text-wrapper-42">v.01</div>
        </div>
      </div>
    </div>
  );
};

Dashboard.propTypes = {
  inputType: PropTypes.string,
};