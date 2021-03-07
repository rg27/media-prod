import Link from 'next/link';

import Timeline from '../components/Timeline';
import Container from '../components/Container';
import BlogPost from '../components/BlogPost';
import Subscribe from '../components/Subscribe';
import ProjectCard from '../components/ProjectCard';

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Rey Mar Gualvez
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        I am a fullstack web developer. I spend my days developing and designing frontend
        and backend applications and teaching about it on my <a href="https://www.youtube.com/channel/UCIoA-ACxiqT1TIkymEACHmA" target="_blank" className="text-gray-900 dark:text-gray-100 underline">
        youtube channel</a>. I am specializing <a href='https://laravel.com/' target="_blank"  className="text-gray-900 dark:text-gray-100 no-underline">
        Laravel framework </a> on the backend, <a href='https://reactjs.org/' target="_blank"  className="text-gray-900 dark:text-gray-100 no-underline">
        React.js </a> on the frontend and <a href='https://tailwindcss.com/' target="_blank"  className="text-gray-900 dark:text-gray-100 no-underline">
        TailwindCSS </a> for styling. I also develop machine learning and any IOT projects.
        </h2>
        {/* <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular
        </h3>
        <BlogPost
          title="Everything I Know About Style Guides, Design Systems, and Component Libraries"
          summary="A deep-dive on everything I've learned in the past year building style guides, design systems, component libraries, and their best practices."
          slug="style-guides-component-libraries-design-systems"
        />
        <BlogPost
          title="How Stripe Designs Beautiful Websites"
          summary="Examining the tips and tricks used to make Stripe's website design a notch above the rest."
          slug="how-stripe-designs-beautiful-websites"
        />
        <BlogPost
          title="Creating a Monorepo with Lerna & Yarn Workspaces"
          summary="In this guide, you will learn how to create a Monorepo to manage multiple packages with a shared build, test, and release process."
          slug="monorepo-lerna-yarn-workspaces"
        /> */}
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Projects
        </h3>
        <ProjectCard
          title="Lorem Empsum1"
          description="Mauris ligula est, facilisis sed magna eu, luctus maximus lorem. Sed aliquam velit in erat malesuada."
          // href="https://react2025.com/"
          icon="react2025"
        />
        <ProjectCard
          title="Lorem Empsum2"
          description="Curabitur posuere est eget orci ornare sollicitudin. Suspendisse potenti. Aliquam id lectus consectetur."
          // href="https://masteringnextjs.com/"
          icon="nextjs"
        />
        <ProjectCard
          title="Lorem Empsum3"
          description="Donec vitae tellus dignissim, scelerisque turpis at, aliquet augue. Quisque pharetra nisi lacus."
          // href="https://fastfeedback.io/"
          icon="fastfeedback"
        />
        <Timeline />
        {/* <Subscribe /> */}
      </div>
    </Container>
  );
}
