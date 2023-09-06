'use client';

import { Dropdown } from 'flowbite-react';
import React from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from "next/router";
import { useState } from 'react';

export default function InlineDropdown() {
  const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
  const router = useRouter();
  const { locale } = router;
  const [selectedLanguage, setSelectedLanguage] = useState(locale || 'es'); // Use locale or 'es' as initial state

  const switchLanguage = (e) => {
    const newLocale = e.target.value;
    router.push('/', '/', { locale: newLocale });
    if (cookie.NEXT_LOCALE !== newLocale) {
      setCookie("NEXT_LOCALE", newLocale, { path: "/" });
    }
    setSelectedLanguage(newLocale); // Update the selectedLanguage state after the switch
  }

  return (
    <Dropdown
      inline
      size="sm"
      label={<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" className="w-5 h-5 mr-0 rounded-full" id="flag-icon-css-mx" alt="es_MX" />}
      className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 ml-0 mr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black dark:text-white"
      onChange={switchLanguage}
      value={selectedLanguage} // Use value prop instead of defaultValue
    >
      <Dropdown.Item>
        <img
          value="es"
          src="https://hatscripts.github.io/circle-flags/flags/mx.svg"
          className="w-5 h-5 mr-0 rounded-full"
          id="flag-icon-css-mx"
          alt="es_MX"
          onClick={() => switchLanguage({ target: { value: 'es' } })}
        />
      </Dropdown.Item> 

      <Dropdown.Item>
        <img
          value="en"
          src="https://hatscripts.github.io/circle-flags/flags/us.svg"
          className="w-5 h-5 mr-0 rounded-full"
          id="flag-icon-css-us"
          alt="en_US"
          onClick={() => switchLanguage({ target: { value: 'en' } })}
        />
      </Dropdown.Item>
    </Dropdown>
  );
}



// import { Dropdown } from 'flowbite-react';
// import React from 'react';
// import { useCookies } from 'react-cookie';
// import { useRouter } from "next/router";
// import { useState } from 'react';

// export default function InlineDropdown() {
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
//     setSelectedLanguage(language);
//   };

//   return (

//     <Dropdown
//       inline
//       size="sm"
//       label={<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-mx" alt="es_MX" />}
//       className="block appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 ml-4 mr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 dark:bg-black dark:text-white"
//       onChange={switchLanguage}
//       defaultValue={locale}
//       src={selectedLanguage === 'es' ? '/mx.png' : '/usa.png'}
//     >
//       <Dropdown.Item 
        
//       >
//         <img value="es" src="https://hatscripts.github.io/circle-flags/flags/mx.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-mx" alt="es_MX" onClick={() => handleLanguageChange('es')}/>
//       </Dropdown.Item> 

//       <Dropdown.Item 
        
//       >
//         <img value="en" src="https://hatscripts.github.io/circle-flags/flags/us.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-us" alt="en_US" onClick={() => handleLanguageChange('en')}/>
//       </Dropdown.Item>

//     </Dropdown>

//   )
// }





