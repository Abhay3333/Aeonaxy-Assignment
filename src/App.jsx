// import { useState } from 'react'
// import {createBrowserRouter, createRoutesFromElements, RouterProvider, Route} from 'react-router-dom'
// import FirstPage from './Pages/firstPage'
// import SecondPage from './Pages/secondPage'
// import ThirdPage from './Pages/thirdPage'
// import FourthPage from './Pages/fourthPage'
// import FifthPage from './Pages/fifthPage'
// import LastPage from './Pages/lastPage'

// function App() {

//   const Router = createBrowserRouter(
//     createRoutesFromElements(
//       <>
//       <Route path='' element={<FirstPage />} />
//       <Route path='secondPage' element={<SecondPage />} />
//       <Route path='thirdPage' element={<ThirdPage />} />
//       <Route path='fourthPage' element={<FourthPage />} />
//       <Route path='fifthPage' element={<FifthPage />} />
//       <Route path='lastPage' element={<LastPage />} />
//       </>
//     )
//   )

//   return (
//     <>
//       <RouterProvider router={Router} />
//     </>
//   )
// }

// export default App

import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import FirstPage from './Pages/firstPage'
import SecondPage from './Pages/secondPage'
import ThirdPage from './Pages/thirdPage'
import FourthPage from './Pages/fourthPage'
import FifthPage from './Pages/fifthPage'
import LastPage from './Pages/lastPage'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='secondPage' element={<SecondPage />} />
        <Route path='thirdPage' element={<ThirdPage />} />
        <Route path='fourthPage' element={<FourthPage />} />
        <Route path='fifthPage' element={<FifthPage />} />
        <Route path='lastPage' element={<LastPage />} />
      </Routes>
    </Router>
  )
}

export default App