import { BaseModel } from './base.model';

export interface UserDeviceModel extends BaseModel {
		endpoint ?: string,
    expirationTime ?: number | null,
    keys ?: {
      p256dh ?: string,
      auth ?: string
    }
}