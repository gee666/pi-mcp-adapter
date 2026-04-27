import { homedir } from "node:os";
import { join } from "node:path";

/** Resolves the Pi agent directory, respecting PI_CODING_AGENT_DIR if set. */
export function getAgentDir(): string {
  return process.env.PI_CODING_AGENT_DIR ?? join(homedir(), ".pi", "agent");
}
