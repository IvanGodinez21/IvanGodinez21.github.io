import { ConfettiOptions, confetti } from 'tsparticles-confetti';
import { presets } from '@/constants/tsparticles';

export default abstract class TsparticlesTools {
  static effect({
    eventTarget,
    options,
    preset,
  }: {
    eventTarget?: EventTarget | null | undefined;
    options?: ConfettiOptions;
    preset?: ConfettiOptions;
  }) {
    if (eventTarget instanceof Element) {
      let position: ConfettiOptions['position'];
      if (!options?.position) {
        const { height, left, top, width } =
          eventTarget.getBoundingClientRect();
        const { innerHeight, innerWidth } = window;
        position = {
          x: ((left + width / 2) / innerWidth) * 100,
          y: ((top + height / 2) / innerHeight) * 100,
        };
      } else {
        position = options.position;
      }
      confetti({ ...preset, ...options, position });
    } else {
      confetti({ ...preset, ...options });
    }
  }

  static emit = ({
    eventTarget,
    options,
    preset = 'confetti',
  }: {
    eventTarget?: EventTarget | null | undefined;
    options?: ConfettiOptions;
    preset?: keyof typeof presets;
  }) => {
    this.effect({ eventTarget, options, preset: presets[preset] });
  };
}
