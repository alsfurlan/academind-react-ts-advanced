import { ComponentPropsWithoutRef, FormEvent, type FC } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};

const Form: FC<FormProps> = ({ children, onSave, ...otherProps }) => {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
  }

  return (
    <form {...otherProps} onSubmit={(event) => handleSubmit(event)}>
      {children}
    </form>
  );
};

export default Form;
