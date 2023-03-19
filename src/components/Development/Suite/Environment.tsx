import { For } from 'solid-js';
import { Tab } from '~/components/Layout/Groups/Tabs';
import {
    featureFlagOptions,
    featureFlags,
    FeatureFlagValue,
} from '~/library/Environment';
import styles from '~/styles/components/Development/Suite.module.scss';

export function Environment() {
    const Value = (props: { value: FeatureFlagValue }) => (
        <>
            <td>{typeof props.value}</td>
            <td>{props.value.toString()}</td>
        </>
    );

    return (
        <Tab.Panel class={styles.environmentPanel}>
            <h1>Environment</h1>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={featureFlagOptions}>
                        {(item) => (
                            <tr>
                                <td>{item}</td>
                                <Value value={featureFlags[item]} />
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </Tab.Panel>
    );
}

Environment.Tab = function () {
    return <Tab>Environment</Tab>;
};
