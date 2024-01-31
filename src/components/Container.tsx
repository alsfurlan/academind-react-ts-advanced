import { type ReactNode, type ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
  children: ReactNode;
};

const Container = ({ as, children, ...props }: ContainerProps) => {
  const Component = as;
  return <Component {...props}>{children}</Component>;
};

export default Container;
