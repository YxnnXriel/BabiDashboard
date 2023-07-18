import React from 'react'
import '../../components/styles/styles.css'

import '@material-design-icons/font';
import Martin from "../../images/Stunning Straight Hair.jpeg"
import AdutAkech from "../../images/adut akech.jpeg"

const Dashboard = () => {
  return (

    <>
      <main>

        <h1>Dashboard</h1>

        <div className="date">
          <input type="date" />
        </div>


        <div class="insights">
          <div class="sales">
            <span class="material-icons-sharp">analytics</span>
            <div class="middle">
              <div class="left">
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy='38' r='36'></circle>
                </svg>
                <div class="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small class="text-muted" >Last 24 Hours</small>
          </div>

          <div class="expenses">
            <span class="material-icons-sharp">bar_chart</span>
            <div class="middle">
              <div class="left">
                <h3>Total Expenses</h3>
                <h1>$14,124</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy='38' r='36'></circle>
                </svg>
                <div class="number">
                  <p>61%</p>
                </div>
              </div>
            </div>
            <small class="text-muted" >Last 24 Hours</small>
          </div>

          <div class="income">
            <span class="material-icons-sharp">stacked_line_chart</span>
            <div class="middle">
              <div class="left">
                <h3>Total Income</h3>
                <h1>$9,124</h1>
              </div>
              <div class="progress">
                <svg>
                  <circle cx="38" cy='38' r='36'></circle>
                </svg>
                <div class="number">
                  <p>12%</p>
                </div>
              </div>
            </div>
            <small class="text-muted" >Last 24 Hours</small>
          </div>
        </div>



        <div class="recent-orders">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>
              <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>                            <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>                            <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>                            <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>                            <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>                            <tr>
                <td>Foldables Mini Drone</td>
                <td>85512</td>
                <td>Due</td>
                <td class="warning" >Pending</td>
                <td>Details</td>
              </tr>
            </tbody>
          </table>
          <a href="#">show all</a>
        </div>
      </main>



      <div class="right">

        <div class="top">
          <button id="menu-btn" >
            <span class="material-icons-sharp">menu</span>
          </button>
          <div class="theme-toggler">
            <span class="material-icons-sharp active">light_mode</span>
            <span class="material-icons-sharp">dark_mode</span>
          </div>
          <div class="profile">
            <p>Hey, <b>Ariel</b></p>
            <small class="text-muted" >Admin</small>
          </div>
          <div class="profile-photo">
            <img src={AdutAkech} alt="" />
          </div>
        </div>

        <div class="recent-updates">
          <h2>Recent Update</h2>
          <div class="updates">
            <div class="update">
              <div class="profile-photo">
                <img src={Martin} alt="" />
              </div>
              <div class="message">
                <p><b>Martin</b> viens de recevoir sa livraison</p>
                <small class="text-muted" >1 minutes</small>
              </div>
            </div>

            <div class="update">
              <div class="profile-photo">
                <img src={Martin} alt="" />
              </div>
              <div class="message">
                <p><b>Martin</b> viens de recevoir sa livraison</p>
                <small class="text-muted" >1 minutes</small>
              </div>
            </div>

            <div class="update">
              <div class="profile-photo">
                <img src={Martin} alt="" />
              </div>
              <div class="message">
                <p><b>Martin</b> viens de recevoir sa livraison</p>
                <small class="text-muted" >1 minutes</small>
              </div>
            </div>
          </div>
        </div>

        <div class="sales-analytics">
          <h2>Sales Analytics</h2>

          <div class="item online" >
            <div class="icon">
              <span class="material-icons-sharp">shopping_cart</span>
            </div>
            <div class="right">
              <div class="info">
                <h3>OLINE ORDERS</h3>
                <small class="text-muted" >Last 24 Hours</small>
              </div>
              <h5 class="success">+39%</h5>
              <h3>3890</h3>
            </div>
          </div>

          <div class="item offline" >
            <div class="icon">
              <span class="material-icons-sharp">local_mall</span>
            </div>
            <div class="right">
              <div class="info">
                <h3>OFFLINE ORDERS</h3>
                <small class="text-muted" >Last 24 Hours</small>
              </div>
              <h5 class="danger">-18%</h5>
              <h3>2676</h3>
            </div>
          </div>

          <div class="item customers" >
            <div class="icon">
              <span class="material-icons-sharp">person</span>
            </div>
            <div class="right">
              <div class="info">
                <h3>NEW CUSTOMERS</h3>
                <small class="text-muted" >Last 24 Hours</small>
              </div>
              <h5 class="success">+25%</h5>
              <h3>840</h3>
            </div>
          </div>

          <div class="item add-product">
            <span class="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </div>
        </div>
      </div>

    </>
  )
}

export default Dashboard
