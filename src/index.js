window.higlassTracks = window.higlassTracks || {};
window.higlassTracksByType = window.higlassTracksByType || {};

const register = (trackDef) => {
  window.higlassTracks[trackDef.name] = trackDef;
  window.higlassTracksByType[trackDef.config.type] = trackDef;
};

export default register;
