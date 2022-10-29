import { Box } from '@mui/material';
import DataCard from '../components/DataCard';
import { topicType } from '../utils/type/topicType';

const MOCK_TOPIC_LIST: topicType[] = [
  {
    id: 1,
    value: 'test1',
    title: 'title1',
    description: 'description1'
  },
  {
    id: 2,
    value: 'test1',
    title: 'title1',
    description: 'description1'
  }
];

const DataList = () => {
  return (
    <Box>
      {MOCK_TOPIC_LIST.map((topic) => (
        <Box key={topic.id} sx={{ mb: 3 }}>
          <DataCard data={topic} />
        </Box>
      ))}
    </Box>
  );
};

export default DataList;
