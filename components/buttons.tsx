import { useStore } from '@/context/store';
import styles from '@/styles/Home.module.css';

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const ResetButton = ({ text, ...rest }: ButtonProps) => {
  const { data } = useStore();
  return (
    <>
      {data.length > 0 && (
        <button className={styles.resetBtn} {...rest}>
          {text}
        </button>
      )}
    </>
  );
};

const SubmitButton = ({ text, ...rest }: ButtonProps) => {
  return (
    <button type="submit" className={styles.submitBtn} {...rest}>
      {text}
    </button>
  );
};

export { ResetButton, SubmitButton };
