import Link from 'next/link';

import Container from '@/components/Container';

export default function MediaOps() {
  return (
    <Container>
      <div className="justify-center ">
      <iframe 
        width="900" 
        height="750" 
        src="https://datastudio.google.com/embed/reporting/bdd93489-b87e-4e9e-a1ed-4fc67b9bfb5e/page/rPT9B" 
        frameBorder="0" 
        style={{border:'0'}} 
        allowFullScreen>
      </iframe>
      </div>
    </Container>
  );
}
