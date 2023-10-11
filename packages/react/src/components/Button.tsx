/* eslint-disable prettier/prettier */


import { styled } from "../styles";
import { ComponentProps } from "react";

export const ButtonType = styled("div", {
  all: 'unset',
  borderRadius: '$sm',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',

  svg: {
    width: '$4',
    height: '$4'
  },

  '&:disabled': {
    cursor: 'not-allowed'
  },

  '&:focus': {
    boxShadow: '0 0 0 2px $colors$gray100'
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        background: '$ignite500',

        '&:not(:disabled):hover': {
          background: '$ignite300'
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        }
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',


        '&:not(:disabled):hover': {
          background: '$ignite500',
          color: '$white'
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200'

        }
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white'
        },

        '&:disabled': {
          color: '$gray600',
        }
      }

    },

    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46
      }
    }
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md'
  }

});

export type ButtonPropsType = ComponentProps<typeof ButtonType>


ButtonType.displayName = 'Button'
