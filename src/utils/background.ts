chrome.runtime.onInstalled.addListener(async () => {
    // Reload tabs to apply content scripts
    const tabs = await chrome.tabs.query({ url: ['https://chat-shared1.zhile.io/*'] })
    tabs.forEach(({ id }) => chrome.tabs.reload(id))
})
