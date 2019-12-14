import { writable } from 'svelte/store';

export const hhStartTime = writable(0);
export const mmStartTime = writable(0);
export const ssStartTime = writable(3);

export const hhDailyIncrease = writable(0);
export const mmDailyIncrease = writable(0);
export const ssDailyIncrease = writable(0);

export const timerStarted = writable(false)

export const dailyIncreaseIsOn = writable(true)

export const currentScreen = writable("BurgerMenu")

// const store = writable(localStorage.getItem("appState") || {
    // lastTime: null,
    // increase: 5,
    // incFrequency:1,
    // lastDate: null
// });

// store.subscribe(val => localStorage.setItem("firstVisit", "false"));

// mayyyybe...
// createWritableStore("needsTuto", "true")

// const createWritableStore = (key, startValue) => {
//     const { subscribe, set } = writable(startValue);
    
//       return {
//         subscribe,
//         set,
//         useLocalStorage: () => {
//             const json = localStorage.getItem(key);
//             if (json) {
//                 set(JSON.parse(json));
//             }
            
//             subscribe(current => {
//                 localStorage.setItem(key, JSON.stringify(current));
//             });
//         }
//     };
//   }
  
//   export const count = createWritableStore('count', 0);