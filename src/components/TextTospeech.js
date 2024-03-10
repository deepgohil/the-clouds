import { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";


const TextToSpeech = () => {
  const [text, setText] = useState("");
  const { speak } = useSpeechSynthesis();
  const handleClick = () => {
    speak({ text: text });
  };
  return (
    <div className="bg-black min-h-screen">
     
      <div className="flex flex-col items-center h-[90vh]">
        <h1 className='text-5xl font-semibold my-12 text-white'>Text To Speech</h1>
        <textarea
          className='mb-12 w-[60vw] h-36 px-4 py-2 rounded-lg text-lg text-white bg-[#0F0F0F] border border-white'
          rows='10'
          onChange={(text) => setText(text.target.value)}
          value={text}
        ></textarea>
             <button className='py-2 px-4 bg-white text-gray-800 text-lg rounded-lg shadow-lg font-semibold border border-gray-800' >
          🎤
        </button> </div>
    </div>
  );
};

export default TextToSpeech;
