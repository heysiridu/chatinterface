// Placeholder store files to resolve import errors
import { create } from 'zustand';

interface MsgStore {
  pendingMessage: string;
  setPendingMessage: (msg: string) => void;
  clearPendingMessage: () => void;
}

export const useMsgStore = create<MsgStore>((set) => ({
  pendingMessage: '',
  setPendingMessage: (msg: string) => set({ pendingMessage: msg }),
  clearPendingMessage: () => set({ pendingMessage: '' }),
}));
