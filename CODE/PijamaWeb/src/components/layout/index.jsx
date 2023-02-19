import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header'
import { Container, CssBaseline } from "@mui/material"
const Layout = (props) => {
   return (
      <div>
         {/* <CssBaseline />
         <Header />
         <Container> */}
            {props.childrend}

         {/* </Container>
         <Footer /> */}
      </div>
   )
}

export default Layout