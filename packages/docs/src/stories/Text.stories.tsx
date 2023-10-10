/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Text, TextProps } from "@far-ui/react";

export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, placeat nostrum sit magni corporis, numquam velit totam quo commodi consequatur id voluptates voluptatem dolorem itaque eos aut a consectetur neque!',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
          type: 'inline-radio'
      }
    },
  }
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong'
  }
};
