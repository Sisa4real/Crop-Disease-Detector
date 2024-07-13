import React, { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { useLocation } from 'react-router-dom';
 
interface Audio {
  title: string;
  src: string;
}
 
import audioData from '../../assets/audioData.json';
 
export const Solution: React.FC = () => {
  const location = useLocation();
  const { responseData } = location.state;
  const { disease_name, fungicide_application, resistant_varieties, sanitation, monitoring } =
    responseData;
 
  const [currentAudio, setCurrentAudio] = useState<string | null>(null);
 
  useEffect(() => {
    // Map disease names to corresponding audio files
    const audioMapping: Record<string, string> = {
      'Maize Cercospora Leaf Spot': 'MaizeCercosporaLeafSpot.mp3',
      'Maize Common Rust': 'MaizeCommonRust.mp3',
      'Maize Northern Leaf Blight': 'MaizeNorthernLeafBlight.mp3',
      'Tomato Bacterial Spot': 'TomatoBacterialSpot.mp3',
      'Tomato Early Blight': 'TomatoEarlyBlight.mp3',
      'Tomato Leaf Mold': 'TomatoLeafMold.mp3',
      'Tomato Septoria Leaf Spot': 'TomatoSeptoriaLeafSpot.mp3',
      'Tomato Spider Mites': 'TomatoSpiderMites.mp3',
      'Tomato Target Spot': 'TomatoTargetSpot.mp3',
      'Tomato Mosaic Virus': 'TomatoMosaicVirus.mp3',
      'Tomato Yellow Leaf Curl Virus': 'TomatoYellowLeafCurlVirus.mp3',
    };
 
    // Find the corresponding audio file based on the disease name
    const matchingAudio = audioMapping[disease_name];
    setCurrentAudio(matchingAudio || null);
  }, [disease_name]);
 
  return (
    <div className="container mx-auto mt-10 px-4">
      <h1 className="text-3xl font-bold mb-4 text-black">{disease_name}</h1>
      {currentAudio && (
        <ReactAudioPlayer
          src={currentAudio}
          controls
          onPlay={() => console.log('Audio started playing')}
          onPause={() => console.log('Audio paused')}
          onEnded={() => console.log('Audio finished playing')}
          style={{ width: '100%', background: '#f0f0f0', color: 'black', border: '1px solid #ccc' }}
        />
      )}
      <div className="bg-gray-100 p-6 rounded-md">
        <h2 className="text-xl font-semibold mb-2 text-black">Fungicide Application:</h2>
        <p>{fungicide_application}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Resistant Varieties:</h2>
        <p>{resistant_varieties}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Sanitation:</h2>
        <p>{sanitation}</p>
      </div>
      <div className="bg-gray-100 p-6 rounded-md mt-4">
        <h2 className="text-xl font-semibold mb-2">Monitoring:</h2>
        <p>{monitoring}</p>
      </div>
    </div>
  );
};