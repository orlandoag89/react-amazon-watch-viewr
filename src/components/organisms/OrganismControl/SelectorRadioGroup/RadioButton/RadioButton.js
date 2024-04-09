import './RadioButton.css';

export const RadioButton = props => {

  const {
    id = '0',
    label = 'default',
    name = 'no-name',
    dataId = 'no-data',
    change
  } = props;
  
  return (
    <div className='radio-button__container'>
      <input 
        type="radio"
        id={id}
        name={name}
        data-id={dataId}
        onChange={change}/>
      <label
        htmlFor={id}
        className="radio-button">{label}</label>
    </div>
  );
}