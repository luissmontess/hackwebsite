const shapes = ["circle", "square", "triangle", "rhombus"];

// Helper to generate random colors
const getRandomColor = () => {
    const colors = ["#003640", "#002930", "#001b208", "#014450", "#01525f"];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Generate random shapes for a grid
export const generateShapeGrid = (rows: number, cols: number) => {
    const grid = [];
    for (let i = 0; i < rows * cols; i++) {
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        grid.push({ id: i, shape, color: getRandomColor() });
    }
    return grid;
};