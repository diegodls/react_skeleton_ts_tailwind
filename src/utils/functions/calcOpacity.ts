export function calcOpacity(index: number, length: number): string {
  const minOpacity: number = 1;
  const maxOpacity: number = 6;

  let opacityInterval = (maxOpacity - minOpacity) / (length - 1);

  let finalOpacity = maxOpacity - opacityInterval * index;

  if (minOpacity >= maxOpacity) {
    finalOpacity = maxOpacity;
  }

  if (length <= 1) {
    finalOpacity = maxOpacity;
  }

  switch (Math.floor(finalOpacity).toFixed(0)) {
    case "10":
      return "opacity-[1]";
    case "9":
      return "opacity-[.9]";
    case "8":
      return "opacity-[.8]";
    case "7":
      return "opacity-[.7]";
    case "6":
      return "opacity-[.6]";
    case "5":
      return "opacity-[.5]";
    case "4":
      return "opacity-[.4]";
    case "3":
      return "opacity-[.3]";
    case "2":
      return "opacity-[.2]";
    case "1":
      return "opacity-[.1]";
    case "0":
      return "opacity-[.0]";
    default:
      return "opacity-[.0]";
  }
}
