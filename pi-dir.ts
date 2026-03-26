// pi-dir.ts - Resolve the pi agent base directory
// Respects the PI_CODING_AGENT_DIR environment variable when set,
// otherwise falls back to ~/.pi (the default pi installation directory).
import { homedir } from "node:os";
import { join } from "node:path";

/**
 * Returns the pi agent base directory.
 *
 * Resolution order:
 *   1. $PI_CODING_AGENT_DIR  (if set and non-empty)
 *   2. ~/.pi                 (default)
 */
export function getPiAgentDir(): string {
  return process.env.PI_CODING_AGENT_DIR || join(homedir(), ".pi");
}

/**
 * Convenience helper – joins path segments relative to the pi agent directory.
 * Equivalent to `join(getPiAgentDir(), ...segments)`.
 */
export function piAgentPath(...segments: string[]): string {
  return join(getPiAgentDir(), ...segments);
}
