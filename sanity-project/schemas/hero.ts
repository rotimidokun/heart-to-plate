// schemas/pet.js
export default {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    }, 
    {
      name: 'description',
      type: 'array',
      title: 'Description',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
