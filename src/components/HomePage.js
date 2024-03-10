import React from 'react';

function CompleteComponent() {
  const handleDownload = () => {
    // Define your S3 URL here
    const s3Url = 'https://audiodeepfile.s3.ap-south-1.amazonaws.com/colourblind.zip';
    // Trigger the download
    window.open(s3Url, '_blank');
  };
  const handleDownload1 = () => {
    // Define your S3 URL here
    const s3Url = 'https://audiodeepfile.s3.ap-south-1.amazonaws.com/finall.zip';
    // Trigger the download
    window.open(s3Url, '_blank');
  };

  const movingGradientText = {
    background: 'linear-gradient(90deg, rgba(29,78,216,1) 0%, rgba(220,38,38,1) 50%, rgba(129,0,255,1) 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    animation: 'movingGradient 3s linear infinite',
    display: 'inline',
    backgroundSize: '200% auto',
  };

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black text-white ">
      <div className="container mx-auto p-10 border border-white">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl" style={movingGradientText}>
              Simplifying the web for differently-abled individuals
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
            Download our chrome extension to enhance accessibility and improve reading
            </p>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="text-lg bg-white font-bold hover:bg-[#EEEEEE] text-black py-3 px-6 border hover:border-transparent rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
              onClick={handleDownload}
              type="button"
            >
              Download(Colour blindness)
            </button>
            <button
              className="text-lg bg-white font-bold hover:bg-[#EEEEEE] text-black py-3 px-6 border hover:border-transparent rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1"
              onClick={handleDownload1}
              type="button"
            >
              Download(OCD)
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CompleteComponent;
