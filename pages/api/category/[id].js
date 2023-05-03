import connect from 'next-connect'

import {getSingleCategories, updateCategories, deleteCategories} from '../../../controller/categoryController'

const handler = connect();

handler.get(getSingleCategories)
handler.put(updateCategories)
handler.delete(deleteCategories)
export default handler