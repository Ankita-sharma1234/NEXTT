import React from 'react';
import Link from 'next/link'
function Header(){
    return(
        <div>
          <Nav className="me-auto">
            <Link href="/home">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/service">Services</Link>
            <Link href="/contact">Contact</Link>
            
            
          </Nav>
        </div>
    )
}
export default Header;