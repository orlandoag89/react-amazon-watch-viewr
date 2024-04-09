import './SelectorRadioGroup.css';
import { AtmButton, ButtonType } from "../../../atoms/AtmButton/AtmButton";
import { RadioButton } from "./RadioButton/RadioButton";

export const radioValues = {
  TIME: 'time',
  HEART_RATE: 'heart_rate',
  BUY_NOW: 'buy_now'
}

export const SelectorRadioGroup = ({time, heartRate, buyNow, changeAction}) => {

  const _change = e => changeAction(e.target.attributes['data-id'].value);

  return (
    <div className="selector-radio-group">
      <RadioButton
        id={radioValues.TIME}
        name='selector-radio'
        dataId={radioValues.TIME}
        label={time}
        change={_change}/>
      <RadioButton
        id={radioValues.HEART_RATE}
        name='selector-radio'
        dataId={radioValues.HEART_RATE}
        label={heartRate} 
        change={_change}/>
      <AtmButton 
        customStyle={{width: '30%'}}
        buttonType={ButtonType.PRIMARY}>{buyNow}</AtmButton>
    </div>
  );
}