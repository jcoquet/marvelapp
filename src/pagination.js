import { PAGINATION_LIMIT, PAGINATION_OFFSET } from './constants'

const pagination = {
    numPage: PAGINATION_OFFSET * PAGINATION_LIMIT,
    offset: PAGINATION_OFFSET,
    limit: PAGINATION_LIMIT,
    total: 0,
    count: 0
}

export default pagination;