import { ComponentPropsWithoutRef, type FC } from 'react';

type FormProps = ComponentPropsWithoutRef<'form'>;

const Form: FC<FormProps> = (props) => {
  return <form {...props}>{props.children}</form>;
};

export default Form;
