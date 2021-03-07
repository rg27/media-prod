import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Container from '@/components/Container';

const Talk = ({ title, link, children }) => (
  <>
    <h3 className="font-medium mb-2 text-lg">
      <a
        className="flex items-center text-gray-900 dark:text-gray-100"
        target="_blank"
        rel="noopener noreferrer"
        href={link}
      >
        {title}
        <div>
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </div>
      </a>
    </h3>
    <p className="text-gray-600 dark:text-gray-400 mb-8">{children}</p>
  </>
);

export default function About() {
  return (
    <Container>
      <NextSeo
        title="About Me – Rey Mar Gualvez"
        canonical="https://reygualvez.vercel.app/about"
        openGraph={{
          url: 'https://reygualvez.vercel.app/about',
          title: 'About Me – Rey Mar Gualvez'
        }}
      />
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>
            Hey, I’m Rey Mar. I am working
            at Office Partners 360 as a Web and Zoho Developer.
            I also create projects or any applications regarding machine learning and 
            Internet of Things(IOT).
          </p>
          <p>
           I learned hardware and software troubleshooting on my first internship at Cebu SmartBuild,
           an IT company in Cebu which specializes in networking products, FDAs
          and other technical process or solutions involving technology. 
           After Cebu SmartBuild, I got my first shot in web development as web developer intern for 
           almost 3 months at Getmore Philippines where I got a chance to work on Ruby-on-Rails and Ember.js, a web framework, 
           and used bitbucket and github as a requirement for version control. I was hired by Office Partners 360 as a fulltime web developer and part of the admin team. 
           OP360 gives me an opportunity to explore, learn and integrate different technologies from 
           Low Code platform to web frameworks.
          </p>
          <p>
          I am both driven, self-motivated, and strive to be better developer by 
          experimenting with new technologies and techniques especially in web development. 
          When I was not glued in my laptop, I spends time biking and jogging.
          </p>
        </div>
        {/* 
        
        */}
      </div>
    </Container>
  );
}
