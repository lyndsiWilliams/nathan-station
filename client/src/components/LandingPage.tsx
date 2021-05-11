import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <>
      <h1>Hi Dad! I made a couple of concept pages, click each button to see examples</h1>
      <Link to='/home-1'>Linklist clone</Link>
      <Link to='/home-2'>My own design</Link>
      <h1>I'm open to feedback, we can customize this however you like!</h1>
    </>
  );
};

export default LandingPage;