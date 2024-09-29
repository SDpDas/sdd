export default {
    name: 'works',
    title: 'Works',
    type: 'document',
    fields: [

        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'projectlink',
            title: 'Project Link',
            type: 'string'
        },
        {
            name: 'codelink',
            title: 'Code Link',
            type: 'string'
        },
        {
            name: 'imgurl',
            title: 'ImgUrl',
            type: 'image',
            options: [{
                hotspot: true
            }]
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [
                {
                    name: 'tag',
                    title: 'Tag',
                    type: 'string'
                }
            ]
        },

    ],
}