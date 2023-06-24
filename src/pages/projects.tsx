import NextTools from '@/classes/next_tools';
import { INextPageWithLayout } from '@/types/app';

const ProjectsPage: INextPageWithLayout = ({ className }) => {
  return <div className={[className].filter(Boolean).join(' ')}></div>;
};

ProjectsPage.getLayout = NextTools.layout.default;

export default ProjectsPage;
