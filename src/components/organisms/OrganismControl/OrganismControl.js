import './OrganismControl.css';
import { useEffect, useRef } from "react";
import { WatchModel } from "../../../shared/models/Watch.model";
import { AtmImage } from "../../atoms/AtmImage/AtmImage";
import { SelectorRadioGroup } from './SelectorRadioGroup/SelectorRadioGroup';

export const OrganismControl = ({
  textTemplate,
  watches,
  onSelectWatch,
  onActionRadio
}) => {

  const radioRefs = useRef([]);

  useEffect(() => {
    radioRefs.current[0].checked = true;
    onSelectWatch(watches[0].imageUrl);
  }, [])

  /**
   * @param { WatchModel[] } watches
   */
  const _colorSelector = watches => (
    <ul className='organism-control__watches'>
      {
        watches.map((w, i) => {
          return (
            <li className="organism-control">
              <input
                type="radio"
                name="image"
                id={`watch_${i}`}
                value={`watch_${i}`}
                ref={e => radioRefs.current[i] = e}
                className='organism-control__radio'
                onChange={() => onSelectWatch(w.imageUrl)}/>
              <label htmlFor={`watch_${i}`}>
                <figure>
                  <AtmImage src={w.imageUrl} alt={w.styleName} />
                </figure>
              </label>
            </li>
          );
        })
      }
    </ul>
  );

  return (
    <div>
      <h1>{textTemplate.title}</h1>
      <p>{textTemplate.paragraph}</p>
      <h2>{textTemplate.selectColor}</h2>
      {_colorSelector(watches)}
      <h2>{textTemplate.features}</h2>
      <SelectorRadioGroup
        time={textTemplate.time}
        heartRate={textTemplate.heartRate}
        buyNow={textTemplate.buyNow}
        changeAction={onActionRadio}/>
    </div>
  );
}