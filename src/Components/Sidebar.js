import React from 'react'
import 'remixicon/fonts/remixicon.css'
import'./Sidebar.css'
import Cookies from 'js-cookie'
import { Link, useNavigate } from 'react-router-dom'

function Sidebar() {
 
  const navigate=useNavigate();
  // const token = Cookies.get('jwtAuth');
  const handleLogout =(e)=>{
    e.preventDefault();
    Cookies.remove('jwtAuth');
    navigate('/auth')

  }

  return (
    <div>
      <section className='sidebar_component sticky-top'>
        <div className='container-fluid pl-5 pt-5'>
            <div className='sidebar_content'>
              <p><i class="ri-home-8-fill pr-3"></i><Link to={'/'}>Home</Link></p>
            </div>
            <div className='sidebar_content'>
            <p><i class="ri-discord-fill pr-3"></i><Link to={'/gaming'}>Gaming</Link></p>
            </div>
            <div className='sidebar_content'>
            <p><i class="ri-fire-fill pr-3"></i><Link to={'/trending'}>Trending </Link></p>
            </div>
            <div className='sidebar_content'>
            <p><i class="ri-save-fill pr-3"></i>Saved</p>
            </div>
        </div>
        <br/>
        <br/>
        {/* <div class="container ">
        <button id="logoutBtn" class="btn btn-danger">
         <span style={{ color: "white" }}>Logout</span></button>
        </div> */}
        <div className='sidebar_content' onClick={handleLogout}>
          <p>
            <i className='ri-logout-box-line pr-'></i>Logout
          </p>

        </div>
      </section>
    </div>
  )
}

export default Sidebar
