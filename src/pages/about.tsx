import NextTools from '@/classes/next_tools';
import { INextPageWithLayout } from '@/types/app';

const AboutPage: INextPageWithLayout = ({ className }) => {
  return <div className={[className].filter(Boolean).join(' ')}></div>;
};

AboutPage.getLayout = NextTools.layout.default;

export default AboutPage;
