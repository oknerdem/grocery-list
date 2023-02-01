import { SubmitButton } from '@/components/buttons';
import styles from '@/styles/Home.module.css';

const Form = () => {
  return (
    <form
      className="flex justify-center gap-2"
      onClick={(e: any) => {
        e.preventDefault();
      }}
    >
      <input
        type="text"
        className={styles.formInputText}
        placeholder="e.g. yogurt"
        required
      />
      <input
        type="number"
        className={styles.formInputNum}
        min={1}
        max={100}
        placeholder="1"
        title="Default is 1"
      />
      <SubmitButton text="Submit" />
    </form>
  );
};

export default Form;
