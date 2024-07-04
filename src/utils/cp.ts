export async function cp(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    alert(`Copy Success: ${text}`);
  } catch (err) {
    alert(`Copy Failed: ${err}`);
  }
}
