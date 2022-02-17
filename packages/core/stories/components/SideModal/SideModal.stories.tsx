import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SideModalComponent from '../../../src/components/SideModal';
import { userIcon } from '../../icons';
import './SideModal.scss';

export default {
  title: 'Molecules/Side Modal',
  component: SideModalComponent,
  parameters: {
    controls: { expanded: true }
  }
} as ComponentMeta<typeof SideModalComponent>;

const Template: ComponentStory<typeof SideModalComponent> = (args) => <SideModalComponent {...args} />;
export const SideModal = Template.bind({});
SideModal.argTypes = {
  iconButton: {
    table: {
      disable: true,
      defaultValue: { summary: 'Hello' }
    }
  },
  iconClose: {
    table: {
      disable: true,
      defaultValue: { summary: 'Hello' }
    }
  },
  children: {
    table: {
      disable: true
    }
  },
  iconHeader: {
    table: {
      disable: true
    }
  },
  mobileHeaderIcon: {
    table: {
      disable: true
    }
  }
};
SideModal.args = {
  buttonText: 'Open Modal',
  children: <div>Modal Content</div>,
  iconClose: <div>X</div>,
  iconHeader: userIcon,
  modalTitle: 'Modal Title',
  orientation: 'end',
  mobileHeaderIcon: (
    <img
      width="62"
      src="https://exitocol.vtexassets.com/assets/vtex.file-manager-graphql/images/6839a899-918b-41a9-945f-5573ce1d7bcc___50dc4199e8020554de79a91123175966.svg"
      alt="Exito"
    />
  )
};
