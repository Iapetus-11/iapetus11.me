import { inject, provide, ref, type InjectionKey, type Ref } from 'vue';

export enum ModId {
    DashcamAndRadarDetectorHardwire,
    PacoMotorsportsSeatLowering,
    TheFuture,
}

const OPEN_MOD_INJECTION_KEY: InjectionKey<Ref<ModId | null>> = Symbol();

export function provideModDisclosureState() {
    provide(OPEN_MOD_INJECTION_KEY, ref(ModId.DashcamAndRadarDetectorHardwire));
}

export function useModDisclosureState(): Ref<ModId | null> {
    return inject(OPEN_MOD_INJECTION_KEY)!;
}
