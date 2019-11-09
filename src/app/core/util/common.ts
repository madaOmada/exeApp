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
