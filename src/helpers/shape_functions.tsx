// helpers/shape_functions.ts

const shapes = ["circle", "square", "triangle", "rhombus"];

const TALAVERA_PALETTE = [
    { main: "#01525f", shadow: "#014450" },
    { main: "#014450", shadow: "#003640" },
    { main: "#003640", shadow: "#002930" },
    { main: "#002930", shadow: "#001B20" },
    { main: "#001B20", shadow: "#001014" },
];

// --- ADD THIS ---
// The probability of a cell being empty. 0.2 means a 20% chance.
const EMPTY_CELL_PROBABILITY = 0.25; 

export const generateShapeGrid = (rows: number, cols: number) => {    
    const grid = [];
    for (let i = 0; i < rows * cols; i++) {
        
        // --- MODIFY THIS PART ---
        // Decide if the current cell should be empty
        if (Math.random() < EMPTY_CELL_PROBABILITY) {
            // If so, push `null` to represent an empty cell
            grid.push(null); 
        } else {
            // Otherwise, generate a shape as before
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            const randomColorPair = TALAVERA_PALETTE[Math.floor(Math.random() * TALAVERA_PALETTE.length)];
            
            grid.push({
                id: `shape-${i}`,
                shape,
                color: randomColorPair.main,
                backFaceColor: randomColorPair.shadow,
            });
        }
    }
    return grid;
};