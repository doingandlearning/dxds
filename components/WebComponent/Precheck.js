customElements.define('pre-check', class extends HTMLElement {
	// create an element that takes two properties: intro and outro
	// it will render with the intro property
	// it also renders the slot content in the middle
	// it will render with the outro property

	// this is the constructor
	constructor() {
		super();
		// create a shadow root
		this.attachShadow({ mode: 'open' });

		this.intro = this.getAttribute('intro') || "Before we begin, please check the following:";
		this.outro = this.getAttribute('outro') || "Let's dive in!";
		// set the shadow root's innerHTML
		this.shadowRoot.innerHTML = `
			<style>
			:root {
				--form-control-color: orange;
				--form-control-disabled: #959495;
				--form-background: #f5f5f5;
			}
			.goals {
				padding: 1.5em 1rem;
				margin-inline: -1rem;
				background-color: var(--theme-divider);
				/* Indicates the aside boundaries for forced colors users, transparent is changed to a solid color */
				outline: 1px solid transparent;
			}
		
			@media (min-width: 50em) {
				.goals {
					padding: 1.5em;
					margin-inline: 0;
				}
			}
		
			@media (min-width: 72em) {
				.goals {
					font-size: 1.125rem;
				}
			}
		
			.title {
				display: grid;
				grid-template-columns: auto 1fr;
				gap: 0.5rem;
				align-items: center;
				line-height: 1;
				margin-bottom: 1em;
				font-size: 0.9em;
				letter-spacing: 0.05em;
				font-weight: bold;
				text-transform: uppercase;
				color: var(--theme-text);
			}
		
			.icon svg {
				width: 2em;
				height: 2em;
				vertical-align: middle;
				fill: currentcolor;
			}
		
			.goals > :global(ul) {
				padding-inline-start: 1em;
			}
		
			.goals > :global(ul > * + *) {
				margin-top: 0.5em;
			}
		
			.goals > :global(ul > li) {
				display: grid;
				grid-template-columns: auto 1fr;
				gap: 0.5rem;
				align-items: center;
				line-height: 1;
				font-size: 0.9em;
				letter-spacing: 0.05em;
				color: var(--theme-text);
			}
			</style>
			<div class="goals">
  <p class="title">
    <span class="icon" aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="2 0 24 24"
        width="24"
        height="24"
      >
        <path
          fill-rule="evenodd"
          d="M3 6a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6zm1.5 4.5v-4h4v4h-4z"
        ></path>
        <path
          d="M12.75 5.5a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5zm0 6a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5h-7.5zm-2.97-2.53a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47 2.97-2.97a.75.75 0 0 1 1.06 0z"
        ></path>
      </svg>
    </span>
    ${this.intro || "Before we start, do you:"}
  </p>
  <div class="slot-container">
    <slot />
  </div>
  <p>${this.outro || "Awesome! Let's go!"}</p>
</div>
		`;
	}

})