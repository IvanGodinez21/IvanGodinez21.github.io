import { ConfettiOptions } from 'tsparticles-confetti';

const confetti: ConfettiOptions = {
  shapes: ['circle', 'square', 'text', 'triangle'],
  shapeOptions: {
    text: {
      value: ['🎈', '🎁', '🎉', '🎊'],
    },
  },
};

const hearts: ConfettiOptions = {
  colors: ['#000000', '#FFFFFF'],
  shapes: ['heart', 'image', 'text'],
  scalar: 1.5,
  shapeOptions: {
    image: [
      {
        src: '/icons/next.svg',
      },
    ],
    text: {
      value: ['🖤', '🤍'],
    },
  },
};

export const presets = {
  confetti,
  hearts,
};
