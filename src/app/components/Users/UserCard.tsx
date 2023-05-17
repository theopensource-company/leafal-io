import styles from './UserCard.module.scss';

import React from "react";
import { TPublicUserRecord, TUserRecord } from "@/constants/types/User.types";

export type UserCardProps = {
    user: TUserRecord | TPublicUserRecord;
}

export default function UserCard({
    user
}: UserCardProps) {
    const processName = () => user.profile.displayname ?? user.username;

    return <div className={styles.default}>
        <div className={styles.avatar}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={user.picture} alt={processName()} />
        </div>
        <span className={styles.username}>{processName()}</span>
    </div>
}