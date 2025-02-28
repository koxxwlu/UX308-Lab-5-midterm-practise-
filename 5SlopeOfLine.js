function SlopeOfLine(x1, x2, y1, y2) {
    let rise = y2-y1;
    let run = x2-x1;
    let slope = Math.sqrt(Math.pow(rise, 2) + Math.pow(run, 2))
    return slope;
}

export { SlopeOfLine }