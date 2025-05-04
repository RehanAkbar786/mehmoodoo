import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/campaigns';

export const createCampaign = async (campaignData) => {
  const response = await axios.post(BASE_URL, campaignData);
  return response.data;
};