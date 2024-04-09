import './AtmButton.css';
import { joinClasses } from "../../../shared/utils/utils";

export const ButtonType = {
  DEFAULT: 'default',
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
}

export const AtmButton = props => {

  const {
    children,
    buttonType = ButtonType.DEFAULT,
    customStyle
  } = props;

  const classes = joinClasses(['atm-button', `atm-button--${buttonType}`])

  return (
    <button className={classes} style={customStyle}>
      {children}
    </button>
  )
}