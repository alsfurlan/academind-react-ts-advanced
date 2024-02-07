import { forwardRef, type ComponentPropsWithoutRef, type FC } from 'react';

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <p>
        <label htmlFor={id}>{label}</label>
        <input id={id} type='text' {...props} ref={ref} />
      </p>
    );
  }
);

export default Input;
