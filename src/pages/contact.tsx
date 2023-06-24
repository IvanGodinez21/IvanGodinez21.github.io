import NextTools from '@/classes/next_tools';
import { INextPageWithLayout } from '@/types/app';

const ContactPage: INextPageWithLayout = ({ className }) => {
  return <div className={[className].filter(Boolean).join(' ')}></div>;
};

ContactPage.getLayout = NextTools.layout.default;

export default ContactPage;
