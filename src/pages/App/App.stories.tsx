import { ComponentStory, ComponentMeta } from '@storybook/react';
import { App } from './App';

export default {
  title: 'Pages/App',
  component: App,
} as ComponentMeta<typeof App>;

const Template: ComponentStory<typeof App> = (props) => <App {...props} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  name: 'Default',
};
