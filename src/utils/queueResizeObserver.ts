import { queueMicroTask } from "./queueMicroTask";

const queueResizeObserver = (global: Window, cb: () => void): void => {
  queueMicroTask(global, function ResizeObserver(): void {
    requestAnimationFrame(cb);
  });
};

export { queueResizeObserver };
