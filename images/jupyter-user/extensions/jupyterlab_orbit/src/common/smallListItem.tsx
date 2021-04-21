import React from 'react';
import { ToolbarButtonComponent } from '@jupyterlab/apputils';
import { bugIcon, closeIcon, LabIcon } from '@jupyterlab/ui-components';

export const SmallListItem = (props: {
  name: string;
  status: string;
  icon: LabIcon;
  isTerminalActive: boolean;
  openItemCallback: () => void;
  closeItemCallback: () => void;
  connect: () => void;
}) => {
  const Icon = props.icon.react;
  return (
    <div className={'small-list-item-border'} onClick={props.openItemCallback}>
      <div className={'small-list-item-icon'}>
        <Icon tag="span" width={'32px'} height={'32px'} />
      </div>
      <div className={'small-list-item-content'}>
        <div className={'small-list-item-name'}>{props.name}</div>
        <div className={'small-list-item-status'}>{props.status}</div>
      </div>
      <div className={'small-list-item-buttons'}>
        <ToolbarButtonComponent
          className={'jp-RunningSessions-itemShutdown'}
          icon={bugIcon}
          onClick={props.connect}
          tooltip={'Connect terminal'}
          enabled={props.isTerminalActive}
        />
        <ToolbarButtonComponent
          className={'jp-RunningSessions-itemShutdown'}
          icon={closeIcon}
          onClick={props.closeItemCallback}
          tooltip={'Shut Down'}
        />
      </div>
    </div>
  );
};
