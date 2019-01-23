#!/usr/bin/env node

const program = require('commander');
const version = require('../package.json').version;

program.version(version, '-v', '--version').usage('<command> [options]');

program
  .command('add <type>')
  .option('-n, --name [component-name]', 'Component name.')
  .action(require('../lib/add'));

program
  .command('delete <type>')
  .option('-n, --name [component-name]', 'Component name.')
  .action(require('../lib/delete'));

program.parse(process.argv);
