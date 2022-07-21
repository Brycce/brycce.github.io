import * as React from "react";
import { Options } from "@motionone/dom";
import type { ElementProps, MotionEventHandlers } from "./types";
export declare function createMotionComponent<Props extends ElementProps>(Component: string): React.ForwardRefExoticComponent<React.PropsWithoutRef<Options & Props & MotionEventHandlers> & React.RefAttributes<Element>>;
//# sourceMappingURL=component.d.ts.map