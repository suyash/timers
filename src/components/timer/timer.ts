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
    private lastUpdated: number;

    constructor(timer: TimerInterface) {
        super();

        this.id = timer.id;

        const template: HTMLTemplateElement = document.querySelector("#timer") as HTMLTemplateElement;
        const node: DocumentFragment = document.importNode(template.content, true);

        (node.querySelector("header") as HTMLElement).innerText = timer.title;

        this.lastUpdated = Date.now();

        this.days = node.querySelector(".days") as HTMLElement;
        this.hours = node.querySelector(".hours") as HTMLElement;
        this.minutes = node.querySelector(".minutes") as HTMLElement;
        this.seconds = node.querySelector(".seconds") as HTMLElement;
        this.milliseconds = node.querySelector(".milliseconds") as HTMLElement;

        let diff: number = differenceInMilliseconds(timer.target, this.lastUpdated);

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

        this.appendChild(node);
    }

    public connectedCallback(): void {
        this.lastUpdated = Date.now();
        this.update();
    }

    private update = (): void => {
        const currentTime: number = Date.now();
        const diff: number = currentTime - this.lastUpdated;

        if (diff > 0) {
            this.lastUpdated = currentTime;

            let milliseconds: number = parseInt(this.milliseconds.innerText, 10) - diff;
            if (milliseconds >= 0) {
                this.updateMilliseconds(milliseconds);
                requestAnimationFrame(this.update);
                return;
            }

            milliseconds += 1000;
            let seconds: number = parseInt(this.seconds.innerText, 10) - 1;
            if (seconds >= 0) {
                this.updateMilliseconds(milliseconds);
                this.updateSeconds(seconds);
                requestAnimationFrame(this.update);
                return;
            }

            seconds += 60;
            let minutes: number = parseInt(this.minutes.innerText, 10) - 1;
            if (minutes >= 0) {
                this.updateMilliseconds(milliseconds);
                this.updateSeconds(seconds);
                this.updateMinutes(minutes);
                requestAnimationFrame(this.update);
                return;
            }

            minutes += 60;
            let hours: number = parseInt(this.hours.innerText, 10) - 1;
            if (hours >= 0) {
                this.updateMilliseconds(milliseconds);
                this.updateSeconds(seconds);
                this.updateMinutes(minutes);
                this.updateHours(hours);
                requestAnimationFrame(this.update);
                return;
            }

            hours += 24;
            const days: number = parseInt(this.days.innerText, 10) - 1;

            this.updateMilliseconds(milliseconds);
            this.updateSeconds(seconds);
            this.updateMinutes(minutes);
            this.updateHours(hours);
            this.updateDays(days);
        }

        requestAnimationFrame(this.update);
    }

    private updateMilliseconds = (val: number): void => {
        this.milliseconds.innerText = val >= 100 ? String(val) : val >= 10 ? "0" + String(val) : "00" + String(val);
    }

    private updateSeconds = (val: number): void => {
        this.seconds.innerText = val >= 10 ? String(val) : "0" + String(val);
    }

    private updateMinutes = (val: number): void => {
        this.minutes.innerText = val >= 10 ? String(val) : "0" + String(val);
    }

    private updateHours = (val: number): void => {
        this.hours.innerText = val >= 10 ? String(val) : "0" + String(val);
    }

    private updateDays = (val: number): void => {
        this.days.innerText = val >= 10 ? String(val) : "0" + String(val);
    }
}

window.customElements.define("x-timer", Timer);
