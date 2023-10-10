/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Heading, HeadingProps } from "@far-ui/react";

export default {
  title: "Typography/Heading",
  component: Heading,
  args: {
    children: 'Custom title',
    size: 'md'
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '4xl', '5xl', '6xl'],
      control: {
          type: 'inline-radio'
      }
    },
  }
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1'
  },
  parameters: {
    docs: {
      description: {
        story: "The heading default will always be `h2`, but we can change that with the `as` property."
      }
    }
  }
};
