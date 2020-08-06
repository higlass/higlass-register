window.higlassTracks = window.higlassTracks || {};
window.higlassTracksByType = window.higlassTracksByType || {};
window.higlassDataFetchersByType = window.higlassDataFetchersByType || {};

const getRandomName = () => Math.random().toString(36).substring(2, 8);

const registerTrack = (trackDef, { force = false } = {}) => {
  // The following is only needed for backward compatibility
  let name = getRandomName();
  while (window.higlassTracks[name]) {
    name = getRandomName();
  }

  trackDef.name = name;
  window.higlassTracks[trackDef.name] = trackDef;
  // backward compatibility: end

  if (window.higlassTracksByType[trackDef.config.type] && !force) {
    // eslint-disable-next-line
    console.warn(
      `A track with the same type (${trackDef.config.type}) was already ` +
      'registered. To override it, set force to true.',
    );
  } else {
    window.higlassTracksByType[trackDef.config.type] = trackDef;
  }
};

const register = (trackDef, ...args) => {
  // eslint-disable-next-line no-console
  console.warn('register() is deprecated. Please use registerTrack() instead.');
  registerTrack(trackDef, ...args);
};

const registerDataFetcher = (dataFetcherDef, { force = false } = {}) => {
  if (window.higlassDataFetchersByType[dataFetcherDef.config.type] && !force) {
    // eslint-disable-next-line
    console.warn(
      `A data fetcher with the same type (${dataFetcherDef.config.type}) was already ` +
      'registered. To override it, set force to true.',
    );
  } else {
    window.higlassDataFetchersByType[dataFetcherDef.config.type] = dataFetcherDef;
  }
};

export default register;
export { registerTrack, registerDataFetcher };
