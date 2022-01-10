import Card from './Card';

export default {
  title: 'Component/Card',
  component: Card,
};

export const OneCard = (): JSX.Element => (
  <Card item="Mirage" itemBuy={15} itemSell={13}></Card>
);
