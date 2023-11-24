import { User } from "#/constants/types/User.types";
import { getCurrentUser } from "#/library/queries/User.queries";
import { defineStore } from "pinia";

export type AuthState = {
    user?: User;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({ user: undefined } as AuthState),
    getters: {
        currentUser: (state) => state.user || null
    },
    actions: {
        async refreshUser() { this.user = await getCurrentUser(); }
    }
});