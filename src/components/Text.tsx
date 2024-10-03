import React from "react";

const H1 = (props: React.ComponentProps<"h1">) => {
  const { className, ...rest } = props;
  return (
    <h1 className={`text-2xl lg:text-3xl ${className}`} {...rest}>
      {props.children}
    </h1>
  );
};

const H2 = (props: React.ComponentProps<"h2">) => {
  const { className, ...rest } = props;
  return (
    <h2 className={`text-xl lg:text-2xl ${className}`} {...rest}>
      {props.children}
    </h2>
  );
};

const H3 = (props: React.ComponentProps<"h3">) => {
  const { className, ...rest } = props;
  return (
    <h3 className={`text-lg lg:text-xl ${className}`} {...rest}>
      {props.children}
    </h3>
  );
};

export const Heading = {
  H1,
  H2,
  H3,
};
