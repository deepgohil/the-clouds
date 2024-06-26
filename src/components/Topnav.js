// import React, { useState } from 'react';
// import { CSSTransition, SwitchTransition } from 'react-transition-group';
// import './TabTransition.css'; // Make sure to create this CSS file
// import Groups from './Groups';
// import Login from './Login';
// import TextToSpeech from './TextTospeech';
// import SpeechToText from './Speechtotext';
// import HomePage from './HomePage';

// const TabContent = ({ activeTab }) => {
//   switch (activeTab) {
//     case 'Extension':
//       return <HomePage/>;
//     case 'TextToSpeech':
//       return <TextToSpeech/>;
//     case 'SpeechToText':
//       return <SpeechToText/>;
//     case 'Login':
//       return <div>Login form goes here.</div>;
//     case 'Sign Up':
//       return <div>Sign Up form goes here.</div>;
//     default:
//       return <div>Content goes here.</div>;
//   }
// };

// export default function TabNavigation() {
//   const [activeTab, setActiveTab] = useState('Features');

//   const tabs = ['Extension', 'TextToSpeech', 'SpeechToText', 'Scheduling'];
//   const userName = "Deep gohil"; // Example user name
//   const userImage = "https://example.com/path/to/user/image.jpg"; // Placeholder user image URL
//   const [notification, setNotification] = useState(true); // Default is true to show the notification indicator

//   const handleNotificationClick = () => {
//     setNotification(!notification); // Toggle notification state
//   };
//   return (
//     <div className="bg-[#0F0F0F] pt-6">
//  <div className="ml-5 flex justify-between items-center bg-[#0F0F0F]">
//       <div className="flex items-center">
//         {/* Logo Placeholder - replace with your logo */}
//         <div className="mr-4">
//           <img src="https://audiodeepfile.s3.ap-south-1.amazonaws.com/grad.jpg" alt="User" className="h-8 w-8 rounded-full object-cover" />
//         </div>
//         <span className="text-white text-lg font-semibold">{userName}</span>
//         <div className="ml-4" onClick={handleNotificationClick}>
//         <svg className="h-6 w-6 text-white relative cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.437L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
//           {notification && <circle cx="18" cy="6" r="5" fill="red" />}
//         </svg>
//         </div>
//       </div>
      
   
      
//     </div>
      // <div className="bg-[#0F0F0F] shadow">
      //   <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      //     <div className="flex justify-center border-b border-gray-800 text-lg sm:text-xl lg:text-2xl">
      //       {tabs.map((tab) => (
      //         <button
      //           key={tab}
      //           onClick={() => setActiveTab(tab)}
      //           className={`py-4 px-6 lg:px-8 block hover:text-gray-400 focus:outline-none ${
      //             activeTab === tab ? 'text-white border-b-2 font-medium border-white' : 'text-gray-500'
      //           } transition duration-150 ease-in-out transform hover:scale-105`}
      //         >
      //           {tab}
      //         </button>
      //       ))}
      //     </div>
      //   </div>
//       </div>
//       <SwitchTransition mode="out-in">
//         <CSSTransition
//           key={activeTab}
//           addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
//           classNames="fade"
//         >
//           <div>
//             <TabContent activeTab={activeTab} />
//           </div>
//         </CSSTransition>
//       </SwitchTransition>
//     </div>
//   );
// }


import React, { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import './TabTransition.css'; // Ensure this CSS file exists with transition styles
import HomePage from './HomePage';

import DisabilityForm from './DisabilityForm';
// Import additional components as necessary

const TabContent = ({ activeTab }) => {
  switch (activeTab) {
    case 'Extension':
      return <HomePage />;
    case 'Groups':
      // Placeholder for the Login component
      return <DisabilityForm/>;
    case 'Sign Up':
      // Placeholder for the Sign Up component
      return <div>Sign Up form goes here.</div>;
    default:
      return <div>Content goes here.</div>;
  }
};

export default function TabNavigation() {
  // 'Extension' is set as the default active tab
  const [activeTab, setActiveTab] = useState('Extension');
  const tabs = ['Extension','Groups', 'TextToSpeech', 'SpeechToText']; // Update as necessary
  const userName = "Deep Gohil"; // Example username
  const [notification, setNotification] = useState(true); // Notification state

  const handleNotificationClick = () => {
    setNotification(!notification); // Toggle notification visibility
  };

  return (
    <div className="bg-black">

      <div className="bg-[#0F0F0F] shadow">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center border-b border-gray-800">
            {tabs.map((tab) => (
              <button
  key={tab}
  onClick={() => setActiveTab(tab)}
  className={`py-4 px-6 block hover:text-gray-400 focus:outline-none text-xl ${
    activeTab === tab ? 'text-white border-b-2 font-medium border-white' : 'text-gray-500'
  }`}
>
  {tab}
</button>

            ))}
          </div>
        </div>
      </div>
      <SwitchTransition mode="out-in">
        <CSSTransition
          key={activeTab}
          addEndListener={(node, done) => node.addEventListener("transitionend", done, false)}
          classNames="fade"
        >
          <div className="py-4">
            <TabContent activeTab={activeTab} />
          </div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
}
