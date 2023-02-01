import { SubmitButton } from '@/components/buttons';
import { useStore } from '@/context/store';
import styles from '@/styles/Home.module.css';

const Form = () => {
  const { data, setData, setStatus } = useStore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    const inputText = form[0].value;
    const inputNum = form[1].value === '' ? 1 : parseInt(form[1].value);
    const newItem = {
      id: data.length + Math.random(),
      name: inputText,
      quantity: inputNum,
    };
    setData([...data, newItem]);
    setStatus('filled');
    form.reset();
  };

  return (
    <form className="flex justify-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.formInputText}
        placeholder="e.g. yogurt"
        required
        ref={e => {
          if (e) e.focus();
        }}
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
