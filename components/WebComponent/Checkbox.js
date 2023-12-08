customElements.define('check-box', class extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		this.shadowRoot.innerHTML = `
			<style>
			:root {
				--form-control-color: orange;
				--form-control-disabled: #959495;
				--form-background: #f5f5f5;
			}
		
			label {
				display: flex;
				align-items: center;
				margin-top: 1em;
			}
		
			label p {
				margin: 0;
				padding-left: 0.5em;
			}
			form {
				display: grid;
				place-content: center;
				min-height: 100vh;
			}
		
			.form-control {
				font: inherit;
				font-size: 1.1rem;
				line-height: 1.1;
				display: grid;
				grid-template-columns: 1em auto;
				gap: 0.5em;
			}
		
			.form-control + .form-control {
				margin-top: 1em;
			}
		
			input[type="checkbox"] {
				/* Add if not using autoprefixer */
				-webkit-appearance: none;
				/* Remove most all native input styles */
				appearance: none;
				/* For iOS < 15 */
				background-color: var(--form-background);
				/* Not removed via appearance */
				margin: 0;
		
				font: inherit;
				color: currentColor;
				width: 1.15em;
				height: 1.15em;
				border: 0.15em solid currentColor;
				border-radius: 0.15em;
				transform: translateY(-0.075em);
		
				display: grid;
				place-content: center;
			}
		
			input[type="checkbox"]::before {
				content: "";
				width: 0.65em;
				height: 0.65em;
				clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
				transform: scale(0);
				transform-origin: bottom left;
				transition: 120ms transform ease-in-out;
				box-shadow: inset 1em 1em var(--form-control-color);
				/* Windows High Contrast Mode */
				background-color: CanvasText;
			}
		
			input[type="checkbox"]:checked::before {
				transform: scale(1);
			}
		
			input[type="checkbox"]:focus {
				outline: max(2px, 0.15em) solid currentColor;
				outline-offset: max(2px, 0.15em);
			}
		
			input[type="checkbox"]:disabled {
				--form-control-color: var(--form-control-disabled);
		
				color: var(--form-control-disabled);
				cursor: not-allowed;
			}
			</style>
			<label class="form-control">
			<input type="checkbox" name="checkbox-disabled-checked" />
			<p>
				<slot />
			</p>
		</label>
		`;
	}




})