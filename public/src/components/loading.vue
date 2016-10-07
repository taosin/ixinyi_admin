<!-- loading页面 -->
<template>
	<div v-show="show">
		<!-- <div class="sk-rotating-plane"></div> -->
		<div class="sk-wave">
			<div class="sk-rect sk-rect1"></div>
			<div class="sk-rect sk-rect2"></div>
			<div class="sk-rect sk-rect3"></div>
			<div class="sk-rect sk-rect4"></div>
			<div class="sk-rect sk-rect5"></div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		props:['show'],
		data(){
			return{
			};
		}
	};
</script>
<style type="text/css">
	.sk-rotating-plane {
		width: 40px;
		height: 40px;
		background-color: #333;
		margin: 40px auto;
		-webkit-animation: sk-rotatePlane 1.2s infinite ease-in-out;
		animation: sk-rotatePlane 1.2s infinite ease-in-out; }

		@-webkit-keyframes sk-rotatePlane {
			0% {
				-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
				transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
				50% {
					-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
					transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
					100% {
						-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
						transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }

						@keyframes sk-rotatePlane {
							0% {
								-webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
								transform: perspective(120px) rotateX(0deg) rotateY(0deg); }
								50% {
									-webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
									transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg); }
									100% {
										-webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
										transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg); } }

										.sk-wave {
											margin: 40px auto;
											height: 40px;
											text-align: center;
											font-size: 10px; }
											.sk-wave .sk-rect {
												background-color: #333;
												height: 100%;
												width: 6px;
												display: inline-block;
												-webkit-animation: sk-waveStretchDelay 1.2s infinite ease-in-out;
												animation: sk-waveStretchDelay 1.2s infinite ease-in-out; }
												.sk-wave .sk-rect1 {
													-webkit-animation-delay: -1.2s;
													animation-delay: -1.2s; }
													.sk-wave .sk-rect2 {
														-webkit-animation-delay: -1.1s;
														animation-delay: -1.1s; }
														.sk-wave .sk-rect3 {
															-webkit-animation-delay: -1s;
															animation-delay: -1s; }
															.sk-wave .sk-rect4 {
																-webkit-animation-delay: -0.9s;
																animation-delay: -0.9s; }
																.sk-wave .sk-rect5 {
																	-webkit-animation-delay: -0.8s;
																	animation-delay: -0.8s; }

																	@-webkit-keyframes sk-waveStretchDelay {
																		0%, 40%, 100% {
																			-webkit-transform: scaleY(0.4);
																			transform: scaleY(0.4); }
																			20% {
																				-webkit-transform: scaleY(1);
																				transform: scaleY(1); } }

																				@keyframes sk-waveStretchDelay {
																					0%, 40%, 100% {
																						-webkit-transform: scaleY(0.4);
																						transform: scaleY(0.4); }
																						20% {
																							-webkit-transform: scaleY(1);
																							transform: scaleY(1); } }

																						</style>
