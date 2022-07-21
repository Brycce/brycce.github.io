import { useEffect } from "react";
export function addDomEvent(target, eventName, handler, options) {
    target.addEventListener(eventName, handler, options);
    return () => target.removeEventListener(eventName, handler, options);
}
const domEventName = (propName) => propName.replace("on", "").toLowerCase();
export function useEvents(ref, handlers) {
    useEffect(() => {
        const subscriptions = Object.keys(handlers).map((name) => addDomEvent(ref.current, domEventName(name), handlers[name]));
        return () => {
            subscriptions.forEach((subscription) => subscription());
        };
    });
}
//# sourceMappingURL=events.js.map