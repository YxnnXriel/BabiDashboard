import React, { useState } from 'react'
import '../../components/styles/styles.css'
import { Link } from 'react-router-dom';
import BabiLogo from "../../images/HM_Icon_Insurrectionist.png"


import '@material-design-icons/font';
const Sidebar = () => {

    const [active, setActive] = useState('grid_view')

    const onClick = (text) => {
        setActive(text)
    }

    return (
        <>

            <aside>

                <div className="top">
                    <div className="logo">
                        <img src={BabiLogo} alt="" />
                        <h2>BA<span className="danger">BI</span></h2>
                    </div>

                    <div className="close" id="close-btn">
                        <span class="material-icons-sharp">close</span>
                    </div>
                </div>

                <div className="sidebar">
                    <Link to={'/dashboard'} onClick={() => onClick("grid_view")} className={active === 'grid_view' ? 'active' : ''}>
                        <span className="material-icons-sharp">grid_view</span>
                        <h3>Dashboard</h3>
                    </Link>

                    <Link to={'/New'} onClick={() => onClick("person")} className={active === 'person' ? 'active' : ''}>
                        <span className="material-icons-sharp">add</span>
                        <h3>Nouveau</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("receipt_long")} className={active === 'receipt_long' ? 'active' : ''}>
                        <span className="material-icons-sharp">receipt_long</span>
                        <h3>Orders</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("insights")} className={active === 'insights' ? 'active' : ''}>
                        <span className="material-icons-sharp">insights</span>
                        <h3>Analytics</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("mail_outline")} className={active === 'mail_outline' ? 'active' : ''}>
                        <span className="material-icons-sharp">mail_outline</span>
                        <h3>Messages</h3>
                        <span className="message-count">
                            05
                        </span>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("inventory")} className={active === 'inventory' ? 'active' : ''}>
                        <span className="material-icons-sharp">inventory</span>
                        <h3>Products</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("report_gmailerrorred")} className={active === 'report_gmailerrorred' ? 'active' : ''} >
                        <span className="material-icons-sharp">report_gmailerrorred</span>
                        <h3>Reports</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("settings")} className={active === 'settings' ? 'active' : ''}>
                        <span className="material-icons-sharp">settings</span>
                        <h3>Settings</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("add")} className={active === 'add' ? 'active' : ''} >
                        <span className="material-icons-sharp">add</span>
                        <h3>Add Product</h3>
                    </Link>

                    <Link to={'/dashboard'} onClick={() => onClick("logout")} className={active === 'logout' ? 'active' : ''}>
                        <span className="material-icons-sharp">logout</span>
                        <h3>logout</h3>
                    </Link>
                </div>
            </aside>            
        </>


    )
}

export default Sidebar
