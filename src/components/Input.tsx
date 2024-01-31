import { type ComponentPropsWithoutRef, type FC } from "react";

type InputProps = {
  label: string;
  id: string;
} & ComponentPropsWithoutRef<'input'>;

const Input: FC<InputProps> = ({ label, id, ...props }: InputProps) => {
  return (
    <p>
      <label htmlFor={id}>{label}</label>
      <input id={id} type='text' {...props} />
    </p>
  );
};

export default Input;
