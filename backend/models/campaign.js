import mongoose from 'mongoose';

const campaignSchema = mongoose.Schema({
  name: { type: String, required: true },
  adsterraLink: { type: String, required: true },
  trackingLink: { type: String, required: true },
  status: { type: String, default: 'active' },
  totalHits: { type: Number, default: 0 },
  blocked: { type: Number, default: 0 },
  forwarded: { type: Number, default: 0 },
});

const Campaign = mongoose.model('Campaign', campaignSchema);
export default Campaign;