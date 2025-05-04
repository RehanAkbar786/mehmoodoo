import React, { useState } from 'react';
import { createCampaign } from './api';

function App() {
  const [name, setName] = useState('');
  const [adsterraLink, setAdsterraLink] = useState('');

  const handleCreate = async () => {
    const campaign = await createCampaign({ name, adsterraLink });
    console.log('Campaign created:', campaign);
  };

  return (
    <div>
      <h1>Campaign Manager</h1>
      <input
        type="text"
        placeholder="Campaign Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Adsterra Link"
        value={adsterraLink}
        onChange={(e) => setAdsterraLink(e.target.value)}
      />
      <button onClick={handleCreate}>Create Campaign</button>
    </div>
  );
}

export default App;