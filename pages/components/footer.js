'use client';

import { Footer } from 'flowbite-react';
import Link from 'next/link';
import { BsDribble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';
import { FormattedMessage, useIntl } from 'react-intl';

export default function FooterWithSocialMediaIcons() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1 bg-rgb(252, 249, 249)">
          <div>
            <Footer.Brand
              alt="Logo"
              href="/"
              name=""
              className="dark:invert"
              src="/next.svg"
            />
          </div>
          <div className="grid grid-cols-3 gap-4 sm:mt-4 sm:grid-cols-6 sm:gap-6">
          <Footer.LinkGroup col>
            <Footer.Link href="#home">
              <FormattedMessage id="page.home.menu.footer.home"/>
            </Footer.Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup col>
            <Footer.Link href="#services">
              <FormattedMessage id="page.home.menu.footer.services"/>
            </Footer.Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup col>
            <Footer.Link href="#about">
              <FormattedMessage id="page.home.menu.footer.about"/>
            </Footer.Link>
          </Footer.LinkGroup>  
          <Footer.LinkGroup col>  
            <Footer.Link href="#faq">
              <FormattedMessage id="page.home.menu.footer.faq"/>
            </Footer.Link>
          </Footer.LinkGroup>
          <Footer.LinkGroup col>  
            <Footer.Link href="#success">
              <FormattedMessage id="page.home.menu.footer.success"/>
            </Footer.Link>
          </Footer.LinkGroup>   
          <Footer.LinkGroup col>   
            <Footer.Link href="#letstalk">
              <FormattedMessage id="page.home.menu.footer.letstalk"/>
            </Footer.Link>
          </Footer.LinkGroup>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">          
          <Footer.Copyright
            by="NEXT.JS™ "
            href="#"
            year={2023}
            text="Todos los derechos reservados."
          /><FormattedMessage id="page.home.footer.copyright"/>
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  )
}


