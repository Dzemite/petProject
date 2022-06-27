import type { Dispatch as DispatchReact } from 'react';
import { IUser } from 'types/User';

import { UserState } from './userState';
/* PLOP_INJECT_IMPORT_STATE */

export * from './userState';
/* PLOP_INJECT_IMPORT_TYPES */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Action<T, P = any, M = void> = { type: T; payload?: P; meta?: M };
export type Dispatch = DispatchReact<{ type: string }>;

export type State = {
  user: IUser;
  /* PLOP_INJECT_MODIFY_STATE */
};
