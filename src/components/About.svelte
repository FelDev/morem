<div id="about">
    <h1 class="basic">About</h1>
    <p>The goal of Morem is to help you gradually increase your daily/weekly/whateverly meditation time.</p>
    <p>To do so, Morem let's you select the time for your current meditation as a starting point. Then, you can select the amount of time you would like to add daily/weekly/whateverly.</p>
    <p>You can save this to your phone, like an app. Find a button that says "Add to home screen". (The location of this button depends on your browser.).</p>
    <p>This is completely free to use.</p>
    <p>Your <a href="#feedback" on:click={() => feedback = true}>feedback</a> is welcome.</p>


    {#if feedback }
        <form name="feedback" id="feedback" method="POST" data-netlify="true" netlify-honeypot="bruh" transition:slide>
            <h1>Feedback Form 🌈</h1>
            <section>
                <div>
                    <label for="name">Your Name:</label>
                    <label for="email">Your Email:</label>
                    <label for="message">Message:</label>
                </div>
                <div>
                    <input type="text" id="name" name="name" placeholder="optional"/>
                    <input type="email" id="email" name="email" placeholder="optional"/>
                    <textarea id="message" name="message" placeholder="Required" required></textarea>
                </div>
            
                <label class="hidden">Don’t fill this out if you're human: <input name="bruh" /></label>
                <input class="hidden" type="hidden" name="form-name" value="feedback" />

            </section>
            
            <button type="submit" class="basic">Send</button>
        </form>
    {/if}
</div>

<script>
    import {currentScreen} from './stores.js';
    import { slide } from 'svelte/transition';
	import { quintOut } from 'svelte/easing';
    
    let feedback = false;

</script>

<style lang="scss">
    #about {
        max-width: 75rem;
        margin: auto;
        h1 {
            text-align: center;
            margin-top: 2rem;
        }

        p {
            font-size: 1.8rem;
            padding: 2rem;
        }
    }

    form {
        border: 0.2rem solid var(--blue);
        border-radius: 1rem;
        margin: 1rem auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 96vw;

        section {
            font-size: 1.5rem;
            width: 90%;
            margin: 2rem 2rem 0 2rem;
            display: grid;
            grid-template-columns: auto 1fr;
            grid-template-rows: auto 1fr 1fr;
            grid-gap: 1.5rem;
            
            div * {
                margin-bottom: 2rem;
                width: 100%;
            }
                    textarea {
                        min-height: 10rem;
                    }
            label {
                display: block;
            }
        }

        button {
            max-width: 20rem;
            margin-bottom: 2rem;
            margin-top: 0; 
            padding-left:3rem;
            padding-right:3rem;
        }
    }
    
</style>