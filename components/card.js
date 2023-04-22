import styles from './card.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Tilty from 'react-tilty';




const Card = (props) => {
  return (
    <>  
        <Tilty className="tilty" glare scale={1.05} maxGlare={0.5}>
            <Link href={props.href} className={styles.cardLink}>
                <Image
                    src={props.imgUrl}
                    alt='coffee store'
                    width={270}
                    height={170}
                    className={styles.cardImage}
                />
                <div className={styles.cardContent}>
                <h2 className={styles.cardHeader}>{props.name}</h2>
                </div>
            </Link>
        </Tilty>
      </>
  )
}

export default Card