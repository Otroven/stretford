import * as os from 'node:os'
import * as pty from 'node-pty'

const shell = os.platform() === 'win32' ? 'powershell.exe' : 'bash'

const ptyProcess = pty.spawn(shell, [], {
  name: 'stretford',
  cols: 80,
  rows: 80,
  cwd: process.env.HOME,
  env: process.env
})

ptyProcess.onData((data) => {
  process.stdout.write(data)
})

ptyProcess.write('ls\r')
ptyProcess.resize(100, 40)
ptyProcess.write('ls\r')
