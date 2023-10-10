/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Avatar, AvatarProps } from "@far-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/felipprodrigues.png',
    alt: 'Felipe Rodrigues'
  },
  argTypes: {
    src: {
      control: {
        type: 'text'
      }
    }
  }
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined
  }
};

