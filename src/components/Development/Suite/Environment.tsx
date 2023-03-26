import { For } from 'solid-js';
import { Tab } from '~/components/Layout/Groups/Tabs';
import { featureFlagOptions, featureFlags } from '~/library/Environment';
import styles from '~/styles/components/Development/Suite.module.scss';

export function Environment() {
    return (
        <Tab.Panel>
            <div class={styles.environmentPanel}>
                <h1>Environment</h1>
                <FeatureFlagsTable />
                <EnvironmentVariablesTable />
            </div>
        </Tab.Panel>
    );
}

Environment.Tab = function () {
    return <Tab>Environment</Tab>;
};

const Value = (props: { value: unknown }) => (
    <>
        <td>{typeof props.value}</td>
        <td>{props.value?.toString()}</td>
    </>
);

const FeatureFlagsTable = () => {
    return (
        <div>
            <h2>Feature flags</h2>
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
        </div>
    );
};

const EnvironmentVariablesTable = () => {
    console.log(import.meta.env);
    const env = () => import.meta.env;
    const envKeys = () => Object.keys(env()) as (keyof typeof env)[];
    return (
        <div>
            <h2>Environment variables</h2>
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Type</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <For each={envKeys()}>
                        {(item) => (
                            <tr>
                                <td>{item}</td>
                                <Value value={env()[item]} />
                            </tr>
                        )}
                    </For>
                </tbody>
            </table>
        </div>
    );
};
