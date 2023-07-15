export interface ILanyardResponse {
  active_on_discord_desktop: boolean;
  active_on_discord_mobile: boolean;
  active_on_discord_web: boolean;
  activities: {
    type: number;
    name: string;
    id: string;
    emoji?: { name: string };
    created_at: number;
    state?: string;
    session_id?: string;
    party?: { size?: number[]; id: string };
    flags?: number;
    details?: string;
    assets?: {
      large_image: string;
      small_text?: string;
      small_image?: string;
      large_text?: string;
    };
    application_id?: string;
    timestamps?: {
      start: number;
      end?: number;
    };
    buttons?: string[];
    syncId?: string;
  }[];
  discord_status: string;
  discord_user: {
    username: string;
    public_flags: number;
    id: string;
    global_name: string;
    display_name: string;
    discriminator: string;
    bot: boolean;
    avatar_decoration: null;
    avatar: string;
  };
  kv: { [key: string]: string };
  listening_to_spotify: boolean;
  spotify: {
    track_id: string;
    timestamps: {
      start: number;
      end?: number;
    };
    song: string;
    artist: string;
    album_art_url: string;
    album: string;
  };
}

export interface ILanyardConstructor {
  apiUrl?: `https://${string}` | `http://${string}`;
  heartBeatPeriod?: number;
  socketMode?: boolean;
  userId: string | string[];
  webSocketUrl?: `wss://${string}`;
}

export type ILanyard = Required<ILanyardConstructor>;
