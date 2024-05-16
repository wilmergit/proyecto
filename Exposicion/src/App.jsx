import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './pages/home/Home'
import PrivacyAndCookies from './pages/privacyAndCookies/PrivacyAndCookies'
import Seller from './pages/seller/Seller'
import MemberForm from './pages/memberForm/MemberForm'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cookiesAndPrivacy" element={<PrivacyAndCookies />} />
          <Route path="/seller" element={<Seller />} />
          <Route path="/membership" element={<MemberForm />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
