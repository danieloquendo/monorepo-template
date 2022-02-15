import React from 'react';
import { Link, Label, Icon } from '@faststore/ui';

export interface Props extends React.ReactElement {
  Tabs: {
    tabDispayText: string;
    tabPathname: string;
    tabIcon?: React.ReactNode;
  }[];
}

const HomeTabs: React.FC<Props> = ({ Tabs, children }) => (
  <div data-tabs-navigate>
    <div data-tabs__navigate>
      {Tabs.map(({ tabDispayText, tabPathname, tabIcon }) => {
        const isActive: boolean = window.location.pathname === tabPathname;

        return (
          <Link key={tabPathname} href={tabPathname} data-active-tab={isActive}>
            <Label>
              {tabIcon ? <Icon component={tabIcon} /> : <></>}
              {tabDispayText}
            </Label>
          </Link>
        );
      })}
    </div>
    {children ? <div data-home__superbar>{children}</div> : <></>}
  </div>
);

export default HomeTabs;
