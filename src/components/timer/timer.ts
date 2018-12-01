import differenceInMilliseconds from "date-fns/difference_in_milliseconds";

import { Timer as TimerInterface } from "../../store";

const MILLISECONDS: number = 1000;
const SECONDS: number = MILLISECONDS * 60;
const MINUTES: number = SECONDS * 60;
const HOURS: number = MINUTES * 24;

export default class Timer extends HTMLElement {
    private days: HTMLElement;
    private hours: HTMLElement;
    private minutes: HTMLElement;
    private seconds: HTMLElement;
    private milliseconds: HTMLElement;
    private targetTS: number;

    constructor(timer: TimerInterface) {
        super();

        this.id = timer.id;

        const template: HTMLTemplateElement = document.querySelector("#timer") as HTMLTemplateElement;
        const node: DocumentFragment = document.importNode(template.content, true);

        (node.querySelector("header h2") as HTMLElement).innerText = timer.title;
        (node.querySelector("header h4") as HTMLElement).innerText = timer.targetString;

        this.targetTS = timer.target;

        this.days = node.querySelector(".days") as HTMLElement;
        this.hours = node.querySelector(".hours") as HTMLElement;
        this.minutes = node.querySelector(".minutes") as HTMLElement;
        this.seconds = node.querySelector(".seconds") as HTMLElement;
        this.milliseconds = node.querySelector(".milliseconds") as HTMLElement;

        this.appendChild(node);
    }

    get target(): number {
        return this.targetTS;
    }

    public connectedCallback(): void {
        this.update();
    }

    private update = (): void => {
        const currentTime: number = Date.now();

        let diff: number = differenceInMilliseconds(this.targetTS, currentTime);
        if (diff < 0) {
            this.updateDays(0);
            this.updateHours(0);
            this.updateMinutes(0);
            this.updateSeconds(0);
            this.updateMilliseconds(0);
            this.classList.add("done");
            return;
        }

        const days: number = Math.floor(diff / HOURS);
        diff -= days * HOURS;
        this.updateDays(days);

        const hours: number = Math.floor(diff / MINUTES);
        diff -= hours * MINUTES;
        this.updateHours(hours);

        const minutes: number = Math.floor(diff / SECONDS);
        diff -= minutes * SECONDS;
        this.updateMinutes(minutes);

        const seconds: number = Math.floor(diff / MILLISECONDS);
        diff -= seconds * MILLISECONDS;
        this.updateSeconds(seconds);

        this.updateMilliseconds(diff);

        requestAnimationFrame(this.update);
    }

    private updateMilliseconds = (val: number): void => {
        const cval: number = parseInt(this.milliseconds.innerText, 10);
        if (cval !== val) {
            this.milliseconds.innerText = val >= 100 ? String(val) : val >= 10 ? "0" + String(val) : "00" + String(val);
        }
    }

    private updateSeconds = (val: number): void => {
        const cval: number = parseInt(this.seconds.innerText, 10);
        if (cval !== val) {
            this.seconds.innerText = val >= 10 ? String(val) : "0" + String(val);
        }
    }

    private updateMinutes = (val: number): void => {
        const cval: number = parseInt(this.minutes.innerText, 10);
        if (cval !== val) {
            this.minutes.innerText = val >= 10 ? String(val) : "0" + String(val);
        }
    }

    private updateHours = (val: number): void => {
        const cval: number = parseInt(this.hours.innerText, 10);
        if (cval !== val) {
            this.hours.innerText = val >= 10 ? String(val) : "0" + String(val);
        }
    }

    private updateDays = (val: number): void => {
        const cval: number = parseInt(this.days.innerText, 10);
        if (cval !== val) {
            this.days.innerText = val >= 10 ? String(val) : "0" + String(val);
        }
    }
}

window.customElements.define("x-timer", Timer);
