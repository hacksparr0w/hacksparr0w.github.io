const GIT_HUB_URL = "https://github.com";
const INSTAGRAM_URL = "https://www.instagram.com";
const TWITCH_URL = "https://www.twitch.tv";
const TWITTER_URL = "https://twitter.com";

export const getEmailUrl = email => (
  `mailto:${email}?subject=Hey!`
);

export const getGitHubProfileUrl = userName => (
  new URL(userName, GIT_HUB_URL).href
);

export const getInstagramProfileUrl = userName => (
  new URL(userName, INSTAGRAM_URL).href
);

export const getTwitchProfileUrl = userName => (
  new URL(userName, TWITCH_URL).href
);

export const getTwitterProfileUrl = userName => (
  new URL(userName, TWITTER_URL)
);

export const removeElement = (array, element) => (
  array.filter(other => other !== element)
);

export const removeElements = (array, elements) => (
  array.filter(other => !elements.includes(other))
);

export const removeElementAt = (array, index) => (
  array.filter((_, other) => other !== index)
);

export const sleep = timeout => new Promise(resolve => {
  setTimeout(resolve, timeout);
});
