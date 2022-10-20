export const MOCK_CATS = [
  {
    id: 1,
    label: 'Programming',
    value: 'programming',
    topics: [
      {
        id: 1,
        value: 'react',
        title: 'React',
        description: 'React description',
        //   images: string[],
        createDate: new Date(),
        updateDate: new Date()
      }
    ]
  },
  {
    id: 2,
    label: 'Finance',
    value: 'finance'
  },
  {
    id: 3,
    label: 'Languages',
    value: 'languages',
    topics: [
      {
        id: 1,
        value: 'english',
        title: 'English',
        description: 'English description',
        //   images: string[],
        createDate: new Date(),
        updateDate: new Date()
      },
      {
        id: 2,
        value: 'jp',
        title: 'JP',
        description: 'JP description',
        //   images: string[],
        createDate: new Date(),
        updateDate: new Date()
      }
    ]
  }
];
