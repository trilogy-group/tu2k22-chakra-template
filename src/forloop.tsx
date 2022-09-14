export type ForLoopProps = {
  initiaValue: any;
  finalValue: any;
  step: any;
  children: any;
};

export const ForLoop = ({
  initiaValue,
  finalValue,
  step,
  children,
}: ForLoopProps) => {
  for (let i = initiaValue; i <= finalValue; i = i + step) {
    return { ...children };
  }
};
