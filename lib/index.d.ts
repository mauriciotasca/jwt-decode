export interface IJwtDecode {
   decode(token: string, options?:any): Object;
}

declare class JwtDecode implements IJwtDecode{
    decode(token: string, options?: any): Object;
}
