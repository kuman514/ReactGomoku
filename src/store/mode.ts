import create from 'zustand';

import { AppMode } from '^/types';

export interface ModeStore {
  mode: AppMode;
}

export interface ModeAction {
  changeMode: (newMode: AppMode) => void;
}

const useModeStore = create<ModeStore & ModeAction>((set) => ({
  mode: AppMode.GAME,
  changeMode: (newMode: AppMode) => set((status) => ({
    ...status,
    mode: newMode,
  })),
}));

export default useModeStore;
