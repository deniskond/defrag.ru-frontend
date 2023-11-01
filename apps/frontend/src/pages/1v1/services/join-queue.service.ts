import { Injectable } from '@angular/core';
import { Physics } from '@dfcomps/contracts';

@Injectable({
  providedIn: 'root',
})
export class JoinQueueService {
  private _queue: Physics | null = null;

  public get queue(): Physics | null {
    return this._queue;
  }

  public setJoinQueue(physics: Physics | null): void {
    this._queue = physics;
  }
}
