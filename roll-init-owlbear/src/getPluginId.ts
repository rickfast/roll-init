/** Reverse-domain id for this extension, used to namespace room metadata keys. */
export function getPluginId(path: string): string {
  return `com.roll-initx.owlbear/${path}`;
}
