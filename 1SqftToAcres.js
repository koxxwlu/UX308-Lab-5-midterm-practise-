function SqftToAcres(sqft){//1 acre to sqft = 43,560 ft²; 43560 sqft = 1 acres
    let acre = sqft/43560;
    return acre;
}

export {SqftToAcres}