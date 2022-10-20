import { listItemType } from '../utils/type/listType';

export const MOCK_LISTITEM: listItemType[] = [
  {
    label: 'Programming',
    value: 'Programming',
    subItem: [
      {
        label: 'React',
        value: 'React'
      }
    ]
  },
  {
    label: 'Finance',
    value: 'Finance'
  },
  {
    label: 'Languages',
    value: 'Languages',
    subItem: [
      {
        label: 'Japanese',
        value: 'Japanese'
      },
      {
        label: 'English',
        value: 'English'
      }
    ]
  }
];
