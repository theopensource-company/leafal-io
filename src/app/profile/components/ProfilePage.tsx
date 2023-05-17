import { SurrealInstance } from "@/app/lib/Surreal";
import { TPublicUserRecord } from "@/constants/types/User.types"
import { useEffect, useState } from "react";

async function getProfileData(slug: string): Promise<TPublicUserRecord | null> {
    console.log(slug);
    
    const result = await SurrealInstance.query<[TPublicUserRecord[]]>("SELECT * FROM pubuser WHERE username=$slug", { slug });

    console.log(result);
    

    if (!result?.[0]?.result?.[0]) return null;
    return result[0].result[0];
}

export default function ProfilePage({
    user
}: {
    user: TPublicUserRecord;
}) {
    return <>
        Profile of {user.profile.displayname ?? user.username}
    </>
  }