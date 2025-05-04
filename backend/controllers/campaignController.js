import Campaign from '../models/Campaign.js';
import { filterTraffic } from '../utils/trafficFilter.js';

export const createCampaign = async (req, res) => {
  const { name, adsterraLink } = req.body;
  const trackingLink = `http://localhost:5000/api/campaigns/track/${name}`;

  try {
    const campaign = new Campaign({ name, adsterraLink, trackingLink });
    await campaign.save();
    res.status(201).json(campaign);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const trackTraffic = async (req, res) => {
  const { name } = req.params;
  const campaign = await Campaign.findOne({ name });

  if (!campaign) return res.status(404).json({ error: 'Campaign not found' });

  const { ip, country } = req.body;
  const result = filterTraffic(ip, country);

  campaign.totalHits += 1;
  if (!result.isClean) {
    campaign.blocked += 1;
    await campaign.save();
    return res.status(403).json({ message: 'Blocked traffic' });
  }

  campaign.forwarded += 1;
  await campaign.save();
  res.redirect(campaign.adsterraLink);
};