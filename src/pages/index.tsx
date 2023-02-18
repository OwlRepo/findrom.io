import moment from 'moment';
import Image from 'next/image';
import * as React from 'react';

import Layout from '@/components/layout/Layout';
import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';

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

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {/*HERO */}
        {/* <section className='bg-gradient-to-br from-primary-500 to-green-300'>
          <div className='layout flex min-h-screen flex-col items-stretch justify-center'>
            <div className='flex flex-1  flex-col items-center justify-center text-white'>
              <h1 className='mt-4'>FINDROM.IO</h1>
              <div className='mt-20 flex min-w-max flex-row items-center justify-center text-white'>
                <h1>Hi! I Am</h1>
                <h3 className='mx-4 rounded-full bg-primary-800 py-2 px-6 text-white shadow-lg shadow-primary-500'>
                  Front End Engineer
                </h3>
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

              <div className='w-100 mt-7 flex flex-row flex-wrap'>
                <ButtonLink
                  variant='primary'
                  className='rounded-lg px-10'
                  href='mailto: romeoangeles010517@gmail.com'
                >
                  Hire Me
                </ButtonLink>
              </div>
            </div>
          </div>
        </section> */}

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
                </div>
              </div>
            </div>
          </div>
        </section>

        {/*Multi-platform */}
        <section className='mt-52 bg-white'>
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
