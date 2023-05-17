'use client';

import { TPublicUserRecord } from "@/constants/types/User.types";
import { useAuthenticatedUser } from "../hooks/Queries/Auth";
import ProfilePage from "./components/ProfilePage";
import { SurrealInstance } from "../lib/Surreal";
import { useEffect, useState } from "react";

async function getMyProfile(): Promise<TPublicUserRecord | null> {
  const result = await SurrealInstance.query<[TPublicUserRecord[]]>("SELECT * FROM pubuser WHERE username=$auth.username");

  if (!result?.[0]?.result?.[0]) return null;
  return result[0].result[0];
}

export default function ProfileIndex() {
  const { data: authenticatedUser } = useAuthenticatedUser();
  const [user, setUser] = useState<TPublicUserRecord | null>();

  useEffect(() => {
    getMyProfile().then(u => setUser(u));
  }, [authenticatedUser]);

  return <>
    {
      authenticatedUser ? user && <ProfilePage user={user} /> : "Sign in to view your own profile."
    }
  </>
}
