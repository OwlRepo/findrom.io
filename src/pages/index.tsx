import moment from 'moment';
import Image from 'next/image';
import * as React from 'react';

import Button from '@/components/buttons/Button';
import Layout from '@/components/layout/Layout';
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
    <div className='shadow- flex flex-col items-stretch overflow-clip rounded-xl bg-white shadow-dark'>
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

export default function HomePage() {
  return (
    <Layout>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        {/*CTA */}
        <section className='my-20 '>
          <div className='layout flex flex-col items-stretch justify-start'>
            <div className='flex flex-1  flex-col items-center justify-center'>
              <h1 className='mt-4'>FINDROM.IO</h1>
              <div className='mt-20 flex min-w-max flex-row items-center justify-center'>
                <h1>Hi! I Am</h1>
                <h3 className='mx-4 rounded-full bg-primary-500 py-2 px-6 text-white shadow-lg shadow-primary-200'>
                  Front End Engineer
                </h3>
              </div>
              <h1>Romeo Angeles</h1>
              <p className='mt-2 mt-7 text-center text-sm text-gray-800'>
                Developing web and mobile applications for over{' '}
                <b className='text-primary-500'>
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
                <Button
                  className='mx-3 rounded-lg'
                  variant='outline'
                  onClick={() => {
                    document!
                      .querySelector('#notable_projects')!
                      .scrollIntoView({
                        behavior: 'smooth',
                      });
                  }}
                >
                  Projects
                </Button>
              </div>
            </div>
          </div>
        </section>
        {/*TECH STACK */}
        <section className='my-32 bg-white'>
          <div className='layout flex flex-row flex-wrap items-stretch justify-around'>
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
        </section>
        {/*NOTABLE PROJECTS */}
        <section
          id='notable_projects'
          className='mt-20 bg-gradient-to-t from-primary-500 to-white pb-10'
        >
          <div className='layout flex flex-row flex-wrap items-stretch justify-around '>
            <div className='flex flex-1 flex-col items-stretch justify-start p-5 text-primary-100'>
              <h1 className='mt-4 bg-gradient-to-br from-primary-500 to-primary-900 bg-clip-text text-center text-transparent '>
                NOTABLE PROJECTS
              </h1>
              <div className='mt-5 max-w-max self-center rounded-full bg-gradient-to-r from-primary-500 to-primary-300 p-1 px-16' />
              <div className='mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                {techStack.imageLinks.map((link) => (
                  <ProjectCard key={link} imgLink={link} />
                ))}
              </div>
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
