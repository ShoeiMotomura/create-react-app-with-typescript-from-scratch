import classes from './Button.module.css';

interface Props {
  children: string;
}

const Button = (props: Props) => {
  return <button className={classes.button}>{props.children}</button>;
};

export default Button;
