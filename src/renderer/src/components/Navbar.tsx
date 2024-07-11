import Logo from '../assets/logo.png'
import help from '../assets/help.svg'
import about from '../assets/about.svg'
import { Link } from 'react-router-dom'
import menu from '../assets/menu.png'
import notification from '../assets/notification.png'

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 bg-transparent rounded-md relative">
      <div className="navbar-start">
        <img src={Logo} alt="logo" width={50} height={40} className='bg-white rounded-full' />
      </div>
      <div className="navbar-center flex-col ">
        <a className="btn btn-ghost text-xl text-white">CropDiseaseDetector</a>
        <p className=''>your one-step solution</p>
      </div>
      <div className="navbar-end">
        
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1 one">
            <img src={menu} width={20} alt="" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 bg-green-500 "
          >
            <li className='about'>
              <Link to="/about" className="flex gap-3 about">
                <img src={about} alt="logo" width={30} height={25} className='ml-3' />
                <p>About</p>
              </Link>
            </li>
            <li>
              <Link to="/help-center" className="flex gap-3 help">
                <img src={help} alt="logo" width={30} height={25} />
                <p>Help</p>
              </Link>
            </li>
            <li>
              <Link to="/help-center" className="flex gap-3 notif">
                <img src={notification} alt="logo" width={30} height={25} />
                <p> Notifications</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="navbar-end">
        <button className="btn btn-ghost btn-circle about">
          <Link to="/about">
            <img src={about} alt="logo" width={30} height={25} />
          </Link>
        </button>
        <button className="btn btn-ghost btn-circle help">
          <Link to="/help-center">
            <div className="indicator">
              <img src={help} alt="logo" width={30} height={25} />
            </div>
          </Link>
        </button>
      </div> */}
    </div>
  )
}

export default Navbar
