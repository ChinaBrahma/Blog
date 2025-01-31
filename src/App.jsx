import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from './appwrite/auth'
import { useEffect } from 'react'
import { login, logout } from './store/authSlice'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'


function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
      .then((userData) => {
        console.log(userData)
        if (userData) {
          dispatch(login({ userData }))
        } else {
          dispatch(logout())
        }
      }).catch((error) => {
        console.log('Error :: useEffect ')
      })
      .finally(() => setLoading(false))

  }, [])

  return !loading ? (
    <div className='min-h-sc flex flex-wrap content-between 
        bg-gray-400'>
      <div className='w-full-block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <div>Bro Not fine</div>
  )


}

export default App
