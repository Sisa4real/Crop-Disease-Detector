import Navbar from '../Navbar'
import { Card } from '../Card'
import ReactJoyride from 'react-joyride'
import bg from '../../assets/tomato-bg.jpeg'

const steps = [
  {
    target: '.navbar',
    content: 'Welcome!! Please spare a minute to learn about our page'
  },
  {
    target: '.dropdown',
    content: 'Click on the dropdown menu to dislay more options'
  },
  {
    target: '.ecosystem',
    content: 'Click here to share information'
  },
  {
    target: '.scan',
    content: 'Click here to scan affected plant'
  },
  {
    target: '.history',
    content: 'Click here to view previously scanned plants'
  },
]

export const Home = () => {
  return (
    <>
      <ReactJoyride
        steps={steps}
        continuous={true}
        styles={{
          options: {
            arrowColor: '#5caeab',
            backgroundColor: '#5caeab',
            overlayColor: 'rgba(92, 174, 171, .3)',
            primaryColor: '#5caeab',
            textColor: '#fff'
          },
          spotlight: {
            backgroundColor: 'transparent'
          }
        }}
        showProgress={true}
        // Add this
        showSkipButton={true}
      />
      <div className=" w-full h-full">
        <img src={bg} alt="background-img" className="absolute h-full w-full top-0 " />
        <Navbar />
        <Card />
      </div>
    </>
  )
}
