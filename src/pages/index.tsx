import moment from 'moment';
import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import { HiChevronDoubleDown } from 'react-icons/hi';
import Button from '@/components/buttons/Button';
/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

const projects = [
  {
    title: 'TALK(QUICKTALK)',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/quicktalk.png?alt=media&token=ef280e11-8ffe-4d92-96a7-513e886e14e0',
    protected: true,
    role: ['Android Developer', 'iOS Developer', 'Flutter'],
    desc: "Formerly known as QuickTalk, it is an application that's focused on providing Real Time Communcations to connect brands, people and things anytime and anywhere.",
  },
  {
    title: 'TALK ADMIN',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/quicktalk.png?alt=media&token=ef280e11-8ffe-4d92-96a7-513e886e14e0',
    protected: true,
    role: ['Web Developer', 'Product Designer', 'NextJS Developer'],
    desc: "An application that's focused on managing the TALK Mobile Application.",
  },
  {
    title: 'FIDOMONEY',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/fidomoney.png?alt=media&token=4d01353b-f2dd-45e5-969e-250865809793',
    protected: true,
    role: ['Flutter Developer', 'Lead Developer'],
    desc: 'Fidomoney is one of the only companies in the financial market that exclusively supplies digital payment solutions.',
  },
  {
    title: 'VIMDESK',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/vimdesk.png?alt=media&token=347c7f68-3d18-4c03-9b44-4ba2436e6865',
    protected: true,
    role: ['NextJS Developer', 'Lead Developer'],
    desc: 'VimDesk is the operational console that gathers data and follows business activities extensively. With the ability to integrate and /or extract daily software tools such as ERP, MES, CRM, Finance, and more.',
  },
  {
    title: 'MYNTHCHAIN',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/Screenshot_20230219_041450.png?alt=media&token=f2d1d558-71c7-4ac3-a3e2-42bfcc06aac1',
    protected: true,
    role: ['NextJS Developer', 'Lead Developer'],
    desc: 'The world’s first hybrid digital marketplace for crypto collectables and non - fungible token (NFT)',
  },
  {
    title: 'MYNTHDEX',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/dex.png?alt=media&token=a47c1657-8318-4dfb-b643-7132e7e65551',
    protected: true,
    role: ['NextJS Developer', 'Lead Developer'],
    desc: 'A decentralized crypto exchanges that offer access to digital assets without an intermediary. Instead of relying on a company to fill and record crypto trades, MYNTHDEX offer peer-to-peer (P2P) token swaps using blockchain technology.',
  },
  {
    title: 'MYNTHCHAIN ULTRAVERSE',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/ultraverse.png?alt=media&token=547c3067-ade2-497a-9c0e-9b14cc0f9757',
    protected: true,
    role: ['NextJS Developer', 'Lead Developer'],
    desc: 'A decentralized infrastructure for the AR Ultraverse, merging the physical and virtual world through Augmented Reality, creating a new dimension where everything is possible.',
  },
  {
    title: 'U-PRO PLUS',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/Screenshot_20230219_041450.png?alt=media&token=f2d1d558-71c7-4ac3-a3e2-42bfcc06aac1',
    protected: true,
    role: ['Flutter Developer', 'Lead Developer'],
    desc: 'A Cross Platform Mobile Application made for advertising purposes such as ADs management for Beauty Salons in Japan',
  },
  {
    title: 'Digipay PH',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/digipay.png?alt=media&token=3ab4e9ee-7b0f-40fd-8e01-c1a813f28ebe',
    protected: true,
    role: ['NextJS Developer', 'Lead Front End Developer'],
    desc: 'A digital payments and financial services platform with a mobile wallet, an industry leading biller ecosystem, and an interoperable backend.',
  },
  {
    title: 'Back Office - Digipay PH',
    banner:
      'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/backoffice%20digipay.png?alt=media&token=9f3593bd-0ed8-4ff7-a183-de5782cac3c1',
    protected: true,
    role: ['NextJS Developer', 'Lead Front End Developer'],
    desc: "Backoffice Digipay V2 is the redesigned and improved version of the Backoffice Digipay V1 that focuses on managing transactions and other transaction related stuff that's being made on Digipay PH",
  },
];

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {/*HERO */}
        <section className='bg-gradient-to-br from-primary-500 to-green-300'>
          <div className=' flex min-h-screen flex-col items-stretch justify-center'>
            <div
              className='hero min-h-screen'
              style={{
                backgroundImage: `url("https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/hero_bg.jpg?alt=media&token=718ea931-2464-47ca-89cb-90705a779a7b")`,
              }}
            >
              <div className='hero-overlay bg-opacity-60'></div>
              <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-md'>
                  <h1 className='mb-5 text-5xl font-bold'>FINDROM.IO</h1>
                  <div className='mt-20 flex min-w-max flex-row items-center justify-center text-white'>
                    <h1>Hi! I Am Front End Engineer</h1>
                  </div>
                  <h1>Romeo Angeles</h1>
                  <p className='mt-7 text-center text-sm text-white'>
                    Developing web and mobile applications for over{' '}
                    <b className='text-white'>
                      {moment()
                        .diff(moment([2020, 3]), 'years')
                        .toString()}{' '}
                      years
                    </b>
                    <br />
                    as a front end engineer
                  </p>

                  <div className='w-100 mt-7 flex flex-row flex-wrap justify-center'>
                    <ButtonLink
                      variant='primary'
                      className='rounded-lg px-10'
                      href='mailto: romeoangeles010517@gmail.com'
                      onClick={() =>
                        window.open(
                          'https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/Angeles-Jr.-Romeo-D.-RESUME.pdf?alt=media&token=938519ce-d4fe-4f23-a1ff-7bc28f59a1a1'
                        )
                      }
                    >
                      Hire Me
                    </ButtonLink>
                  </div>
                  <div
                    role={'button'}
                    className='mt-32 flex flex-col items-center justify-center space-y-5'
                    onClick={() =>
                      document
                        ?.getElementById('developer_journey')
                        ?.scrollIntoView()
                    }
                  >
                    <strong>VIEW MORE</strong>
                    <HiChevronDoubleDown size='50' className='animate-bounce' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*DEVELOPER JOURNEY*/}
        <section id='developer_journey' className='mt-32 bg-white'>
          <div className='layout flex flex-col items-stretch justify-center'>
            <h1
              id='noteworthy'
              className='self-center bg-gradient-to-r from-primary-300 to-green-600 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-5xl'
            >
              NOTEWORTHY PROJECTS
            </h1>
            <div className='carousel mt-5 w-full rounded-2xl'>
              {projects.map((project, index) => (
                <div
                  key={project.title + index}
                  id={`slide${index}`}
                  className='carousel-item relative w-full'
                >
                  <img src={project.banner} className='object-cover' />
                  <div className='absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between'>
                    <a
                      href={
                        index === 0
                          ? `#slide${projects.length - 1}`
                          : `#slide${index - 1}`
                      }
                      className='btn-circle btn'
                    >
                      ❮
                    </a>
                    <a
                      href={
                        index + 1 === projects.length
                          ? `#slide0`
                          : `#slide${index + 1}`
                      }
                      className='btn-circle btn'
                    >
                      ❯
                    </a>
                  </div>
                  <div className='absolute bottom-0 right-0 left-0 hidden flex-col  justify-between space-y-5 bg-gradient-to-b from-primary-300/75 to-green-600/75 p-5 text-white sm:flex'>
                    <div className='flex flex-row items-center space-x-5'>
                      <h3>{project.title}</h3>
                      {project.protected && (
                        <div className='badge-error badge gap-2 bg-red-600 p-4 font-bold text-white'>
                          N.D.A Protected
                        </div>
                      )}
                    </div>
                    <div className='flex flex-col items-stretch'>
                      <p>
                        <b>Role:</b> {project.role.map((role) => `${role} `)}
                      </p>
                      <p>
                        <b>Description: </b>
                        {project.desc}
                      </p>
                      {!project.protected && (
                        <button className='btn-primary btn mt-5 border-none bg-primary-500 hover:bg-primary-600'>
                          View Project
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/*Multi-platform */}
        <section className='mt-32 bg-white'>
          <div className='layout grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
            <div className='flex flex-row flex-wrap items-stretch justify-around sm:hidden'>
              <Image
                className='m-5 object-contain'
                alt='nextjs-logo'
                src='https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/multiplatform.png?alt=media&token=685a5a83-91ba-462f-91d4-a3ee97a70f1c'
                height={350}
                width={350}
              />
            </div>
            <div className='flex flex-col flex-wrap items-start justify-start text-primary-500'>
              <h4>Multi-Platform</h4>
              <h1 className='text-[3.5rem] leading-none text-dark'>
                Reaching users on any screen
              </h1>
              <p className='mt-5 text-justify leading-relaxed text-gray-500'>
                For over{' '}
                <b className='font-bold text-gray-500'>
                  {moment()
                    .diff(moment([2020, 3]), 'years')
                    .toString()}{' '}
                  years
                </b>{' '}
                I have developed applications that's able to reach users from
                Mobile and all the way up to Television Screens by using modern
                frameworks to not only boost the speed of the development but
                also deliver great user experience.
              </p>
              <ArrowLink href='/' className='mt-5 text-dark'>
                View Projects
              </ArrowLink>
            </div>
            <div className='hidden flex-row flex-wrap items-stretch justify-around sm:flex'>
              <Image
                className='m-5 object-contain'
                alt='nextjs-logo'
                src='https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/multiplatform.png?alt=media&token=685a5a83-91ba-462f-91d4-a3ee97a70f1c'
                height={350}
                width={350}
              />
            </div>
          </div>
        </section>

        {/*Proactive */}
        <section className='mt-52 bg-white'>
          <div className='layout grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
            <div className='flex flex-row flex-wrap items-stretch justify-around'>
              <Image
                className='m-5 object-contain'
                alt='nextjs-logo'
                src='https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/proactive.png?alt=media&token=891ec2c2-fb06-4500-829d-4374671c5664'
                height={350}
                width={350}
              />
            </div>
            <div className='flex flex-col flex-wrap items-start justify-start text-primary-500'>
              <h4>Proactive</h4>
              <h1 className='text-[3.5rem] leading-none text-dark'>
                Taking action by causing change
              </h1>
              <p className='mt-5 text-justify leading-relaxed text-gray-500'>
                For over{' '}
                <b className='font-bold text-gray-500'>
                  {moment()
                    .diff(moment([2020, 3]), 'years')
                    .toString()}{' '}
                  years
                </b>{' '}
                I have found out that I am not the type of engineer that you
                might say an <b>optimistic</b> one because I tend to think more
                of the worst case scenario and plan a fix for it ahead of time
                and be prepared to accept and adopt to changes that might
                happen.
              </p>
              <ArrowLink href='/' className='mt-5 text-dark'>
                Read Blog
              </ArrowLink>
            </div>
          </div>
        </section>

        {/*Leader */}
        <section className='my-52 bg-white'>
          <div className='layout grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
            <div className='flex flex-row flex-wrap items-stretch justify-around sm:hidden'>
              <Image
                className='m-5 object-contain'
                alt='nextjs-logo'
                src='https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/leader.png?alt=media&token=f80dedd5-d15e-496e-871e-d60ace8ce9d3'
                height={350}
                width={350}
              />
            </div>
            <div className='flex flex-col flex-wrap items-start justify-start text-primary-500'>
              <h4>Leader</h4>
              <h1 className='text-[3.5rem] leading-none text-dark'>
                Inspires passion and motivation
              </h1>
              <p className='mt-5 text-justify leading-relaxed text-gray-500'>
                For over{' '}
                <b className='font-bold text-gray-500'>
                  {moment()
                    .diff(moment([2020, 3]), 'years')
                    .toString()}{' '}
                  years
                </b>{' '}
                I had opportunities to lead Front End Development teams which
                opens the path for me to learn the duties of being a team leader
                like giving ideas and actively participating every team
                discussion without overpromising and under-delivering.
              </p>
              <ArrowLink href='/' className='mt-5 text-dark'>
                About Me
              </ArrowLink>
            </div>
            <div className='hidden flex-row flex-wrap items-stretch justify-around sm:flex'>
              <Image
                className='m-5 object-contain'
                alt='nextjs-logo'
                src='https://firebasestorage.googleapis.com/v0/b/sampleproject-31206.appspot.com/o/leader.png?alt=media&token=f80dedd5-d15e-496e-871e-d60ace8ce9d3'
                height={350}
                width={350}
              />
            </div>
          </div>
        </section>
        <footer className=' bg-dark'>
          <div className='layout flex flex-row justify-center py-5 text-white'>
            © {new Date().getFullYear()} By
            <UnderlineLink
              className='mx-1'
              href='https://www.linkedin.com/in/romeo-angeles-jr-a88a021a9/'
            >
              Romeo Angeles
            </UnderlineLink>
          </div>
        </footer>
      </main>
    </Layout>
  );
}
