import Link from 'next/link';
import {Header, Footer} from './../components';

const Home = () => {
  return (
    <div>
      <h1>Главная</h1>
      <Link href="/burgers">Все бургеры</Link>
    </div>
  );
}

export default Home;
