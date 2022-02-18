import React from 'react';
import { Link, Label, Icon } from '@faststore/ui';

export interface Props {
  Tabs: {
    tabDispayText: string;
    tabPathname: string;
    tabIcon?: React.ReactNode;
  }[];
}

const HomeTabs: React.FC<Props> = ({ Tabs, children }) => (
  <div data-tabs-navigate>
    <div data-tabs-container>
      {Tabs.map(({ tabDispayText, tabPathname, tabIcon }) => {
        let isActive = true;

        if (typeof window !== 'undefined') {
          isActive = window.location.pathname.startsWith(tabPathname);
          if (tabPathname === '/home-mercado') {
            isActive = isActive || window.location.pathname.startsWith('/mercado');
          }
        }

        return (
          <Link key={tabPathname} href={tabPathname} data-tab data-active-tab={isActive}>
            {tabIcon ? <Icon component={tabIcon} /> : <></>}
            <Label>{tabDispayText}</Label>
          </Link>
        );
      })}
    </div>
    {children ? <div data-home-superbar>{children}</div> : <></>}
  </div>
);

export default HomeTabs;