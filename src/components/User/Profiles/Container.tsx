import { JSX } from "solid-js";

import styles from '~/styles/components/User/Profiles/Page.module.scss';

export function ProfileContainer(_props: JSX.HTMLElementTags['div']) {
    return <div class={styles.container} {..._props} />;
}