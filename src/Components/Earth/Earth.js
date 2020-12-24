import React, { useRef, useLayoutEffect } from "react";
import "./Earth.css";

const Earth = () => {
	const aliceSprite = useRef(null);

	useLayoutEffect(() => {
		var spriteFrames = [
			{ transform: "translateY(0)" },
			{ transform: "translateY(-100%)" },
		];

		var alice = aliceSprite.current.animate(spriteFrames, {
			easing: "steps(7, end)",
			direction: "reverse",
			duration: 1800,
			playbackRate: 1,
			iterations: Infinity,
		});

		setInterval(function () {
			if (alice.playbackRate > 0.4) {
				alice.playbackRate -= 0.1;
			}
		}, 3000);

		const moveFast = () => {
			alice.playbackRate += 0.1;
		};

		window.addEventListener("click", moveFast);
	});

	return (
		<div className="earth">
			<div className="alice">
				<img
					className="alicesprite"
					ref={aliceSprite}
					src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png"
					srcset="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x"
					alt="Alice"
				/>
			</div>
		</div>
	);
};

export default Earth;
