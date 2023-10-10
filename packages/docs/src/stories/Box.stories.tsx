/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { Box as FarBox, BoxProps as FarBoxProps, Text } from "@far-ui/react";

export default {
  title: "Surfaces/Box",
  component: FarBox,
  args: {
    children: <Text>testando o elemento</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as Meta<FarBoxProps>;

export const Primary: StoryObj<FarBoxProps> = {};
