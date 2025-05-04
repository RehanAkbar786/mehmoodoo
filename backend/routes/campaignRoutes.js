import express from 'express';
import { createCampaign, trackTraffic } from '../controllers/campaignController.js';

const router = express.Router();

router.post('/', createCampaign);
router.post('/track/:name', trackTraffic);

export default router;