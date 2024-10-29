let count = 0;

export function load({ depends }) {
  depends("increase:count");
  return {
    count: count++,
  }
}