import { writable } from 'svelte/store';

export const hhStartTime = writable(0);
export const mmStartTime = writable(0);
export const ssStartTime = writable(0);

export const hhDailyIncrease = writable(0);
export const mmDailyIncrease = writable(0);
export const ssDailyIncrease = writable(0);

export const timerStarted = writable(false)

export const dailyIncreaseIsOn = writable(true)