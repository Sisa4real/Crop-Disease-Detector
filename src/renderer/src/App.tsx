import bg from './assets/bg.jpg'
import { Link } from 'react-router-dom'
import ABU from './assets/ABU.png'
import logo from './assets/logo.png'
import caretRight from './assets/caret-right.png'

function App() {
  return (
    <div className="min-h-screen flex items-center text-center justify-center">
      <div className="grid grid-cols-2 items-center gap-1">
        <div className="logo">
          <img src={ABU} alt="ABU" width={250} />
        </div>
        <div className="content ">
          <img src={bg} alt="background-img" className="absolute h-full w-full top-0 " />
          <div className="content-part relative ml-10">
            <div className="logo flex flex-col justify-center self-center">
              <img src={logo} alt="" width={110} className="bg-white rounded-full self-center" />
              <h1 className="text-3xl mt-4 font-bold ">CropDiseaseDetector</h1>
            </div>
            <p className="text-gray-300">Your one-stop solution</p>
            <Link to="/home">
              <button className="mt-8 rounded-[5px] bg-[#60941A] px-10 py-4 self-center justify-center">
                
                <p className="flex text-[16px] gap-2 ">
                  Get Started
                  <img src={caretRight} alt="" width={12}/>
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
