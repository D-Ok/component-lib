function numberToText (number: number): string | undefined {
  if (!number || Number.isNaN(number) || number<=0) return

  switch (true) {
    case number < 1000:
      return number.toString();
    case number < 1000000:
      return `${Math.floor(number / 1000)}k`
    default:
      return `${Math.floor(number / 1000000)}m`
  }
}

export default numberToText;
