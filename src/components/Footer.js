import React from 'react'
export default function Footer (props) {

  return (
    <>
    <footer>
      <nav aria-label="Main Navigation" role="navigation">
        <ul id="footerLinks">
          <li><a href="#">Home</a></li>
          <li><a href="#">Women's</a></li>
          <li><a href="#">Men's</a></li>
          <li><a href="#">On the Street</a></li>
          <li><a href="#">The Catwalk</a></li>
          <li><a href="#">AdWatch</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Tips</a></li>
        </ul>
      </nav>
    </footer>
    <p id="companyInfo">&copy; {new Date().getFullYear()} Valet Industries, Inc</p>
    </>
  )
}