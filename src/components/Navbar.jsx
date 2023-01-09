import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className="tabs flex justify-center">
              <Link to='explorer' className="tab tab-lg tab-lifted tab-active">Explorer</Link>
              <Link to='history' className="tab tab-lg tab-lifted">History</Link>
      </div>
    </div>
  )
}

export default Navbar