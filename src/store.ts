import { del, get, keys, set, Store } from "idb-keyval";

export interface Timer {
    id: string;
    target: number;
    title: string;
    targetString: string;
}

const store: Store = new Store("timers", "timers");

export async function add(target: number, title: string, targetString: string): Promise<Timer> {
    const id: string = uuid();
    const timer: Timer = { id, target, title, targetString };
    await set(id, timer, store);
    return timer;
}

export async function remove(timer: Timer): Promise<void> {
    await del(timer.id, store);
}

export async function timers(): Promise<Timer[]> {
    const k: string[] = await keys(store) as string[];
    return await Promise.all(k.map((val: string): Promise<Timer> => get(val, store)));
}

function uuid(): string {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (): string => {
        return Math.floor(Math.random() * 16).toString(16);
    });
}
