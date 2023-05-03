import connect from 'next-connect'

import {getAllCategories, createCategories} from '../../../controller/categoryController'

const handler = connect();

handler.get(getAllCategories)
handler.post(createCategories)

export default handler