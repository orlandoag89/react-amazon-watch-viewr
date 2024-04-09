import './MlcHeader.css';
import { AtmImage } from '../../atoms/AtmImage/AtmImage';

export const MlcHeader = () => {

  return (
    <header className='mlc-header'>
      <figure className='mlc-header__figure-container'>
        <AtmImage src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' />
      </figure>
    </header>
  );
}