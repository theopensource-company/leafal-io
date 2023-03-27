import { createSignal } from 'solid-js';
import { unstable_clientOnly } from 'solid-start';
import { Button } from '~/components/Button';
import { Tab } from '~/components/Layout/Groups/Tabs';
import styles from '~/styles/components/Development/Suite.module.scss';

export const Query = unstable_clientOnly(async () => {
    const { SurrealInstance } = await import('~/library/Surreal');
    return {
        default: () => {
            const [input, setInput] = createSignal('');
            const [output, setOutput] = createSignal(
                'Run a query for some output'
            );

            const submit = () => {
                if (input().length > 0) {
                    SurrealInstance.opiniatedQuery(input()).then((res) => {
                        setOutput(JSON.stringify(res, null, 2));
                    });
                } else {
                    alert('No query');
                }
            };

            return (
                <Tab.Panel>
                    <div class={styles.queryPanel}>
                        <h1>Query the database</h1>

                        <textarea
                            placeholder="Query"
                            value={input()}
                            onInput={(e) => setInput(e.currentTarget.value)}
                        />
                        <Button onClick={submit}>Execute</Button>
                        <div>{output()}</div>
                    </div>
                </Tab.Panel>
            );
        },
    };
});

export const QueryTab = function () {
    return <Tab default>Query</Tab>;
};
