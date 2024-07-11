import { Link } from 'react-router-dom'
import history from '../assets/history.png'
import upload from '../assets/upload.png'
import capture from '../assets/capture.png'

export const Card = () => {
  return (
    <div className="m-10 flex justify-center items-center relative">
      <div className="flex gap-8">
        <Link to="/ecosystem" className="justify-center ecosystem">
          <div className="w-36 h-40 bg-gray-100 rounded-lg shadow-md p-4 flex flex-col items-center justify-center">
            <img src={upload} alt="upload" width={80} className="bg-[#60941A] p-6 rounded-full" />
            <h2 className="text-black text-center">Upload New Disease</h2>
          </div>
        </Link>
        <Link to="/scan" className="justify-center scan">
          <div className="bg-gray-100 text-white rounded-lg shadow-md flex flex-col items-center justify-end w-64 h-56">
            <img src={capture} alt="" width={80} className="mb-10" />
            <p className="bottom-0 w-full bg-[#60941A] text-center p-2 h-12 rounded font-bold justify-end text-[16px]">
              Scan Your Crop
            </p>
          </div>
        </Link>
        <Link to="/history" className="justify-center history">
          <div className="w-36 h-40 bg-gray-100 text-white rounded-lg shadow-md flex flex-col items-center justify-center">
            <img src={history} alt="upload" width={80} className="bg-[#60941A] p-6 rounded-full" />
            <h2 className="text-black mt-2">History</h2>
          </div>
        </Link>
      </div>
    </div>
  )
}
