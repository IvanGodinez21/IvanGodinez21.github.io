import { ConfettiOptions } from 'tsparticles-confetti';

const cofetti: ConfettiOptions = {
  shapes: ['circle', 'square', 'text', 'triangle'],
  shapeOptions: {
    text: {
      value: ['🎈', '🎁', '🎉', '🎊'],
    },
  },
};

export const options = {
  cofetti,
};
