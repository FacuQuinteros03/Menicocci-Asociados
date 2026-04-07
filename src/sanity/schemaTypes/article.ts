import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'article',
  title: 'Artículo',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (rule) => rule.required().min(5).max(120),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 120,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Extracto',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required().min(20).max(350),
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen de portada',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'content',
      title: 'Contenido',
      type: 'array',
      of: [{type: 'block'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Derecho laboral', value: 'laboral'},
          {title: 'Derecho civil', value: 'civil'},
          {title: 'Derecho penal', value: 'penal'},
          {title: 'Derecho tributario', value: 'tributario'},
          {title: 'Otros', value: 'otros'},
        ],
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
  ],
})
