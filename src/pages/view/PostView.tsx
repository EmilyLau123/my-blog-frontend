import DataCard from '../../components/DataCard';
import { VIEW_POST_TITLE } from '../../utils/constants';
import { postType } from '../../utils/type/postType';

const MOCK_POST_DATA: postType = {
  id: 1,
  value: 'post1',
  title: 'post Title',
  description: 'POst description'
};

const PostView = () => {
  return <DataCard type={VIEW_POST_TITLE} data={MOCK_POST_DATA} />;
};

export default PostView;
