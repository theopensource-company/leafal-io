import { Environment } from './Environment';

export function logDev(...data: unknown[]) {
    if (Environment == 'dev') console.log.apply(null, data);
}
