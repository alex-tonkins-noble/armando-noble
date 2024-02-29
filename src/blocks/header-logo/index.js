import "./style.scss";
import { registerBlockType } from "@wordpress/blocks";
import metadata from "./block.json";
import Edit from "./edit";

registerBlockType(metadata, {
	edit: Edit,
	save: () => null,
	icon: {
		src: (
			<svg
				id="Layer_1"
				data-name="Layer 1"
				xmlns="http://www.w3.org/2000/svg"
				width="135.73mm"
				height="40.78mm"
				viewBox="0 0 384.75 115.59"
			>
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_1-2" data-name="Layer 1-2">
						<path
							class="cls-1"
							d="M154.28,75.5c0,24.82-14.77,40-37.91,40s-37.75-15.22-37.75-40,14.61-40,37.75-40,37.91,15.07,37.91,40M93.69,75.35c0,17.51,9.44,28.93,22.83,28.93s22.84-11.12,22.84-28.93-9.29-29.07-22.84-29.07-22.83,11.42-22.83,29.07"
						/>
						<path
							class="cls-1"
							d="M180.9,0v48.09c6.13-8.85,14-12.47,25.42-12.47,18.42,0,31.36,14.92,31.36,38.67s-16.36,41.3-37.37,41.3c-27.21,0-33.57-22-33.57-22V0h14.16ZM181.2,84.08c0,7.52,7.15,19.44,21.17,19.44,12.18,0,20.39-10.35,20.39-28s-8.21-29.08-19.94-29.08-19.44,7.8-21.43,21.56c-.32,2.2-.19,13.59-.19,16.09"
						/>
						<path
							class="cls-1"
							d="M349,78.86h-54c1.06,16.28,10.81,25.87,26.79,25.87,7.31,0,14.16-2,21.16-5.63v12.18c-7.16,3-15.22,4.26-24.2,4.26-23,0-37.45-15.37-37.45-40.8,0-23.74,14.61-39.27,35.62-39.27,19.79,0,32.12,14,32.12,37.6l-.04,5.79ZM316.09,45.67c-11.11,0-19.33,8.68-20.86,23.75h40.49c-1.06-15.38-8.21-23.75-19.63-23.75"
						/>
						<path
							class="cls-1"
							d="M36.59,35.61c-.8-.24-1.63-.36-2.46-.36C11.9,35.25.28,40.9.28,40.9l-.22,30h-.06v42.83h14.16v-33.73h.06v-7.76c0-.46,0-.92.07-1.36h-.07v-19.36c.66.11,7.3-4.24,19.69-4.24h0c11.17.4,17.69,8.34,17.69,23.47v42.92h14.16v-46.08c0-19.86-13.43-30.72-29.17-32"
						/>
						<path
							class="cls-1"
							d="M268.2,97.27c-1.65-2.55-3.84-6.92-3.84-15.33,0-1.09-.19-81.94-.19-81.94h-14.31l.14,85.26c.24,7.02,2.42,13.84,6.3,19.7,2.46,3.61,5.21,7.01,8.23,10.17l10-10c-2.3-2.46-4.43-5.08-6.35-7.85"
						/>
						<polygon
							class="cls-1"
							points="365.52 112.83 365.52 101.55 361.58 101.55 361.58 100.43 370.68 100.43 370.68 101.55 366.76 101.55 366.76 112.83 365.52 112.83"
						/>
						<polygon
							class="cls-1"
							points="383.51 112.83 383.51 101.79 379.21 107.8 378.25 107.8 374.01 101.79 374.01 112.83 372.78 112.83 372.78 100.43 374.6 100.43 378.74 106.46 382.93 100.43 384.75 100.43 384.75 112.83 383.51 112.83"
						/>
					</g>
				</g>
			</svg>
		),
	},
});
