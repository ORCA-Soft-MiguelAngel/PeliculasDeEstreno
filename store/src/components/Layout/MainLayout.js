import React from "react"
import { Container } from "react-bootstrap"
import Header from "./Header"
import Footer from "./Footer"


const MainLayout = ({ children }) => {
  return (
    <>
      <Container className="pt-3">
        <Header />
      </Container>
      <Container fluid className="p-0">
        {children}
      </Container>
        <Footer />
    </>
  )
}

export default MainLayout
