import { content } from '@/contexts/scroll_ref';
import { ILayout } from '@/types/layout';

const NoneLayout: ILayout = ({ Component, font, pageProps }) => {
  return (
    <div className={`${font.className}`} ref={content}>
      <Component {...pageProps} />
    </div>
  );
};

export default NoneLayout;
