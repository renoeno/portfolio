import * as Switch from '@radix-ui/react-switch';
import { styled } from '../../../../styles';

export const TogglerWrapper = styled('header', {
  background: '$background',
});

export const ToggleContainer = styled('div', {
  padding: '$2 $2 0 0',
  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'flex-end',
});

export const IconContainer = styled('span', {
  color: '$text',
});

export const SwitchRoot = styled(Switch.Root, {
  all: 'unset',
  width: 32,
  height: 20,
  background: '$text',
  borderRadius: '9999px',
  position: 'relative',
  boxShadow: `0 2px 10px $text`,
  WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)',
  '&:focus': { boxShadow: `0 0 0 2px $background` },
  '&[data-state="checked"]': { background: '$text' },
});

export const SwitchThumb = styled(Switch.Thumb, {
  display: 'block',
  width: 16,
  height: 16,
  background: '$background',
  borderRadius: '9999px',
  boxShadow: `0 2px 2px $text`,
  transition: 'transform 100ms',
  transform: 'translateX(2px)',
  willChange: 'transform',
  '&[data-state="checked"]': { transform: 'translateX(14.5px)' },
});
