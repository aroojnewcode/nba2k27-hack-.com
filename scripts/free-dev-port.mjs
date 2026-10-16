/**
 * Free a TCP port on Windows (LISTENING PIDs). No-op if nothing is bound.
 * Usage: node scripts/free-dev-port.mjs [port]
 */
import { execSync } from 'node:child_process';

const port = process.argv[2] ?? '4321';

if (process.platform !== 'win32') {
  process.exit(0);
}

try {
  const out = execSync(`netstat -ano | findstr ":${port}"`, {
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'ignore'],
  });
  const pids = new Set();
  for (const line of out.split(/\r?\n/)) {
    if (!line.includes('LISTENING')) continue;
    const parts = line.trim().split(/\s+/);
    const pid = parts.at(-1);
    if (pid && /^\d+$/.test(pid) && pid !== '0') pids.add(pid);
  }
  for (const pid of pids) {
    try {
      execSync(`taskkill /PID ${pid} /F`, { stdio: 'ignore' });
      console.log(`Freed port ${port} (PID ${pid})`);
    } catch {
      /* already exited */
    }
  }
} catch {
  /* port not in use */
}
