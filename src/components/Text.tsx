import React from "react";
import { twMerge } from "tailwind-merge";

const H1 = (props: React.ComponentProps<"h1">) => {
  const { className, ...rest } = props;
  const classes = twMerge("text-xl lg:text-2xl", className);

  return (
    <h1 className={classes} {...rest}>
      {props.children}
    </h1>
  );
};

const H2 = (props: React.ComponentProps<"h2">) => {
  const { className, ...rest } = props;
  const classes = twMerge("text-lg lg:text-xl", className);

  return (
    <h2 className={classes} {...rest}>
      {props.children}
    </h2>
  );
};

const H3 = (props: React.ComponentProps<"h3">) => {
  const { className, ...rest } = props;
  const classes = twMerge("lg:text-lg", className);

  return (
    <h3 className={classes} {...rest}>
      {props.children}
    </h3>
  );
};

const Section = (props: React.ComponentProps<"h2">) => {
  const { className, children, ...rest } = props;
  const classes = twMerge("flex gap-2 items-center", className);
  return (
    <div className={classes}>
      <H2
        className="text-sm lg:text-sm uppercase text-section-heading"
        {...rest}
      >
        {children}
      </H2>
      <div className="w-full h-px bg-section-heading bg-opacity-50"></div>
    </div>
  );
};

export const Heading = {
  H1,
  H2,
  H3,
  Section,
};
