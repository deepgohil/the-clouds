import React, { useState } from "react";
import { useSpeechRecognition } from "react-speech-kit";


function SpeechToText() {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });
  return (
    <div className="bg-black min-h-screen ">
   
      <div className="flex flex-col items-center h-[90vh]">
        <h1 className='text-5xl font-semibold my-12 text-white'>Speech To Text</h1>
        <textarea
  className='mb-12 w-[60vw] h-36 px-4 py-2 rounded-lg text-lg text-white bg-[#0F0F0F] border border-white'
  value={value}
  onChange={(event) => setValue(event.target.value)}
/>
        <button className='py-2 px-4 bg-white text-gray-800 text-lg rounded-lg shadow-lg font-semibold border border-gray-800' onMouseDown={listen} onMouseUp={stop}>
          🎤
        </button>
        {listening && <div className='text-3xl font-semibold my-8 text-gray-800'>Go ahead I'm listening</div>}
      </div>
    </div>
  );
}

export default SpeechToText;
