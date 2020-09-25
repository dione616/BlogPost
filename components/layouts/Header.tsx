import React from "react"
import Link from "next/link"
import styled from "styled-components"

const Nav = styled.div`
  background: red;
  width: 300px;
  position: fixed;
  height: 100vh;
  z-index: 9999;
  top: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  overflow: hidden;
  vertical-align: middle;
  width: 300px;
  min-height: 100vh;
  background-color: transparent;
  position: fixed;
  z-index: 102;
  left: 0;
  -webkit-overflow-scrolling: touch;
`

const NavSection = styled.div`
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
`

const NavUl = styled.div`
  margin-top: 50%;
  display: block;
`
const NavUlLI = styled.div`
  text-align: center;
  margin: 30px;
`

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
