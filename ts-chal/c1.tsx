import React from "react";

interface TableProps<Titem> {
  items: Titem[];
  renderItem: (item: Titem) => React.ReactNode;
}

export const Table = <TItem,>(props: TableProps<TItem>) => {
  return null;
};

export const Component = () => {
  return (
    <Table
      items={[{ id: "1", name: "Bandit" }]}
      renderItem={(item) => {
        return null;
      }}
    ></Table>
  );
};
