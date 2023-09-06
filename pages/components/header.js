'use client';

import { DarkThemeToggle, Flowbite } from 'flowbite-react';
import { Button, Navbar } from 'flowbite-react';
import Dropdown from './dropdown';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FormattedMessage, useIntl } from 'react-intl';
import Switch from './switch';
import LanguageSwitcher from './LanguageSwitcher.js';
import Image from 'next/image'

export default function DefaultNavbar() {

  const { locales } = useRouter();
  const intl = useIntl();

  return (
    <Navbar
      className="sticky left-0 top-0 z-50 w-full bg-white px-4 lg:px-6 py-2.5 border-gray-200 dark:bg-gray-900"
    >
      <Navbar.Brand href="/">
        <Image
          alt="Logo"
          className="mr-3 h-6 sm:h-9 dark:invert"          
          src="/simple.svg"
          width={108} height={45}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold text-black dark:text-white">
          
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
       
        {/* <Switch/> */}
        <Dropdown/>
        <DarkThemeToggle className='ml-4 mr-4'/>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link
          active
          href="#home"
        >
          <p>
            <FormattedMessage id="pages.home.menu.home"/>
          </p>
        </Navbar.Link>
        <Navbar.Link href="#about">
          <FormattedMessage id="pages.home.menu.about"/>
        </Navbar.Link>
        <Navbar.Link href="#skills">
          <FormattedMessage id="pages.home.menu.skills"/>
        </Navbar.Link>
        <Navbar.Link href="#edu">
          <FormattedMessage id="pages.home.menu.edu"/>
        </Navbar.Link>
        <Navbar.Link href="#projects">
          <FormattedMessage id="pages.home.menu.projects"/>
        </Navbar.Link>
        <Navbar.Link href="#follow">
          <FormattedMessage id="pages.home.menu.follow"/>
        </Navbar.Link>
      </Navbar.Collapse>
      
    </Navbar>
  )
}


