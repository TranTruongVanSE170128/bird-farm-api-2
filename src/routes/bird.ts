import express from 'express'
import { getSearchBirds, createBird, getBirdsByIds, getBirdDetail } from '../controllers/bird'
import { validateRequestData } from '../middleware/validate-request-data'
import { getSearchBirdsSchema, createBirdSchema, getBirdsByIdsSchema, getBirdDetailSchema } from '../validations/bird'
import verifyToken from '../middleware/auth'
import checkRole from '../middleware/checkRole'
import { Role } from '../typings/types'
const router = express.Router()

router.get('/', validateRequestData(getSearchBirdsSchema), getSearchBirds)

router.get('/:id', validateRequestData(getBirdDetailSchema), getBirdDetail)

router.post('/', verifyToken, checkRole(['admin' as Role]), validateRequestData(createBirdSchema), createBird)

router.get('/get-by-ids', validateRequestData(getBirdsByIdsSchema), getBirdsByIds)

export default router
