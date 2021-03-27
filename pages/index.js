import Timeline from '../components/Timeline';
import Container from '../components/Container';
import ProjectCard from '../components/ProjectCard';

 const Home = () => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Rey Mar Gualvez
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
        I am a fullstack web developer. I spend my days developing and designing frontend
        and backend applications and teaching on my <a href="https://www.youtube.com/channel/UCIoA-ACxiqT1TIkymEACHmA" target="_blank" className="text-gray-900 dark:text-gray-100 underline">
        youtube channel</a>. I am specializing <a href='https://laravel.com/' target="_blank"  className="text-gray-900 dark:text-gray-100 no-underline">
        Laravel framework </a> on the backend, <a href='https://reactjs.org/' target="_blank"  className="text-gray-900 dark:text-gray-100 no-underline">
        React.js </a> on the frontend and <a href='https://tailwindcss.com/' target="_blank"  className="text-gray-900 dark:text-gray-100 no-underline">
        TailwindCSS </a> for styling.
        </h2>
        <h5 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-8 text-black dark:text-white">
          Here are some projects I've worked on:
        </h5>
        <ProjectCard
          title="Lorem Empsum1"
          description="Mauris ligula est, facilisis sed magna eu, luctus maximus lorem. Sed aliquam velit in erat malesuada."
          icon="react2025"
        />
        <ProjectCard
          title="Lorem Empsum2"
          description="Curabitur posuere est eget orci ornare sollicitudin. Suspendisse potenti. Aliquam id lectus consectetur."
          icon="nextjs"
        />
        <ProjectCard
          title="Lorem Empsum3"
          description="Donec vitae tellus dignissim, scelerisque turpis at, aliquet augue. Quisque pharetra nisi lacus."
          icon="fastfeedback"
        />
        <Timeline />
      </div>
    </Container>
  );
}

export default Home