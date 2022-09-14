export type MapItemsProps = {
  list: any;
  Child: any;
};

export const MapItems = ({ list, Child }: MapItemsProps) => {
  return list.map((item: any, id: any) => {
    return <Child key={id} item={item} />;
  });
};
