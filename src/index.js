window.higlassTracks = window.higlassTracks || {};
window.higlassTracksByType = window.higlassTracksByType || {};

const getRandomName = () => Math.random().toString(36).substring(2, 8);

const register = (trackDef) => {
  let name = getRandomName();
  while (window.higlassTracks[name]) {
    name = getRandomName();
  }

  trackDef.name = name;
  window.higlassTracks[trackDef.name] = trackDef;
  window.higlassTracksByType[trackDef.config.type] = trackDef;
};

export default register;
