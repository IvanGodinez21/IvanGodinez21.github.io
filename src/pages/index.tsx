import NextTools from '@/classes/next_tools';
import { INextPageWithLayout } from '@/types/app';

const IndexPage: INextPageWithLayout = ({ className }) => {
  return <div className={[className].filter(Boolean).join(' ')}></div>;
};

IndexPage.getLayout = NextTools.layout.default;

export default IndexPage;
