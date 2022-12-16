const range = (from: number, to: number | undefined = undefined): number[] => {
  if (to === undefined) {
    return range(0, from)
  }
  if (to < from) {
    return range(to + 1, from + 1).reverse()
  }
  return [...Array(to - from)].map((_, i) => i + from)
}

const Util = { range }
export default Util
