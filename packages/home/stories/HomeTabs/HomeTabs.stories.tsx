import React from 'react';
import { Meta, Story } from '@storybook/react';
import { HomeTabs, Props } from '../../src/components/HomeTabs';
import { MdFitScreen, MdOutlineNoFood } from 'react-icons/md';
import './HomeTabs.scss';

const meta: Meta = {
  title: 'Home Tabs',
  component: HomeTabs,
  argTypes: {
    Tabs: {
      defaultValue: [
        {
          tabDispayText: 'Exito.com',
          tabPathname: '/iframe.html',
          tabIcon: <MdFitScreen />
        },
        {
          tabDispayText: 'Mercado',
          tabPathname: 'something ...',
          tabIcon: <MdOutlineNoFood />
        }
      ]
    },
    children: {
      control: {
        type: 'text'
      },
      defaultValue: '...imagine a child banner here...'
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<Props> = (args) => <HomeTabs {...args} />;

const demoBanner = () => {
  return (
    <div
      style={{
        backgroundColor: 'rgb(0, 188, 193)',
        minHeight: '40px',
        height: 'fit-content',
        width: '100%',
        color: '#fff',
        fontSize: 17,
        fontWeight: 700,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px 0px 0px 0px',
        padding: '10px 0px'
      }}
    >
      <p style={{ margin: 0 }}>hacemos la lista de útiles escolares por ti</p>
      <a
        target={'_blank'}
        href="https://api.whatsapp.com/send?phone=573054829046&amp;text=Hola%20en%20temporada%20escolar%20hacemos%20la%20lista%20por%20ti"
        className="exito-header-3-x-botonBar w-20-m w-40-s pa1-m pa3-s tc b campaign_exito"
        id="clickSuperbar"
        style={{
          backgroundColor: 'rgb(255, 232, 0)',
          padding: '5px 8px',
          borderRadius: 15,
          color: 'black',
          textDecoration: 'none',
          margin: '0px 10%'
        }}
        rel="noreferrer"
      >
        {' '}
        Escríbenos
      </a>
    </div>
  );
};

const SecondTemplate: Story<Props> = (args) => (
  <HomeTabs
    {...args}
    Tabs={[
      {
        tabDispayText: 'Exito.com',
        tabPathname: 'something else ...',
        tabIcon: <MdFitScreen />
      },
      {
        tabDispayText: 'Mercado',
        tabPathname: '/iframe.html',
        tabIcon: <MdOutlineNoFood />
      }
    ]}
  >
    {' '}
    {demoBanner()}{' '}
  </HomeTabs>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});
export const secondTabSelected = SecondTemplate.bind({});
Default.args = {};
