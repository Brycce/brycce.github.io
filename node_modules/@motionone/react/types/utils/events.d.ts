import { RefObject } from "react";
import { MotionEventHandlers } from "../types";
export declare function addDomEvent(target: EventTarget, eventName: string, handler: EventListener, options?: AddEventListenerOptions): () => void;
export declare function useEvents(ref: RefObject<Element>, handlers: MotionEventHandlers): void;
//# sourceMappingURL=events.d.ts.map