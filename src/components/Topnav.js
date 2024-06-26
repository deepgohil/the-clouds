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
  const tabs = ['Extension','Groups']; // Update as necessary
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
