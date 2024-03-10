import React from 'react';

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-white"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  );
}

function CheckCircleIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-4 h-4 text-white"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  );
}

export default function Component() {
  const roomNames = ['Travel Wanderers', 'All friends', 'Education Reformers', 'Simple gamers'];
  const imageSources = [
    'https://audiodeepfile.s3.ap-south-1.amazonaws.com/exploring.jpg',
    'https://audiodeepfile.s3.ap-south-1.amazonaws.com/meeting.jpg',
    'https://audiodeepfile.s3.ap-south-1.amazonaws.com/study.jpg',
    'https://audiodeepfile.s3.ap-south-1.amazonaws.com/game.jpg',
  ];

  return (
    <div className="justify-center min-h-screen bg-black p-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {roomNames.map((name, i) => (
          <div key={i} className="overflow-hidden rounded-lg shadow-md bg-[#0F0F0F] border border-white">
            <div className="p-4">
              <img
                alt={`${name}`}
                className="aspect-video overflow-hidden rounded-lg object-cover"
                src={imageSources[i]}
                width="400"
                height="225"
              />
            </div>
            <div className="p-4">
              <div className="grid gap-1.5">
                <h3 className="text-lg font-bold leading-none text-white">{`${name}`}</h3>
             
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              
              <button className="px-4 py-2 text-sm font-medium text-black bg-white border border-black rounded hover:bg-gray-200 focus:outline-none">View</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
