'use client';

import { Label, Select } from 'flowbite-react';
import { useRouter } from "next/router"
import { useCookies } from 'react-cookie';
import Image from 'next/image'

export default function SelectInput() {
    const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
    const router = useRouter();
    const { locale } = router;

    // Replace the following object with your actual image URLs for each language
    const languageImages = {
        es: '/mx.png',
        en: '/usa.png',
    };
  
    const switchLanguage = (e) => {
      const locale = e.target.value;
      router.push('/','/', { locale });
      if(cookie.NEXT_LOCALE !== locale){
        setCookie("NEXT_LOCALE", locale, { path: "/" });
      }
    }

    return (
        <div className="relative inline-block w-32">
        <select
            onChange={switchLanguage}
            defaultValue={locale}
            id="countries"
            required
            className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        >
            <option value="es">
            {languageImages[locale] && (
              <img
                src={languageImages[locale]}
                className="w-8 h-8 inline-block mr-2"
              />
            )}
            </option>
            <option value="en">
            {languageImages[locale] && (
              <img
                src={languageImages[locale]}
                className="w-8 h-8 inline-block mr-2"
              />
            )}
            </option>
        </select>    
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            >
            <path
                fillRule="evenodd"
                d="M6.293 7.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                clipRule="evenodd"
            />
            </svg>
        </div>
    </div>
   )
}

// label={<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-mx" alt="es_MX" />}

// <img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" className="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-mx" alt="es_MX"/>

// {<img src="https://hatscripts.github.io/circle-flags/flags/us.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-us" alt="en_US" />}

// export default function LanguageSwitcher() {
//   const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
//   const router = useRouter();
//   const { locale } = router;

//   const switchLanguage = (e) => {
//     const locale = e.target.value;
//     router.push('/','/', { locale });
//     if(cookie.NEXT_LOCALE !== locale){
//       setCookie("NEXT_LOCALE", locale, { path: "/" });
//     }
//   }

//   return (
//     <select
//       onChange={switchLanguage}
//       defaultValue={locale}
//     >
//       <option value="es">ES</option>  
//       <option value="en">EN</option>
//     </select>
//   );
// }









// export default function InlineDropdown() {
//     const [ cookie, setCookie ] = useCookies(['NEXT_LOCALE']);
//     const router = useRouter();
//     const { locale } = router;

//     const switchLanguage = (e) => {
//         const locale = e.target.value;
//         router.push('/','/', { locale });
//         if(cookie.NEXT_LOCALE !== locale){
//           setCookie("NEXT_LOCALE", locale, { path: "/" });
//         }
//     }

//     return (
//       <Dropdown
//         onChange={switchLanguage}
//         defaultValue={locale}
//         inline
//         size="sm"
//         label={<img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-mx" alt="es_MX" />}
//       >        
//         <Dropdown.Item value="es">
//           <img src="https://hatscripts.github.io/circle-flags/flags/mx.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-mx" alt="es_MX" />
//         </Dropdown.Item>
//         <Dropdown.Item alue="en">
//           <img src="https://hatscripts.github.io/circle-flags/flags/us.svg" class="w-5 h-5 mr-2 rounded-full" id="flag-icon-css-us" alt="en_US" />
//         </Dropdown.Item>
//       </Dropdown>
//     )
//   }