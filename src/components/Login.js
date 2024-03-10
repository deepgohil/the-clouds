// import React from 'react';

// export default function Login() {
//   return (
//     // Flex container to center the card vertically and horizontally
//     <div className="flex items-center justify-center min-h-screen bg-black">
//       <div className="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
//         <div className="px-8 py-6">
//           <h2 className="text-3xl font-bold text-black text-center">Login</h2>
//           <p className="mt-2 text-lg text-[#191919] text-center">Enter your email below to login to your account.</p>
//         </div>
//         <div className="px-8 py-6 space-y-6">
//           <div className="space-y-3">
//             <label htmlFor="email" className="block text-xl font-medium text-black">Email</label>
//             <input id="email" type="email" required placeholder="m@example.com" className="block w-full px-5 py-3 mt-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"/>
//           </div>
//           <div className="space-y-3">
//             <label htmlFor="password" className="block text-xl font-medium text-black">Password</label>
//             <input id="password" type="password" required className="block w-full px-5 py-3 mt-2 text-xl text-gray-700 bg-white border border-gray-300 rounded-md focus:border-gray-500 focus:outline-none focus:ring"/>
//           </div>
//         </div>
//         <div className="flex items-center justify-center px-8 py-6">
//           <button className="px-6 py-3 text-xl font-medium text-white bg-black rounded-md hover:bg-[#191919] focus:outline-none focus:bg-black">Sign in</button>
//         </div>
//       </div>
//     </div>
//   );
// }


import React, { useState } from 'react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);

    // Simulate a login request
    setTimeout(() => {
      // After the "login" process is finished, stop the loading
      setIsLoading(false);
    }, 2000); // Simulate a 2-second loading process
  };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
    <div className="max-w-md w-full bg-[#0F0F0F] rounded-lg shadow-md overflow-hidden border border-white">
    <div className="px-8 py-6">
        <h2 className="text-3xl font-bold text-white text-center">Login</h2>
        <p className="mt-2 text-lg text-gray-100 text-center">Enter your email below to login to your account.</p>
    </div>
    <div className="px-8 py-6 space-y-6">
        <div className="space-y-3">
        <label htmlFor="email" className="block text-xl font-medium text-white">Email</label>
        <input id="email" type="email" required placeholder="m@example.com" 
          className="block w-full px-5 py-3 mt-2 text-xl text-white bg-black border border-gray-600 rounded-md focus:border-gray-500 focus:outline-none focus:ring focus:ring-[#17594A]"
          />
        </div>
        <div className="space-y-3">
        <label htmlFor="password" className="block text-xl font-medium text-white">Password</label>
        <input id="password" type="password" required   className="block w-full px-5 py-3 mt-2 text-xl text-white bg-black border border-gray-600 rounded-md focus:border-gray-500 focus:outline-none focus:ring focus:ring-[#17594A]"/>
        </div>
    </div>
    <div className="flex items-center justify-center px-8 py-6">
        <button
        onClick={handleLogin}
        className="px-6 py-3 text-xl font-medium text-black bg-white rounded-md hover:bg-gray-300 focus:outline-none focus:bg-white"
        disabled={isLoading}
        >
        {isLoading ? (
            <div className="flex items-center justify-center">
            <div className="w-5 h-5 border-2 border-t-2 border-black border-t-transparent rounded-full animate-spin"></div>
            </div>
        ) : (
            'Sign in'
        )}
        </button>
    </div>
    </div>

        </div>
    );
}
