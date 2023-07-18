import { ConfettiOptions, confetti } from 'tsparticles-confetti';
import { options } from '@/constants/tsparticles';

export default class TsparticlesTools {
  static emit = {
    confettiCanon({
      eventTarget,
      options: customOptions,
    }: {
      eventTarget?: EventTarget | null | undefined;
      options?: ConfettiOptions;
    }) {
      if (eventTarget instanceof Element) {
        let position: ConfettiOptions['position'];
        if (!customOptions?.position) {
          const { height, left, top, width } = eventTarget.getBoundingClientRect();
          const { innerHeight, innerWidth } = window;
          position = {
            x: ((left + width / 2) / innerWidth) * 100,
            y: ((top + height / 2) / innerHeight) * 100,
          };
        } else {
          position = customOptions.position;
        }
        confetti({ ...options.cofetti, ...customOptions, position });
      } else {
        confetti({ ...options.cofetti, ...customOptions });
      }
    },
  };
}
