import React from "react"
import Link from "next/link"

const Header = (props) => {
  return (
    <header>
      <div className="wrapper">
        <div className="nav_section">
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <a>
                    <i className="fas fa-home"></i>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/posts/[new]" as="/posts/new">
                  <a>
                    <i className="fas fa-plus-square"></i>
                  </a>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
