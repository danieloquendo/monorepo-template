import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import Hello from './Hello';

//👇 This default export determines where your story goes in the story list
export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Components/Hello',
	component: Hello,
} as ComponentMeta<typeof Hello>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof Hello> = (args) => <Hello {...args} />;

const HelloComponent = Template.bind({});

HelloComponent.args = {
	/*👇 The args you need here will depend on your component */
	message: 'This is a hello message',
};

export { HelloComponent };
