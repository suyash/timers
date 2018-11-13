import TimerElement from "./components/timer/timer";
import { add, Timer, timers } from "./store";

export default async function main(): Promise<void> {
    const form: HTMLFormElement = document.querySelector("main > header form") as HTMLFormElement;
    form.addEventListener("submit", onAddNewTimer);

    const t: Timer[] = await timers();
    for (const timer of t) {
        addNewTimer(timer);
    }
}

async function onAddNewTimer(this: HTMLFormElement, e: Event): Promise<void> {
    e.preventDefault();

    const title: string = (this[0] as any).value;
    (this[0] as any).value = "";
    const target: number = (this[1] as any).valueAsNumber;
    (this[1] as any).value = "";

    if (!title || !target) {
        return;
    }

    const timer: Timer = await add(target, title);
    addNewTimer(timer);
}

function addNewTimer(timer: Timer): void {
    const element: TimerElement = new TimerElement(timer);
    (document.querySelector("main > section") as HTMLElement).appendChild(element);
}