import { createMotionComponent } from "./component";
const components = new Map();
export const motion = new Proxy({}, {
    get: (_, key) => {
        !components.has(key) && components.set(key, createMotionComponent(key));
        return components.get(key);
    },
});
//# sourceMappingURL=index.js.map