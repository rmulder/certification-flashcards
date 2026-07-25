/** Letter label for MCQ option index (0 → A, 1 → B, …). Supports up to 26 options. */
export function optionLetter(index: number): string {
  if (index < 0 || index > 25) return '?'
  return String.fromCharCode(65 + index)
}

export function formatOptionLabel(index: number): string {
  return `${optionLetter(index)}.`
}
