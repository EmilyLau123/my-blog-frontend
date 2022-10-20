import { topicType } from './topicType';

export type categoryType = {
  id?: number;
  label: string;
  value: string;
  icon?: string;
  topics?: topicType[];
};
