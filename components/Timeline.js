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
        First time to create a website for a client and I am using vanilla JavaScript and CSS.
      </Step>
      <Step title="Joined Tech Events ⚙️">
        It was time to focus on my career, I have started to join free tech events such as GDG, AWS, Python, Laravel, Vue and React
        events in Cebu City. 
      </Step>
    </ul>
    <Divider />
    <Year>2017</Year>
    <ul>
      <Step title="Got my first laptop 💻">
        One of my most joyful moments, I am so happy because I really wait this moment since I had started college.
        I no longer practice coding on my phone and I can now expore and study new trends in technology.
      </Step>
      <Step title="Province life 🚗">
        After 7 years in Cebu City as a self-supporting student, I was given a chance to go back to Surigao Del Sur 
        for a summer vacation and it was totally satisfying for a short period of time.
      </Step>
      {/* <Step title="Full-Time at Workiva">
        I was offered and accepted a full-time offer with Workiva, as well as
        the opportunity to continue my internship until graduation.
      </Step>
      <Step title="Moved to Des Moines 🏙">
        I moved Downtown DSM into a quaint 1BR apartment. Des Moines has always
        felt like home growing up ~45 minutes away.
      </Step> */}
    </ul>
    <Divider />
    <Year>2016</Year>
    <ul>
      <Step title="Intro to programming 🔥">
        Proramming 101. This is the time when I first touch and learn to code. C was my first 
        language to play around and I enjoy that language a lot.
      </Step>
      <Step title="Started Struggling Engineering">
        I can now feel the engineering effect. We are loaded by many subjects and it's kinda hard for me 
        as a self-supporting student because you need more time to study. I was thinking already for my 
        future or what to do next if I will fail this course.
      </Step>
      {/* <Step title="Second Internship">
        Spent the summer in (beautiful?) Cedar Rapids, IA working at Rockwell
        Collins.
      </Step> */}
    </ul>
    <Divider />
    <Year>2015</Year>
    <ul>
      <Step title="Took Computer Engineering">
        One of the happiest moment after I enrolled this course, it was my dream to atleast step on 
        one of the best University in Cebu. 
      </Step>
      <Step title="Graduated High School">
        High School life is the best.
      </Step>
    </ul>
    {/* <Divider />
    <Year>2011</Year>
    <ul>
      <Step title="Graduated High School">
        My hometown had about 1000 people, in total. My graduating class was 36.
      </Step>
      <Step title="Started at Iowa State University 🌪❤️">
        I've been a die-hard Cyclone fan my whole life. It was a no-brainer that
        I was going to ISU, especially since they have a great Engineering
        program.
      </Step>
      <Step title="Learned How To Program">
        CS 101. Our professor asked a simple question - "Who here has prior
        programming experience?". About 80% of the class raised their hands. I
        knew it was going to be an uphill battle from here.
      </Step>
      <Step title="Wanted To Dropout of College">
        I didn't pick up programming right away. It didn't help we learned C to
        start – I'm glad I stuck with it, though.
      </Step>
    </ul> */}
    {/* <Divider />
    <Year>1998</Year>
    <ul>
      <Step title="First Computer">
        I remember many nights playing Age of Empires, Lego Island, and
        Runescape.
      </Step>
    </ul>
    <Divider />
    <Year>1997</Year>
    <ul>
      <Step title="Became a Pokémon Master">
        Every time we'd go to Target, I would beg my mom to get a pack of
        Pokémon cards. Sorry, mom.
      </Step>
    </ul> */}
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
          First in-house web developer at Office Partners 360, building projects with Laravel,
          Alpine.js, Livewire, TailwindCSS, React.js and Zoho Creator/Deluge Scripting from Zoho.
        </Step>
        <Step title="Graduated Computer Engineering 💯">
          I have completed my 5 year course at University of Cebu-Main Campus
        </Step>
        <Step title="Top 3 best thesis 🏆">
          I was extremely honored to be one of three best thesis of University of Cebu Engineering Department.
        </Step>
        <Step title="Got Finished the Real-time Rainfall and Flood Monitoring Project🥳">
          Great year for my entire college life because I have finished my own project proposal 
          that can really help the society in the future.
        </Step>

      </ul>
      <Divider />
      <Year>2019</Year>
      <ul>
        <Step title="Web Developer Intern ✨">
          I am finally part of the web development team, I render my 3 months of OJT at Getmore PH
          as a web developer and I am using Ruby on Rails on the backend and Ember.js on the frontend.
        </Step>
        <Step title="IT Support Intern ⚛️">
          I have render my first OJT at Cebu Smartbuild, my primarily role is to support the IT team
          in maintaining hardware, software and microcontroller system.
        </Step>
        {/* <Step title="Bought a Townhome 🏡">
          Who wants to do yardwork? Not me. Plus, Allie and I love living
          downtown Des Moines.
        </Step>
        <Step title="Got Engaged 💍">
          I asked my now fiancée, Allie, to marry me. She said yes! September
          was a busy month, to say the least – I also spoke at three events and
          sold my condo.
        </Step>
        <Step title="Spoke at Talent42 🎤">
          I spoke to over 100 technical recruiting leaders from across the
          country at Talent42 in Seattle during a 45-minute keynote.
        </Step> */}
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
