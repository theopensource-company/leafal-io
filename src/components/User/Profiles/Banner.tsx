import { JSX } from "solid-js";

import styles from '~/styles/components/User/Profiles/Page.module.scss';

export function ProfileBanner(_props: JSX.HTMLElementTags['div']) {
    return <div class={styles.banner} {..._props} />;
}