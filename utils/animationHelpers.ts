import { waapi } from 'animejs';

type WAAPIAnimateParams = Parameters<typeof waapi.animate>;

type WAAPITimelineAnimation = (WAAPIAnimateParams[1] extends Record<any, any>
    ? WAAPIAnimateParams[1]
    : never) & {
    targets?: WAAPIAnimateParams[0];
};

type WAAPITimelineOptions = Partial<{
    targets: WAAPITimelineAnimation['targets'];
    delayMs: number;
}>;

/**
 * animejs's createTimeline() does not properly stagger waapi animations, leading to conflicts
 * and broken animations when they modify the same CSS properties.
 * */
export function createWAAPITimeline(
    animations: WAAPITimelineAnimation[],
    options?: WAAPITimelineOptions
) {
    for (const { targets: tlEntryTargets, ...params } of animations) {
        const targets = tlEntryTargets ?? options?.targets;
        if (!targets) {
            throw new Error(
                'Expected each timeline animation to specify targets or for a default to be specified in options param'
            );
        }

        let delayMs = (options?.delayMs ?? 0);

        if (params.delay && typeof params.delay === 'number') {
            delayMs += params.delay;
            delete params['delay'];
        }


        const startAnimation = () => waapi.animate(targets, params);

        if (delayMs > 0) {
            setTimeout(startAnimation, delayMs);
        } else {
            startAnimation();
        }
    }
}

export function registerCSSProperty(def: PropertyDefinition) {
    try {
        CSS.registerProperty(def);
    } catch (e) {
        if (!(e instanceof Error && e.name === 'InvalidModificationError')) throw e;
    }
}
