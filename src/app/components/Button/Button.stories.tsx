import HomeIcon from '../assets/HomeIcon';
import Button from './Button';

export default {
  title: 'Component/Button',
  component: Button,
};

export const Mods = (): JSX.Element => <Button active>Mods</Button>;
export const PrimeParts = (): JSX.Element => <Button>Prime Parts</Button>;
export const Home = (): JSX.Element => (
  <Button>
    <HomeIcon />
  </Button>
);
