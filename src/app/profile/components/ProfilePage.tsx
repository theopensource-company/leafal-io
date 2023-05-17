import * as React from "react";

import { TPublicUserRecord } from "@/constants/types/User.types";

export default function ProfilePage({ user }: { user: TPublicUserRecord }) {
  return <>Profile of {user.profile.displayname ?? user.username}</>;
}
