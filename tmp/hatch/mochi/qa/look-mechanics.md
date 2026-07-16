# Mochi look mechanics

Mochi keeps all four paws and the lower torso registered while attention travels through the huge physical black eyes first, followed by a restrained head/ear turn and a small neck/upper-body shift. The curled tail stays attached and follows with a slight lag; it never swaps sides abruptly.

Motion budget: every 22.5-degree step changes eye aim, head turn, ear perspective, and upper-body shift by a similar small amount. No whole-sprite rotation, scaling, skewing, or floating baseline.

- 000 up: pupils/highlights and muzzle aim upward; ears remain symmetric and more inner-ear area is visible.
- 090 screen-right: face turns screen-right, right-side cheek/muzzle leads, left side becomes slightly occluded, tail remains attached behind the body.
- 180 down: eyes and muzzle aim down; eyelids lower slightly and the head dips without crouching the whole body.
- 270 screen-left: face turns screen-left, left-side cheek/muzzle leads, right side becomes slightly occluded, tail remains attached behind the body.

Diagonals interpolate the adjacent cardinal pose families evenly. Preserve the exact white/gray pixel blocks, pink ears/nose/cheeks, huge square black eye construction, aristocratic expression, curled tail, proportions, and pixel-block identity in every pose.
