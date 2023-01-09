import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation();
  return (
    <div>
        <div className="tabs flex justify-center">
              <Link to='../../explorer' className={`tab tab-lg tab-lifted ${location.pathname!=='/history'?'tab-active':''}`}>Explorer</Link>
              <Link to='../../history' className={`tab tab-lg tab-lifted ${location.pathname==='/history'?'tab-active':''}`}>History</Link>
        </div>
    </div>
  )
}

export default Navbar