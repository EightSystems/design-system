export function getHeight({ axis, size }) {
    return axis === "horizontal" ? 1 : size;
}

export function getWidth({ axis, size }) {
    return axis === "vertical" ? 1 : size;
}

export function getUnit({ unit }) {
    return unit === undefined ? "px" : unit;
}
