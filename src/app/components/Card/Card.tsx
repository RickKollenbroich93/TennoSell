import styles from './Card.module.css';

type CardProps = {
  className?: string;
  item: string;
  itemImg?: string;
  itemSell?: Number;
  itemBuy?: Number;
};

function Card({
  item,
  itemImg,
  itemSell,
  itemBuy,
  className,
}: CardProps): JSX.Element {
  return (
    <section
      className={`${styles.cardcontainer} ${className} 
}`}
    >
      <h1 className={styles.cardheader}>{item}</h1>
      <div className={styles.itemwrapper}>
        <img src={itemImg} className={styles.imgcontainer} />
        <div>
          <p>
            Best WTS: <span>{itemSell}</span>P
          </p>
          <p>
            Best WTB: <span>{itemBuy}</span>P
          </p>
        </div>
      </div>
    </section>
  );
}

export default Card;
