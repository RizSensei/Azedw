import React from 'react'
import Layout from '../../components/Layout/Layout'
import Topbar from '../../components/Topbar/Topbar'
import { Box } from '@mui/material'
import ShippingDetails from './ShippingDetails'
import OrderSummary from './OrderSummary'

const Checkout = () => {
  return (
    <Layout>
        <Topbar text="CheckOut"/>
        <Box sx={{ py:10, px:7,  display:'flex', columnGap:5 }}>
          <ShippingDetails/>
          <OrderSummary/>
        </Box>

    </Layout>
  )
}

export default Checkout