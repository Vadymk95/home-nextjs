import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Burgers.module.css';

export const getStaticProps = async () => {
  const res = await fetch('http://localhost:5000/items');
  const data = await res.json();
  return {
    props: { burgers: data },
  };
};

const Burgers = ({ burgers }) => {
  console.log(burgers);
  return (
    <div>
      <h1>Наши Бургеры</h1>
      {burgers.map((burger) => {
        return (
          <Link
            className={styles.burgerCard}
            href={`/burgers/${burger.id}`}
            key={burger.id}
          >
            <div className={styles.imageContainer}>
              <Image
                src={`${burger.image}`}
                alt={`${burger.name}`}
                width={150}
                height={150}
                layout="responsive"
                objectfit="cover"
              />
            </div>
            <div>
              <h3>{burger.name}</h3>
              <p>{burger.desc}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Burgers;
