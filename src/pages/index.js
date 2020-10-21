import React from "react"
import {Link} from 'gatsby'
import Navbar from '../components/Navbar'

export default function Home() {
  return <div>Hello world!
    <div>
      <Navbar></Navbar>
      <Link to="/blog/">blog page</Link>
    </div>
  </div>
}
