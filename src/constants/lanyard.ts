export enum LanyardSocketEvents {
  initState = 'INIT_STATE',
  presenceUpdate = 'PRESENCE_UPDATE',
}

export const options = {
  apiUrl: 'https://api.lanyard.rest/v1',
  websocketUrl: 'wss://api.lanyard.rest/socket',
  heartBeatPeriod: 1000 * 30,
};

export enum Activities {
  Playing,
  Streaming,
  Listening,
  Watching,
  Custom,
  Competing,
}
