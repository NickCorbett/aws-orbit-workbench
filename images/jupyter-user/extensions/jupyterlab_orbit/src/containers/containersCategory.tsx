import React from "react";

import { SECTION_CLASS } from "../common/styles";
import {
  IUseItemsReturn,
  IItem,
  openItemCallback,
  deleteItem,
  getNodeType,
  getStateIcon
} from "../containers";
import { CategoryViews } from "../common/categoryViews";
//import { ToolbarButtonComponent } from '@jupyterlab/apputils';
//import { bugIcon, closeIcon } from '@jupyterlab/ui-components';
import { JupyterFrontEnd } from "@jupyterlab/application";
import { SmallListItem } from "../common/smallListItem";

const Item = (props: {
  item: IItem;
  openItemCallback: (name: string) => void;
  closeItemCallback: (name: string) => void;
  connect: (container: string) => Promise<void>;
}) => {
  const { icon } = getNodeType(props.item.node_type);
  const { title: statusTitle } = getStateIcon(props.item.job_state);

  return (
    <li>
      <SmallListItem
        icon={icon}
        name={props.item.name}
        status={statusTitle}
        isTerminalActive={props.item.job_state === 'running'}
        closeItemCallback={() => props.closeItemCallback(props.item.name)}
        openItemCallback={() => props.openItemCallback(props.item.name)}
        connect={() => props.connect(props.item.name)}
      />
    </li>
  );
};

const Items = (props: {
  data: IItem[];
  closeItemCallback: (name: string) => void;
  connect: (container: string) => Promise<void>;
}) => (
  <React.Fragment>
    {props.data.map(x => (
      <Item
        item={x}
        openItemCallback={openItemCallback}
        closeItemCallback={props.closeItemCallback}
        connect={props.connect}
      />
    ))}
  </React.Fragment>
);

export const ContainerCategoryLeftList = (props: {
  title: string;
  type: string;
  useItems: (type: string, app: JupyterFrontEnd) => IUseItemsReturn;
  key: string;
  openCallback: (name: string) => any;
  app: JupyterFrontEnd;
}): JSX.Element => {
  const {
    data,
    closeAllCallback,
    refreshCallback,
    setData,
    connect
  } = props.useItems(props.type, props.app);

  const closeItemCallback = async (name: string) => {
    setData(await deleteItem(name, props.type));
  };
  const items = (
    <Items
      data={data}
      closeItemCallback={closeItemCallback}
      connect={connect}
    />
  );

  return (
    <div className={SECTION_CLASS}>
      <CategoryViews
        name={props.title}
        items={items}
        refreshCallback={refreshCallback}
        closeAllCallback={closeAllCallback}
        key={props.key}
        openCallback={props.openCallback}
      />
    </div>
  );
};
