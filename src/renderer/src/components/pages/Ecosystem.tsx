import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const Ecosystem = () => {
  const [capturedImage, setCapturedImage] = useState('')

  useEffect(() => {
    // Retrieve the captured image from local storage
    const imageFromStorage = localStorage.getItem('capturedImage')
    setCapturedImage(imageFromStorage || '')
  }, [])

  const sendToGoogleDrive = () => {
    // Implement function to send the image to Google Drive
    // Example:
    // sendImageToGoogleDrive(capturedImage);
  }

  return (
    <div className="h-full w-full bg-green-600">
      <div className="text-center">
        <h1 className="pt-6 text-2xl text-white">Ecosystem</h1>
        <p className="mt-12">Send Captured image for further evaluation</p>

        <button className="btn btn-primary mt-3" onClick={sendToGoogleDrive}>
          Send Image
        </button>
      </div>
      <button className="absolute right-5 top-5 rounded-full bg-green-800 p-4">
        <Link to="/home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </button>
    </div>
  )
}
