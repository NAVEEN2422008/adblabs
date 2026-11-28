import Splitting from 'splitting';

// Call once after DOM ready. Returns array of targets.
export function initSplitting(root = document) {
  try {
    return Splitting({ target: root.querySelectorAll('[data-split]'), by: 'chars' });
  } catch {
    return [];
  }
}

export { Splitting };
export default initSplitting;
