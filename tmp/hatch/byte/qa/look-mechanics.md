# Byte look mechanics

Byte is a compact pixel fox with a readable face, two large black eyes, pointed ears, a cream muzzle, a raised cigarette paw, and a tail. The feet and lower torso remain anchored. The eyes lead each gaze; the head and muzzle follow with a small turn or pitch; the ears follow subtly; the raised cigarette paw stays attached and lags only slightly; the tail stays registered and may shift by one small pixel-block step.

Motion budget: every 22.5-degree step changes eye placement, eyelid shape, head angle, and ear symmetry by one small even increment. Scale, baseline, body width, cigarette geometry, and tail attachment stay stable. No whole-sprite rotation.

- 000 up: pupils and muzzle angle up; chin lifts slightly; ear tips remain visible and symmetric.
- 090 screen-right: pupils, nose, and muzzle shift to screen-right; left side of the face becomes slightly more visible; cigarette paw stays attached.
- 180 down: pupils lower; eyelids lower; chin and muzzle dip; ears compress slightly.
- 270 screen-left: pupils, nose, and muzzle shift to screen-left; right side of the face becomes slightly more visible; cigarette paw stays attached.

The diagonals interpolate these four pose families in strict clockwise order. The fox remains cynical and recognizable; do not replace the black eye construction, redesign the face, mirror the cigarette paw, detach smoke, or add props.
