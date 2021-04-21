import React from "react";
import { LabIcon, refreshIcon, launcherIcon } from "@jupyterlab/ui-components";
import { ToolbarButtonComponent } from "@jupyterlab/apputils";
import { orbitIcon } from "../icons";
import { JupyterFrontEnd } from "@jupyterlab/application";

export const LeftWidgetHeader = (props: {
  name: string;
  icon: LabIcon;
  openCallback: () => any;
  refreshCallback: () => any;
  app: JupyterFrontEnd;
}): JSX.Element => (
  <div>
    <div style={{ textAlign: "center" }}>
      <orbitIcon.react tag="span" height="80px" width="80px" />
    </div>
    <div className={"grid-row-space-between"}>
      <div>
        <span className={"left-widget-header"}>{props.name}</span>
      </div>
      <div>
        <div className={"grid-row-flex-end"}>
          <ToolbarButtonComponent
            tooltip={"Open"}
            icon={launcherIcon}
            onClick={props.openCallback}
          />
          <ToolbarButtonComponent
            tooltip={"Refresh List"}
            icon={refreshIcon}
            onClick={props.refreshCallback}
          />
        </div>
      </div>
    </div>
    <hr className={'left-widget-header-divider'} />
  </div>
);
