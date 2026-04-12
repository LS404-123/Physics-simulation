# Interactive Simulator Prompt: Uniform Circular Motion

**Role:** You are an expert frontend web developer and physics educator. 

**Task:** Develop a single-file interactive web simulator (HTML, CSS, and Vanilla JavaScript using HTML5 Canvas) that demonstrates the core principles of Uniform Circular Motion (勻速圓周運動). The simulator must focus strictly on the physical relationships without using specific real-world examples (like merry-go-rounds or planets).

**Core Physics Concepts to Implement:**
1.  **Angular Displacement (θ) & Arc Length (s):** θ = s / r
2.  **Angular Velocity (ω) & Period (T):** ω = θ / t = 2π / T
3.  **Linear Velocity (v):** v = rω (always tangential to the path, v ⊥ r)

**UI and Layout Requirements:**
* **Visual Canvas (Left/Top):** * Draw a central origin point.
    * Draw a dashed circular path representing the trajectory.
    * Draw a particle moving continuously along the circular path.
    * Draw a radial line (vector r) from the origin to the particle.
    * Draw a tangential arrow attached to the particle representing the Linear Velocity vector (v). This arrow must always be strictly perpendicular to r.
    * Highlight the swept arc length (s) and the central angle (θ) as the particle moves.
* **Control Panel (Right/Bottom):**
    * **Radius (r) Slider:** Allows the user to change the size of the circle dynamically.
    * **Constraint Toggle:** A radio button or dropdown to select either:
        * *Mode A: Constant Angular Velocity (ω)* * *Mode B: Constant Linear Velocity (v)*
    * **Magnitude Slider:** A slider to adjust the value of the locked variable chosen in the constraint toggle (either adjusting ω or v).
* **Live Data Dashboard:**
    * Display real-time, continuously updating values for: 
        * Radius (r) in meters
        * Angular Displacement (θ) in radians and degrees
        * Arc Length (s) in meters
        * Angular Velocity (ω) in rad/s
        * Linear Velocity (v) in m/s
        * Period (T) in seconds

**Behavioral Logic (Crucial for the Physics Engine):**
* When **Mode A (Constant ω)** is active: If the user increases the Radius (r) slider, the rotation speed (ω) stays the same, but the Linear Velocity (v) must increase dynamically (v = rω). The tangential vector arrow on the canvas should visually lengthen.
* When **Mode B (Constant v)** is active: If the user increases the Radius (r) slider, the tangential vector arrow length stays constant, but the Angular Velocity (ω) must decrease (ω = v / r). The visual rotation of the particle should slow down.

**Design constraints:** Ensure the code is responsive, clean, and contained within a single `index.html` file (with embedded `<style>` and `<script>` tags) so it can be run instantly in any web browser. Use a modern, clean UI design (e.g., sans-serif fonts, distinct colors for v, r, and s).
