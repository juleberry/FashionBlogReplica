import React from 'react'
export default function Footer (props) {

  return (
    <>
    <footer>
    <div>Home</div>
    <div>Women's</div>
    <div>Men's</div>
    <div>On the Street</div>
    <div>The Catwalk</div>
    <div>AdWatch</div>
    <div>About</div>
    <div>Tips</div>
    </footer>
    <p id="companyInfo">&copy; {new Date().getFullYear()} Valet Industries, Inc</p>
    </>
  )
}