import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"

function Navbar(){
    var location = useLocation()
    var url = location.pathname.split("/")[1]
    const { currentUser,logout } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = async(e)=>{
      e.preventDefault()
      try{
        await logout()
        navigate("/")
      }catch(error){
        console.log(error)
      }
    }
    // console.log()
    return(<>
       {/* <!-- Nav Bar Start --> */}
       <div className="my-primary" style={{position:"sticky",top:"0px",zIndex:"999"}}>
       <div className="container-lg">
            <nav className="navbar navbar-expand-md navbar-dark">
            <div className="container-fluid">
              <center>    
              <div className="navbar-brand">
                <img src="./logo7.png" style={{width:"50px"}} alt="" />
                <h1 style={{fontSize:"10px"}} className="my-text fw-bold  m-0 p-0">Khadija Charity Foundation</h1>
              </div>
              </center>
              <button className="navbar-toggler"  type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdownDemo02" aria-controls="navbarNavDropdownDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNavDropdownDemo02" >
                <ul className="navbar-nav w-100" >
                  {currentUser?
                    currentUser.user_type==="Admin" || currentUser.user_type === "Super Admin"?
                     <li className="nav-item">
                      <Link className={url==="profile"? "nav-link a1":"nav-link"} aria-current="page"  to="/profile">Profile</Link>
                    </li>
                    :null
                    :null
                }
                  <li className="nav-item">
                    <Link className={url===""? "nav-link a1":"nav-link"} aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={url==="people"? "nav-link a1":"nav-link"} aria-current="page" to="/people">Features</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={url==="about"? "nav-link a1":"nav-link"} aria-current="page" to="/about">About</Link>
                  </li>
                  <li className="nav-item">
                    <Link className={url==="contact"? "nav-link a1":"nav-link"} data-bs-dismiss="collapse" aria-current="page" to="/contact">Contact</Link>
                  </li>
                  {currentUser? 
                  currentUser.user_type==="Admin" || currentUser.user_type==="Super Admin"?
                    <li className="nav-item">
                      <Link className={url==="dashboard"? "nav-link a1":"nav-link"} aria-current="page" to="/dashboard/home">Dashboard</Link>
                    </li>:
                    null
                    :null
                  
                  }
                    {currentUser?
                    <>
                  <li className="nav-item" style={{position:"absolute",right:"10px",fontWeight:"700",fontSize:"20px"}}>
                    <Link className={url==="login"? "nav-link a1":"nav-link"} aria-current="page" to="/" onClick={handleLogout}>Logout</Link>
                  </li>
                    </>
                    :
                  <li className="nav-item" style={{position:"absolute",right:"10px",fontWeight:"700",fontSize:"20px"}}>
                    <Link className={url==="login"? "nav-link a1":"nav-link"} aria-current="page" to="/login">Login</Link>
                  </li>
                    }
                
                </ul>
              </div>
            </div>
          </nav>
       </div>
       </div>
  
          {/* <!-- Nav Bar End --> */}
    </>)
  }