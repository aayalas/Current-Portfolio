"use client";

import Image from "next/image";

import { Inter, Rubik } from "next/font/google";
import { useRouter } from "next/router";
import { FormattedMessage, useIntl } from "react-intl";
import Link from "next/link";
import Head from "next/head";

import Header from "./components/header";
import { useState, useEffect } from "react";
import { Flowbite } from "flowbite-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faFilePdf } from "@fortawesome/free-solid-svg-icons";
import "../node_modules/@fortawesome/fontawesome-svg-core/styles.css";
import Emoji from "react-emojis";
import {
  faCss3,
  faDev,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faGithub,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const rubik = Rubik({ subsets: ["latin"] });

export default function Home({ dir }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const { locales } = useRouter();
  const intl = useIntl();

  const title = intl.formatMessage({ id: "page.home.head.title" });
  const description = intl.formatMessage({
    id: "page.home.head.meta.description",
  });

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width-device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" hrefLang="x-default" /> */}
        {/* <link rel="icon" href="/favicon.ico" hrefLang="es" />
        <link rel="icon" href="/favicon.ico" hrefLang="en" /> */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>👋</text></svg>"
          hrefLang="en"
        />
      </Head>
      {/* <header>
      </header> */}
      <main dir={dir} className={`${rubik.className}`}>
        <Flowbite>
          <Header />

          {/* <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            Get started by editing&nbsp;
            <code className="font-mono font-bold">pages/index.js</code>
          </p>
          <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <a
              className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                className="dark:invert"
                width={100}
                height={24}
                priority
              />
            </a>
          </div>
        </div>

        <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Docs{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Find in-depth information about Next.js features and API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Learn{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Templates{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
            className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Deploy{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Instantly deploy your Next.js site to a shareable URL with Vercel.
            </p>
          </a>
        </div> */}
          {/* Hero */}
          <section className="bg-white dark:bg-gray-900 antialiased" id="home">
            <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
              <div className="lg:mt-0 lg:col-span-5 lg:flex lg:-order-1">
                <Image
                  src="/profile.png"
                  alt="mockup"
                  width={450}
                  height={100}
                  className="rounded-full sm:order-1"
                />
                {/* <img style=border-radius: "100%" src="./assets/profile.jpeg" alt="mockup"/> */}
              </div>
              <div className="mr-auto place-self-center lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">
                  <FormattedMessage id="page.home.title.heroa" />
                  <Emoji emoji="waving-hand" />
                  <br></br>
                  <FormattedMessage id="page.home.title.herob" />
                </h1>
                <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                  <FormattedMessage id="page.home.title.heroc" />
                </p>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-slate-700 rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:text-white dark:focus:ring-slate-900"
                >
                  <FormattedMessage id="page.home.button1.hero" />
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
                <a
                  href="#about"
                  className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-700 dark:focus:ring-gray-800"
                >
                  <FormattedMessage id="page.home.button2.hero" />
                </a>
              </div>
            </div>
            <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
              {/* <!-- <span class="font-semibold text-gray-400">Follow me at:</span> --> */}
              <div className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                {/* <a href="https://github.com/aayalas" target="_blank" className="mr-5 mb-20 pb-10 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <i className="fa-brands fa-github fa-2xl"></i>
                                <BsGithub />
                                <FontAwesomeIcon icon={BsGithub} style={{ color: "red", fontSize: 16 }}/>                        
                            </a> */}
                {/* <a href="https://www.linkedin.com/in/alejandroayalas" target="_blank" className="mr-5 mb-20 pb-10 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <i className="fa-brands fa-linkedin fa-2xl"></i><FontAwesomeIcon icon={BsLinkedin} style={{ color: "blue", fontSize: 16 }}/>
                            </a>
                            <a href="https://instagram.com/alexayalaschmitt" target="_blank" className="mr-5 mb-20 pb-10 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400">
                                <i className="fa-brands fa-instagram fa-2xl"></i><FontAwesomeIcon icon={BsInstagram} style={{ color: "red", fontSize: 16 }}/>                                                  
                            </a> */}
                <a
                  href="Curriculum Actual.pdf"
                  target="_blank"
                  className="mr-5 mb-20 pb-10 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <i className="fa-regular fa-file-pdf fa-2xl"></i>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="fas fa-file-pdf"
                    style={{ color: "red", fontSize: 32 }}
                  />{" "}
                  CV
                </a>
                <a
                  href="/Current Resume.pdf"
                  target="_blank"
                  className="mr-5 mb-20 pb-10 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                >
                  <i className="fa-regular fa-file-pdf fa-2xl"></i>
                  <FontAwesomeIcon
                    icon={faFilePdf}
                    className="fas fa-fa-file-pdf"
                    style={{ color: "red", fontSize: 32 }}
                  />{" "}
                  Resume
                </a>
              </div>
            </div>
          </section>
          {/* About Me */}
          <section className="bg-white dark:bg-gray-900 antialiased" id="about">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
              <figure className="max-w-screen-md mx-auto">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  <FormattedMessage id="page.home.title.aboutme" />
                </h2>
                <svg
                  className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  />
                </svg>
                <blockquote>
                  <p className="text-2xl mb-8 font-normal text-gray-900 dark:text-white">
                    "<FormattedMessage id="page.home.text1.aboutme" />"
                  </p>
                  <p className="text-2xl mb-8 font-normal text-gray-900 dark:text-white">
                    "<FormattedMessage id="page.home.text2.aboutme" />"
                  </p>
                  <p className="text-2xl mb-8 font-normal text-gray-900 dark:text-white">
                    "<FormattedMessage id="page.home.text3.aboutme" />"
                  </p>
                </blockquote>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  {/* <!-- <img class="w-6 h-6 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png" alt="profile picture" --> */}
                  <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                    {/* <div className="pr-3 font-medium text-gray-900 dark:text-white"></div> */}
                    {/* <!-- <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">CEO at Google</div> --> */}
                  </div>
                </figcaption>
              </figure>
            </div>
          </section>
          {/* Skills */}
          <section
            className="bg-white dark:bg-gray-900 antialiased"
            id="skills"
          >
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  <FormattedMessage id="page.home.title.skills" />
                </h2>
                {/* <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                          Crafted with skill and care to help our clients grow their business!
                        </p> */}
              </div>
              <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  {/* <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            HTML
                          </span> */}
                  <FontAwesomeIcon
                    icon={faHtml5}
                    className="fa-brands fa-html5"
                    style={{ color: "blue", fontSize: 128 }}
                  />
                  {/* <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            HTML
                          </h3> */}
                  {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p> */}
                  {/* <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>

                <div className="space-y-4">
                  <FontAwesomeIcon
                    icon={faCss3}
                    className="fa-brands fa-css3"
                    style={{ color: "blue", fontSize: 128 }}
                  />
                  {/* <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Microsoft Corp.
                          </span>
                          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Management system
                          </h3>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p>
                          <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>

                <div className="space-y-4">
                  <FontAwesomeIcon
                    icon={faJs}
                    className="fa-brands fa-js"
                    style={{ color: "orange", fontSize: 128 }}
                  />
                  {/* <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Adobe Inc.
                          </span>
                          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Logo design
                          </h3>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p>
                          <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>
              </div>

              <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  {/* <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            HTML
                          </span> */}
                  <FontAwesomeIcon
                    icon={faNodeJs}
                    className="fa-brands fa-node-js"
                    style={{ color: "green", fontSize: 128 }}
                  />
                  {/* <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            HTML
                          </h3> */}
                  {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p> */}
                  {/* <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>

                <div className="space-y-4">
                  <FontAwesomeIcon
                    icon={faPython}
                    className="fa-brands fa-python"
                    style={{ color: "blue", fontSize: 128 }}
                  />
                  {/* <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Microsoft Corp.
                          </span>
                          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Management system
                          </h3>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p>
                          <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>

                <div className="space-y-4">
                  <FontAwesomeIcon
                    icon={faDev}
                    className="fa-brands fa-dev"
                    style={{ color: "blue", fontSize: 128 }}
                  />
                  {/* <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Adobe Inc.
                          </span>
                          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Logo design
                          </h3>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p>
                          <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>
              </div>
            </div>
          </section>
          {/* Formación académica */}
          <section className="bg-white dark:bg-gray-900 antialiased" id="edu">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  <FormattedMessage id="page.home.title.edu" />
                </h2>
                {/* <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                          Crafted with skill and care to help our clients grow their business!
                        </p> */}
              </div>
              <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <Image
                    src="/tecnm_logo.png"
                    width={400}
                    height={260}
                    alt="TechNM Logo"
                  />
                  <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    <FormattedMessage id="page.home.text1.edu" />
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    <FormattedMessage id="page.home.text2.edu" />
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    <FormattedMessage id="page.home.text3.edu" />
                  </p>
                  {/* <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>

                <div className="space-y-4">
                  <Image
                    src="/ttcollege_logo.png"
                    width={400}
                    height={260}
                    alt="Tooele Applied Tec College Logo"
                  />
                  <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    <FormattedMessage id="page.home.text1.edub" />
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    <FormattedMessage id="page.home.text2.edub" />
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    <FormattedMessage id="page.home.text3.edub" />
                  </p>
                  {/* <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>

                <div className="space-y-4">
                  <Image
                    src="/OracleONE.png"
                    width={400}
                    height={260}
                    alt="Oracle ONE Logo"
                  />
                  <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    <FormattedMessage id="page.home.text1.educ" />
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    <FormattedMessage id="page.home.text2.educ" />
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    <FormattedMessage id="page.home.text3.educ" />
                  </p>
                  {/* <a href="#" title=""
                            className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                            role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a> */}
                </div>
              </div>
            </div>
          </section>
          {/* Proyectos */}
          <section
            className="bg-white dark:bg-gray-900 antialiased"
            id="projects"
          >
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  <FormattedMessage id="page.home.title.projects" />
                </h2>
                {/* <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                          Crafted with skill and care to help our clients grow their business!
                        </p> */}
              </div>
              <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  <Image
                    src="/portfolio.png"
                    width={400}
                    height={260}
                    alt="Portfolio"
                    className="border border-black dark:border-gray-400"
                  />
                  <span className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                    <FormattedMessage id="page.home.text1.projects" />
                  </span>
                  <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                    <FormattedMessage id="page.home.text2.projects" />
                  </h3>
                  <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                    <FormattedMessage id="page.home.text3.projects" />
                  </p>
                  <a
                    href="/"
                    title=""
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-700 dark:focus:ring-gray-800"
                    role="button"
                  >
                    <FormattedMessage id="page.home.text4.projects" />
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 ml-2 -mr-1"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </a>
                </div>

                {/* <div className="space-y-4">
                            <Image 
                              src="/gayatricoach.png"
                              width={400}
                              height={260}
                              alt="Gayatricoach.com"
                              className="border border-black dark:border-gray-400"
                            />
                          <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              <FormattedMessage id="page.home.text1.projects1"/>
                          </span>
                          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            <FormattedMessage id="page.home.text2.projects2"/>
                          </h3>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            <FormattedMessage id="page.home.text3.projects3"/>
                          </p>
                          <a href="https://gayatricoach.com/" target="_blank"
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-700 dark:focus:ring-gray-800">
                              <FormattedMessage id="page.home.text4.projects4"/>
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a>
                        </div> */}

                {/* <div className="space-y-4">
                          <Image 
                              src="/portfolio.png"
                              width={400}
                              height={260}
                              alt="Portfolio"
                              className="border border-black dark:border-gray-400"
                            />
                          <span
                            className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                            Python Demo Project.
                          </span>
                          <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                            Logo design
                          </h3>
                          <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                            Flowbite helps you connect with friends, family and communities of people who share your interests.
                          </p>
                          <a href="#" title=""
                            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-900 border border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-blue-700 dark:focus:ring-gray-800" role="button">
                            View case study
                            <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                              fill="currentColor">
                              <path fillRule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clipRule="evenodd" />
                            </svg>
                          </a>
                        </div> */}
              </div>
            </div>
          </section>
          {/* Follow */}
          <section
            className="bg-white dark:bg-gray-900 antialiased"
            id="follow"
          >
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
              <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                  <FormattedMessage id="page.home.title.follow" />
                </h2>
                {/* <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                          Crafted with skill and care to help our clients grow their business!
                        </p> */}
              </div>
              <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                <div className="space-y-4">
                  {/* <span
                              className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              HTML
                            </span> */}
                  <a href="https://github.com/aayalas" target="_blank">
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="fa-brands fa-github"
                      style={{ color: "grey", fontSize: 128 }}
                    />
                  </a>

                  {/* <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                              HTML
                            </h3> */}
                  {/* <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                              Flowbite helps you connect with friends, family and communities of people who share your interests.
                            </p> */}
                  {/* <a href="#" title=""
                              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              role="button">
                              View case study
                              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd" />
                              </svg>
                            </a> */}
                </div>

                <div className="space-y-4">
                  <a
                    href="https://www.linkedin.com/in/alejandroayalas"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="fa-brands fa-linkedin"
                      style={{ color: "blue", fontSize: 128 }}
                    />{" "}
                  </a>
                  {/* <span
                              className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              Microsoft Corp.
                            </span>
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                              Management system
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                              Flowbite helps you connect with friends, family and communities of people who share your interests.
                            </p>
                            <a href="#" title=""
                              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              role="button">
                              View case study
                              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd" />
                              </svg>
                            </a> */}
                </div>

                <div className="space-y-4">
                  <a
                    href="https://instagram.com/alexayalaschmitt"
                    target="_blank"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="fa-brands fa-instagram"
                      style={{ color: "red", fontSize: 128 }}
                    />{" "}
                  </a>
                  {/* <span
                              className="bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">
                              Adobe Inc.
                            </span>
                            <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                              Logo design
                            </h3>
                            <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                              Flowbite helps you connect with friends, family and communities of people who share your interests.
                            </p>
                            <a href="#" title=""
                              className="text-white bg-primary-700 justify-center hover:bg-primary-800 inline-flex items-center  focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                              role="button">
                              View case study
                              <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fillRule="evenodd"
                                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                  clipRule="evenodd" />
                              </svg>
                            </a> */}
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className="w-full p-4 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-900 dark:border-gray-900">
              {/* <h5 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Schedule a WEB meeting</h5> */}
              {/* <p className="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400">Stay up to date and move work forward with Flowbite on iOS & Android. Download the app today.</p> */}
              <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                {/* <a href="#" className="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
                      <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
                      <div className="text-left">
                          <div className="mb-1 text-xs">Download on the</div>
                          <div className="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
                      </div>
                  </a> */}
                <a
                  type="button"
                  href="https://calendly.com/schmittmx/30min"
                  target="_blank"
                  className="px-6 py-3.5 text-base font-medium text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 rounded-lg text-center dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                  <FormattedMessage id="page.home.button.follow" />
                  {/* <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                      <div className="text-left">
                          <div className="mb-1 text-xs">Get in on</div>
                          <div className="-mt-1 font-sans text-sm font-semibold">Google Meet</div>
                      </div> */}
                </a>
              </div>
            </div>
          </section>
          {/* Footer */}
          <section>
            <footer className="footer footer-center w-full p-4 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
              <div className="text-center">
                <p>
                  <FormattedMessage id="page.home.footer.copyright" /> © 2023 -{" "}
                  <FormattedMessage id="page.home.footer.copyright2" />{" "}
                  <FontAwesomeIcon
                    icon={faHeart}
                    className="fas fa-heart"
                    style={{ color: "red", fontSize: 16 }}
                  />{" "}
                  <FormattedMessage id="page.home.footer.copyright3" />
                  {/* <i style="color: red" className="fa-solid fa-heart"> </i> */}
                  <a
                    className="font-semibold"
                    href="mailto:alex.ayalas@gmail.com"
                  >
                    {" "}
                    Alejandro Ayala
                  </a>
                </p>
              </div>
            </footer>
          </section>
        </Flowbite>
      </main>
    </>
  );
}
