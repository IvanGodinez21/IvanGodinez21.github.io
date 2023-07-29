import { LanyardSocketEvents } from '@/constants/lanyard';
import {
  ILanyard,
  ILanyardConstructor,
  ILanyardResponse,
} from '@/types/lanyard';

export default class Lanyard {
  public apiUrl: ILanyard['apiUrl'];
  private events: { [eventName: string]: ((user: ILanyardResponse) => void)[] };
  public heartBeatPeriod?: ILanyard['heartBeatPeriod'];
  private socket?: WebSocket;
  public socketMode: ILanyard['socketMode'];
  public userId: ILanyard['userId'];
  public webSocketUrl: ILanyard['webSocketUrl'];

  constructor({
    apiUrl = 'https://api.lanyard.rest/v1',
    heartBeatPeriod = 1000 * 30,
    socketMode = true,
    userId,
    webSocketUrl = 'wss://api.lanyard.rest/socket',
  }: ILanyardConstructor) {
    this.apiUrl = apiUrl;
    this.events = {};
    this.heartBeatPeriod = heartBeatPeriod;
    this.userId = userId;
    this.socketMode = socketMode;
    this.webSocketUrl = webSocketUrl;
    if (this.socketMode) this.createWebSocket();
  }

  private emit(eventName: string, user: ILanyardResponse) {
    const handlers = this.events[eventName];
    if (handlers) {
      handlers.forEach((handler) => handler(user));
    }
  }

  public on(
    eventName: LanyardSocketEvents,
    handler: (user: ILanyardResponse) => void,
  ) {
    if (!this.socketMode) throw new Error('Socket mode is disabled');
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(handler);
  }

  public off(
    eventName: LanyardSocketEvents,
    handler: (user: ILanyardResponse) => void,
  ) {
    if (!this.socketMode) throw new Error('Socket mode is disabled');
    const handlers = this.events[eventName];
    if (handlers) {
      const index = handlers.indexOf(handler);
      if (index !== -1) {
        handlers.splice(index, 1);
      }
    }
  }

  private createWebSocket({
    attempt = 0,
  }: { attempt?: number } | undefined = {}) {
    this.socket = new WebSocket(this.webSocketUrl);
    const subscription =
      typeof this.userId === 'string' ? 'subscribe_to_id' : 'subscribe_to_ids';

    this.socket.addEventListener('open', () => {
      this.socket?.send(
        JSON.stringify({
          op: 2,
          d: {
            [subscription]: this.userId,
          },
        }),
      );

      const heartbeat = setInterval(() => {
        this.socket?.send(
          JSON.stringify({
            op: 3,
          }),
        );
      }, this.heartBeatPeriod);

      if (this.socket) {
        this.socket.onclose = () => {
          clearInterval(heartbeat);
          setTimeout(() => {
            if (attempt > 5) {
              console.error('Warning: Failed to reconnect to Lanyard');
              return;
            }
            this.createWebSocket({ attempt: attempt + 1 });
          }, 3000);
        };
      }
    });

    this.socket.addEventListener('message', ({ data }) => {
      const { t, d } = JSON.parse(data.toString());
      if (
        t === LanyardSocketEvents.initState ||
        t === LanyardSocketEvents.presenceUpdate
      )
        this.emit(t, d);
    });
  }

  public async fetch(): Promise<ILanyardResponse | undefined> {
    if (typeof this.userId === 'string') {
      return (
        await (
          await fetch(`${this.apiUrl}/users/${this.userId}`, {
            cache: 'no-cache',
          })
        ).json()
      ).data;
    }
  }

  public static async fetch({
    apiUrl = 'https://api.lanyard.rest/v1',
    userId,
  }: {
    apiUrl?: ILanyardConstructor['apiUrl'];
    userId: ILanyardConstructor['userId'];
  }): Promise<ILanyardResponse | undefined> {
    if (typeof userId === 'string') {
      return (
        await (
          await fetch(`${apiUrl}/users/${userId}`, { cache: 'no-cache' })
        ).json()
      ).data;
    }
  }

  public connect() {
    if (!this.socketMode) throw new Error('Socket mode is disabled');
    if (!this.socket) this.createWebSocket();
  }

  public disconnect() {
    if (this.socket) {
      if (this.socket.readyState !== WebSocket.CONNECTING) this.socket.close();
      this.socket = undefined;
    }
  }
}
