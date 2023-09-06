'use client';

// import React, { useState } from 'react';
// import { useRouter } from "next/router"
// import { useCookies } from 'react-cookie';
// import Image from 'next/image'

// const LanguageSwitcher = () => {
//   const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
//   const router = useRouter();
//   const { locale } = router;
//   const [selectedLanguage, setSelectedLanguage] = useState('es');


//   const switchLanguage = (e) => {
//     const locale = e.target.value;
//     router.push('/','/', { locale });
//     if(cookie.NEXT_LOCALE !== locale){
//       setCookie("NEXT_LOCALE", locale, { path: "/" });
//     }
//   }

//   const handleLanguageChange = (language, e) => {
//       setSelectedLanguage(language);
//   };

//   return (
//     <div className="relative inline-block">
//       <select className="flex items-center px-3 py-2 rounded-lg bg-white border border-gray-300 focus:outline-none focus:border-primary"
//         onChange={switchLanguage}
//         defaultValue={locale}
//       >
//         <img
//           src={selectedLanguage === 'es' ? '/mx.png' : '/usa.png'}
//           className="w-6 h-6 mr-2"
//         />
//         {/* {selectedLanguage === 'es' ? 'Sp' : 'En'} */}
      
//       <div className="absolute mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
//         <option value="es"
//           className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
//           onClick={() => handleLanguageChange('es')}
//         >
//           <img src="/mx.png" alt="" className="w-8 h-8 mr-2" />
//         </option>
//         <option value="en"
//           className="block w-full text-left px-4 py-2 hover:bg-gray-100 focus:outline-none"
//           onClick={() => handleLanguageChange('en')}
//         >
//           <img src="/usa.png" alt="" className="w-8 h-8 mr-2" />
//         </option>        
//       </div>
//       </select>
//     </div>
//   );
// };

// export default LanguageSwitcher;


import React from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import Image1 from 'next/image'
import Image2 from 'next/image'
import { useState, useEffect } from 'react';

const LanguageSwitcher = () => {

  const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;
  const [selectedLanguage, setSelectedLanguage] = useState('es');

  const switchLanguage = (e) => {
    const locale = e.target.value;
    router.push('/','/', { locale });
     if(cookie.NEXT_LOCALE !== locale){
      setCookie("NEXT_LOCALE", locale, { path: "/" });
    }
  }
  const handleLanguageChange = (language, e) => {
      setSelectedLanguage(language);
  };

    return (
      <select
        onChange={switchLanguage}
        defaultValue={locale}
        className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 ml-4 mr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black dark:text-white"
      >
        <img
          src={selectedLanguage === 'es' ? '/mx.png' : '/usa.png'}
          className="w-6 h-6 mr-2"
        />
        <option value="es">ES
          <img src="/mx.png" alt="" className="w-8 h-8"  />
        </option>
        <option value="en">EN
          <img src="/usa.png" alt="" className="w-8 h-8"  />
        </option>
      </select>
    );
  };
  
export default LanguageSwitcher;
  