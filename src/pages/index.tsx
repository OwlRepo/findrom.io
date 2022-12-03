import moment from 'moment';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import Seo from '@/components/Seo';
import ArrowLink from '@/components/links/ArrowLink';

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

const techStack = {
  imageLinks: [
    'https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png',
    'https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png',
    'https://raw.githubusercontent.com/chakra-ui/chakra-ui/main/media/logo-colored@2x.png?raw=true',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png',
    'https://seeklogo.com/images/B/bootstrap-logo-69A1CCC10B-seeklogo.com.png',
    'https://download.logo.wine/logo/Dart_(programming_language)/Dart_(programming_language)-Logo.wine.png',
    'https://upload.wikimedia.org/wikipedia/commons/1/17/Google-flutter-logo.png',
    'https://assets.stickpng.com/images/62c6bc0beee9410fe137d91e.png',
  ],
};

interface ProjectCardProps {
  imgLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  return (
    <div className='flex flex-col items-stretch overflow-clip rounded-xl bg-white shadow-xl'>
      <div
        className='aspect-square h-40 bg-cover bg-center bg-no-repeat object-cover'
        style={{
          backgroundImage: `url(${props.imgLink})`,
        }}
      />
      <div className='flex flex-col bg-white p-3 text-dark'>
        <strong>Project Title</strong>
        <small className='mt-5 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis eius
          modi labore maiores asperiores
        </small>
        <small className='mt-5 font-bold'>Tags: </small>
        <div className='w-100 max-w-50 mt-3 flex flex-row flex-wrap'>
          <p className='mr-2 mb-2 max-w-max rounded-full bg-gray-600 py-1 px-3 text-xs font-bold text-white'>
            Web 3
          </p>
          <p className='mr-2 mb-2 max-w-max rounded-full bg-purple-500 py-1 px-3 text-xs font-bold text-white'>
            Solana
          </p>
          <p className='mr-2 mb-2 max-w-max rounded-full bg-orange-500 py-1 px-3 text-xs font-bold text-white'>
            Infura
          </p>
          <p className='mr-2 mb-2 max-w-max rounded-full bg-teal-500 py-1 px-3 text-xs font-bold text-white'>
            tailwind css
          </p>
          <p className='mr-2 mb-2 max-w-max rounded-full bg-yellow-500 py-1 px-3 text-xs font-bold text-white'>
            javascript
          </p>
        </div>
      </div>
    </div>
  );
};

const NotableProjectsTabs = () => {
  const [tabs, setTabs] = React.useState({
    activeIndex: 0,
    list: ['LATEST', 'WEB 2.0', 'WEB 3.0', 'MOBILE'],
  });

  return (
    <div className='flex flex-col items-center justify-center overflow-scroll'>
      <div className=' mb-5 flex flex-row overflow-clip rounded-full bg-gray-100'>
        {tabs.list.map((data, index) => (
          <Button
            key={data + index}
            variant={tabs.activeIndex === index ? 'primary' : 'outline'}
            onClick={() =>
              setTabs({
                activeIndex: index,
                list: ['LATEST', 'WEB 2.0', 'WEB 3.0', 'MOBILE'],
              })
            }
            className='rounded-none border-none'
          >
            {data}
          </Button>
        ))}
      </div>
      <div className='grid grid-cols-1 gap-10 p-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {techStack.imageLinks.map((link, index) => {
          return <ProjectCard key={index} imgLink={link} />;
        })}
      </div>
    </div>
  );
};

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {/*HERO */}
        <section className='bg-gradient-to-br from-primary-500 to-green-300'>
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
              <p className='mt-2 mt-7 text-center text-sm text-white'>
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
        </section>
        {/*Multi-platform */}
        <section className='my-32 bg-white'>
          <div className='layout flex flex-col items-stretch'>
            <h1 className='mb-5 text-center text-[3.5rem] leading-none text-dark'>
              Notable Projects
            </h1>
            <p className='mb-5 text-center'>
              A Front End Engineer who aspires to create beautiful and
              multi-platform applications using modern solutions
            </p>
            <NotableProjectsTabs />
          </div>
        </section>

        {/*Multi-platform */}
        <section className='my-32 bg-white'>
          <div className='layout grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
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
            <div className='flex flex-row flex-wrap items-stretch justify-around'>
              {techStack.imageLinks.map((link) => (
                <Image
                  key={link}
                  className='m-5 object-contain'
                  alt='nextjs-logo'
                  src={link}
                  height={150}
                  width={150}
                />
              ))}
            </div>
          </div>
        </section>
        {/*Proactive */}
        <section className='my-32 bg-white'>
          <div className='layout grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
            <div className='flex flex-row flex-wrap items-stretch justify-around'>
              {techStack.imageLinks.map((link) => (
                <Image
                  key={link}
                  className='m-5 object-contain'
                  alt='nextjs-logo'
                  src={link}
                  height={150}
                  width={150}
                />
              ))}
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
        <section className='my-32 bg-white'>
          <div className='layout grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-2'>
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
            <div className='flex flex-row flex-wrap items-stretch justify-around'>
              {techStack.imageLinks.map((link) => (
                <Image
                  key={link}
                  className='m-5 object-contain'
                  alt='nextjs-logo'
                  src={link}
                  height={150}
                  width={150}
                />
              ))}
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
