export const words = [   
    "after", "eye", "only",
"again", "fast", "parents",
"any", "father", "pass",
"bath", "find", "past",
"beautiful", "floor", "path",
"because", "gold", "people",
"behind", "grass", "plant",
"both", "great", "poor",
"break", "half", "pretty",
"busy", "hold", "prove",
"child", "hour", "should",
"children", "improve", "steak",
"christmas", "kind", "sugar",
"class", "last", "sure",
"climb", "many", "told",
"clothes", "mind", "water",
"cold", "money", "who",
"could", "most", "whole",
"door", "move", "wild",
"even", "would",
"every",
"everybody", "old"
];

export const randomWords = (num = 6) => {
    return words.sort(() => Math.random() - 0.5).slice(0,num);
};