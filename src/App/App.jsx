import React from 'react'
import Navbar from '../components/Shared/Navbar/Navbar'
import Footer from '../components/Shared/Footer/Footer'
import Home from '../components/Home/Home'
import AppContext from './AppContext'
import useData from '../hooks/data'
import { Spinner, Center } from '@chakra-ui/react'
function App() {
  const [data, loading] = useData()
  if (loading)
    return (
      <Center>
        <Spinner />
      </Center>
    )

  return (
    <AppContext.Provider value={data}>
      <Navbar />
      <Home />
      <Footer />
    </AppContext.Provider>
  )
}

export default App
