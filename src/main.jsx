import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.jsx'
import './index.css'
import App from './App.jsx'
import Downbar from './components/downbar.jsx'
import Middle from './components/middle.jsx'
import Next from './components/next.jsx'
import Footer from './components/footer.jsx'

createRoot(document.getElementById('root')).render(
  <div>
<Navbar/>
<div className='bg-gradient-to-r from-white via-blue-200 to-blue-300'>
<Middle/>
<hr className='h-[0.25vh] w-[95vw] mt-4 bg-slate-900 ml-5' />

<Downbar/>
<Next/>
<Footer/>
</div>
  </div>
)
