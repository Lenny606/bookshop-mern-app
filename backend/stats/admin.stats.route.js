import express from 'express';
import {getStatistics} from "./admin.stats.js";

const router = express.Router()

router.get('/', getStatistics)

export default router;