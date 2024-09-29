import createSchema from 'part:@sanity/base/schema-creator'

import schemaTypes from 'all:part:@sanity/base/schema-type'

import abouts from './abouts'
import brands from './brands'
import contact from './contact'
import skills from './skills'
import testimonial from './testimonial'
import experience from './workExperience'
import work from './works'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        abouts, brands, contact, skills, testimonial, experience, work
    ])
})