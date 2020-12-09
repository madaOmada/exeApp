export const mapPosition = (dom: HTMLElement, event: MouseEvent) => {
  const {offsetLeft, offsetTop, offsetWidth, offsetHeight} = dom, {clientX, clientY} = event;
  return {
    x: clientX - offsetLeft,
    y: clientY - offsetTop
  };
};

export const domCenter = (dom: HTMLElement) => {
  return {
    x: dom.offsetWidth / 2,
    y: dom.offsetHeight / 2
  };
};

export function getElementOffset(elem: HTMLElement): { top: number; left: number } {
  if (!elem.getClientRects().length) {
    return { top: 0, left: 0 };
  }

  const rect = elem.getBoundingClientRect();
  const win = elem.ownerDocument!.defaultView;
  return {
    top: rect.top + win!.pageYOffset,
    left: rect.left + win!.pageXOffset
  };
}
