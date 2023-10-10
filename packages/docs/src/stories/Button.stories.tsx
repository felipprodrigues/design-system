/* eslint-disable prettier/prettier */
import type { StoryObj, Meta } from "@storybook/react";
import { ButtonType, ButtonPropsType } from "@far-ui/react";
import { ArrowRight } from "phosphor-react";

export default {
  title: "Form/Button",
  component: ButtonType,
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
    as: 'button'
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
          type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md'],
      control: {
          type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      action: 'click'
    }
  }
} as Meta<ButtonPropsType>;

export const Primary: StoryObj<ButtonPropsType> = {};

export const Secondary: StoryObj<ButtonPropsType> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  }

}

export const Tertiary: StoryObj<ButtonPropsType> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel'
  },
};

export const Small: StoryObj<ButtonPropsType> = {
  args: {
    size: 'sm'
  }
};

export const WithIcon: StoryObj<ButtonPropsType> = {
  args: {
    children: <>Próximo Passo <ArrowRight weight="bold"/></>
  }
};

export const Disabled: StoryObj<ButtonPropsType> = {
  args: {
    disabled: true
  }
};


