const DELAY_TIME = 2000;

const delay = (duration) => new Promise(resolve => setTimeout(resolve, duration));

const clickElement = (element) => element && element.click();

const getSubscribedChannels = () => 
  Array.from(document.querySelectorAll('ytd-channel-renderer [aria-label^="Unsubscribe from"]'));

const getConfirmButton = () => 
  document.querySelector('yt-confirm-dialog-renderer [aria-label^="Unsubscribe"]');

const unsubscribeFromAllChannels = async (channels) => {
  for (const [index, channel] of channels.entries()) {
    clickElement(channel);
    await delay(DELAY_TIME);
    clickElement(getConfirmButton());
    console.log(`Unsubscribed from ${index + 1} out of ${channels.length} channels.`);
  }
};

(async function unsubscribeFromYouTubeChannels() {
  const channels = getSubscribedChannels();
  console.log(`Found ${channels.length} channels.`);
  await unsubscribeFromAllChannels(channels);
})();
