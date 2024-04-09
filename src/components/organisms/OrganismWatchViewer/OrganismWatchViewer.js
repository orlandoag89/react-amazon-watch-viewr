import './OrganismWatchViewer.css';
import { AtmImage } from "../../atoms/AtmImage/AtmImage";
import { Clock } from './Clock/Clock';
import { radioValues } from '../OrganismControl/SelectorRadioGroup/SelectorRadioGroup';
import { Heart } from './Heart/Heart';

export const OrganismWatchViewer = ({radio, src, alt}) => {

  const _showDisplay = () => {
    switch (radio) {
      case radioValues.TIME:
        return <Clock />;
      case radioValues.HEART_RATE:
        return <Heart />
      default:
        return null;
    }

  }

  return (
    <div className='organism-watch-viewer__container'>
      {_showDisplay()}
      <figure className="organism-watch-viewer">
        <AtmImage src={src} alt={alt}></AtmImage>
      </figure>
    </div>
  );
}