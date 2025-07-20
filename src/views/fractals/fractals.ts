import { getBool, getNum, getOpt, getStr, type QueryParamParser } from '@/utils/queryParamsParser';

export const EXAMPLES = [
    'resolution=2048&variation=Spherical&colorA=%234466ee&colorB=%2300ff00&coloring=Experimental&iterTransformX=0.625&iterTransformY=0.4375&transform=0.4375&iterations=642300&mirrored=true&xShift=-0.3125&blur=1',
    'resolution=2048&variation=Spherical&colorA=%237300ff&colorB=%2300ff6e&coloring=Experimental&iterTransformX=0.125&iterTransformY=1&transform=0.3125&iterations=841300&mirrored=true&xShift=-0.1875&blur=1',
    'resolution=2048&variation=Tangent&colorA=%235252ff&colorB=%23ff0000&coloring=Experimental&iterTransformX=0.875&iterTransformY=0.4375&transform=0.5625&iterations=766400&mirrored=true',
    'resolution=1792&variation=Tangent&colorA=%23ff0000&colorB=%23e6f0f9&coloring=Experimental&iterTransformX=0.96875&iterTransformY=0.8125&xShift=0.0625&transform=0.5625&iterations=692300&mirrored=true&blur=1&sharpen=1',
    'resolution=2048&variation=Tangent&colorA=%23007bff&colorB=%238cff00&coloring=Experimental&iterTransformX=0.875&iterTransformY=0.0625&transform=0.875&iterations=741000&mirrored=true&xShift=-0.3125&blur=1',
    'resolution=2048&variation=Tangent&colorA=%23ff0000&colorB=%238cff00&coloring=Experimental&iterTransformX=0.75&iterTransformY=0.0625&transform=1&iterations=766400&mirrored=true&blur=1&sharpen=1',
    'resolution=1792&variation=RadTan&colorA=%230000FF&colorB=%23FF0000&coloring=Experimental&iterTransformX=0.875&iterTransformY=0.5&transform=0.75&iterations=2982800&mirrored=true&xShift=0',
    'resolution=2048&variation=Bubble&colorA=%237300ff&colorB=%2300ff6e&coloring=Experimental&iterTransformX=0.78125&iterTransformY=0.59375&transform=0.90625&iterations=841300&mirrored=true&xShift=0&blur=1',
    'resolution=1280&variation=Diamond&colorA=%23002aff&colorB=%2300ff11&coloring=Experimental&iterTransformX=0.59375&iterTransformY=0.65625&xShift=0&transform=0.90625&iterations=1050700&mirrored=true',
    'resolution=2048&variation=Cross&colorA=%23270094&colorB=%2337ff00&coloring=Experimental&iterTransformX=0.6875&iterTransformY=1&xShift=-1&transform=0.78125&iterations=2331500&mirrored=true',
    'resolution=1792&variation=RadTan&colorA=%23ffa200&colorB=%23ff0000&coloring=Experimental&iterTransformX=1&iterTransformY=0.1875&xShift=-1&transform=0.8125&iterations=3989200&mirrored=true',
    'resolution=2048&variation=Spherical&colorA=%237400b3&colorB=%23ffbb00&coloring=Experimental&iterTransformX=0.6875&iterTransformY=1&xShift=-1&transform=0.78125&iterations=2331500&mirrored=true',
];

export const VARIATIONS = [
    'Spherical',
    'Tangent',
    'Cross',
    'RadTan',
    'Horseshoe',
    'Linear',
    'Sine',
    'Bubble',
    'Tangle',
    'Diamond',
] as const;
export type FractalVariation = (typeof VARIATIONS)[number];

export const COLORING_STRATEGIES = ['Experimental', 'Gradient', 'SigmoidGradient'] as const;
export type ColoringStrategy = (typeof COLORING_STRATEGIES)[number];

export const COLORING_STRATEGY_LABELS = ['Experimental', 'Gradient', 'Sharp Gradient'].map(
    (v, i) => [v, COLORING_STRATEGIES[i]]
);

export type Fractal = {
    resolution: number;
    variation: FractalVariation;
    colorA: string;
    colorB: string;
    coloring: ColoringStrategy;
    iterTransformX: number;
    iterTransformY: number;
    xShift: number;
    transform: number;
    iterations: number;
    mirrored: boolean;
    blur: undefined | number;
    sharpen: undefined | number;
};

export const DEFAULT_FRACTAL: Fractal = {
    resolution: 1024,
    variation: VARIATIONS[0],
    colorA: '#0000FF',
    colorB: '#FF0000',
    coloring: COLORING_STRATEGIES[0],
    iterTransformX: 0.5,
    iterTransformY: 0.5,
    xShift: 0,
    transform: 0.5,
    iterations: 500000,
    mirrored: true,
    blur: 0,
    sharpen: 0,
};

export const FRACTAL_PARSER: QueryParamParser<Fractal> = {
    resolution: getNum,
    variation: getOpt(VARIATIONS),
    colorA: getStr,
    colorB: getStr,
    coloring: getOpt(COLORING_STRATEGIES),
    iterTransformX: getNum,
    iterTransformY: getNum,
    xShift: getNum,
    transform: getNum,
    iterations: getNum,
    mirrored: getBool,
    blur: getNum,
    sharpen: getNum,
};
