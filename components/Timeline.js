import { useState } from 'react';

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only">Check</span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>
        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6">{children}</p>
    </li>
  );
};

const FullTimeline = () => (
  <>
    <Divider />
    <Year>2018</Year>
    <ul>
      <Step title="Freelance Web Developer 🤘🏻">
        First time to create a website for a client using vanilla JavaScript and CSS.
      </Step>
      <Step title="Joined Tech Events ⚙️">
        It was time to invest on IT, I started joining free tech events such as GDG-Cebu, AWS-Central Visayas, Pizzapy(Python Devs.), Laravel Cebu, Vuejs Cebu and Reactjs Cebu.
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Got my first laptop 💻">
        Yeahh got my first laptop, I am so happy because I waited this moment since I had started college.
        I no longer practice coding on my phone and I can now expore and study new technology trends.
      </Step>
      <Step title="Province life 🚗">
        After 7 years in Cebu City, I was given a chance to visit my hometown Tandag, Surigao Del Sur 
        for a short period of time.
      </Step>
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Intro to programming 🔥">
        Proramming 101. This is the time when I first touched a programming language and learned to code. C was my first 
        language to play around and I enjoy that language a lot.
      </Step>
      <Step title="Started Struggling Engineering">
        I felt the engineering effects. I was loaded by many subjects and it's kinda hard for me 
        as a self-supporting student because you need more time to study and work simultaneously.
      </Step>
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Took Computer Engineering">
        One of the happiest moment in my life is when I enrolled Computer Engineering.
      </Step>
      <Step title="Graduated High School">
        High School life is the best!!
      </Step>
    </ul>
    <Divider />
    <Year>1997</Year>
    <ul>
      <Step title="Born 👶🏼🍼" />
    </ul>
  </>
);

export default function Timeline() {
  const [isShowingFullTimeline, showFullTimeline] = useState(false);

  return (
    <>
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2020</Year>
      <ul>
        <Step title="Web Developer ✨">
          First in-house web developer at Office Partners 360, building projects using Laravel,
          Alpine.js, Livewire, TailwindCSS, React.js, JAMstack and Deluge Scripting.
        </Step>
        <Step title="Graduated Computer Engineering 💯">
         Completed my 5 year course at University of Cebu-Main Campus.
        </Step>
        <Step title="Top 3 best thesis in Computer Engineering Department🏆">
          My proposed thesis project was ranked 3rd as one of the best project design based on students and instructors votes. 
        </Step>
        <Step title="Got Finished the Real-time Rainfall and Flood Monitoring Project🥳">
          It was very special to me because after how many months of coding, the project was totally finished.
        </Step>
      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Web Developer Intern ✨">
          I am finally part of the web development team, I rendered my OJT for 3 months at Getmore PH
          as a web developer and I am using Ruby on Rails on the backend and Ember.js on the frontend.
        </Step>
        <Step title="IT Support Intern at Cebu Smartbuild⚛️">
          It was my first OJT, my primary role is to support the IT team
          in maintaining hardware and software system.
        </Step>
      </ul>
      {isShowingFullTimeline ? (
        <FullTimeline />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See More
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </>
  );
}
