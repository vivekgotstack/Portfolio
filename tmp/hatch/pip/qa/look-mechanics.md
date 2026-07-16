# Pip look mechanics

Pip remains seated in a stable lotus base. The head, golden eyes, cream eyebrows, ears, beard, and upper torso carry the gaze; the prayer beads and small golden vessel stay attached and move only with restrained upper-body follow-through. The square golden forehead light stays centered on the skull and changes perspective with the head instead of floating independently.

## Cardinal pose families

- `000 up`: lotus base anchored; chin and brow lift; pupils/eye surfaces aim upward; forehead light rises with the head; slightly more underside of beard is visible.
- `090 screen-right`: lotus base anchored; face and nose turn unmistakably toward the viewer's right; the right-side facial plane compresses while more of the left cheek/ear is visible; beard and beads follow slightly.
- `180 down`: lotus base anchored; chin and brow lower toward the vessel; upper eyelids and eyebrows angle downward; more crown and top of beard are visible.
- `270 screen-left`: lotus base anchored; face and nose turn unmistakably toward the viewer's left; the left-side facial plane compresses while more of the right cheek/ear is visible; beard and beads follow slightly.

## Motion budget

Each 22.5-degree step moves the pupils/eye surfaces first, then the head by a small even amount, then the ears, beard, beads, and upper torso by a smaller follow-through. The seated base, hands, vessel, body scale, and baseline remain fixed. Adjacent steps must never flip ear visibility, teleport the forehead light, detach the vessel or beads, or rotate the entire sprite. The `157.5 -> 180` and `337.5 -> 000` boundaries must be one ordinary step with no snap.
