const { spawnSync } = require('child_process');
const tscBin = require.resolve('typescript/bin/tsc');
const strip = (s) => (s ? s.replace(/^['"]|['"]$/g, '') : s);

let args = process.argv.slice(2).map(strip);
if (args.length === 1 && /\.json$/i.test(args[0])) {
  args = ['--project', args[0]];
} else if (args.length === 0) {
  args = ['--project', 'tsconfig.json'];
}

const res = spawnSync(process.execPath, [tscBin, ...args], { stdio: 'inherit' });
process.exit(res.status ?? 1);
