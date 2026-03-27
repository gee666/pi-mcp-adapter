// pi-dir.ts - Resolve the pi agent directory
// Pi sets PI_CODING_AGENT_DIR to the agent directory itself (e.g. ~/.pi/agent).
// When the variable is not set we fall back to ~/.pi/agent.
import { homedir } from "node:os";
import { join } from "node:path";

/**
 * Returns the pi agent directory.
 *
 * Resolution order:
 *   1. $PI_CODING_AGENT_DIR  — Pi sets this to the agent dir directly (e.g. ~/.pi/agent)
 *   2. ~/.pi/agent           — default when the variable is absent
 */
export function getPiAgentDir(): string {
  return process.env.PI_CODING_AGENT_DIR || join(homedir(), ".pi", "agent");
}

/**
 * Convenience helper – joins path segments relative to the pi agent directory.
 * Equivalent to `join(getPiAgentDir(), ...segments)`.
 */
export function piAgentPath(...segments: string[]): string {
  return join(getPiAgentDir(), ...segments);
}
