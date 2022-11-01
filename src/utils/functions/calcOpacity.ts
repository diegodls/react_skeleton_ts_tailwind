export function calcOpacity(index: number, length: number): string {
  const minOpacity: number = 10;
  const maxOpacity: number = 60;

  if (minOpacity >= maxOpacity) {
    return "opacity-[1]";
  }

  const opacityInterval = (maxOpacity - minOpacity) / (length - 1);

  const finalOpacity =
    (minOpacity + opacityInterval * (length - 1 - index)) / 10; //remover o "length -1" para mudar a ordem
  switch (finalOpacity.toFixed(0)) {
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
  //return `opacity-[.${finalOpacity.toFixed(0)}]`;
}
