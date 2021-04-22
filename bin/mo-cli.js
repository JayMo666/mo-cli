#!/usr/bin/env node
"use strict";
var chalk = require("chalk");
var cmd = require("commander");
var config = require("../package.json");
var _ = require("lodash");

const logo = `
 _____        _            _                   
|  __ \\      | |          | |                  
| |  | | __ _| |_ __ _ ___| |_ ___ _ __ _   _ 
| |  | |/ _\\ | __/ _\\ / __| __/ _ \| '__| | | |
| |__| | (_| | || (_| \__ | || (_) | |  | |_| |
|_____/ \\__,_|\\__\\__,_|___/\\__\\__/|_|   \\__, |
                                         __/ |
                                        |___/ 
`;
config = _.merge(config, require("../config"));
const COMMANDMAP = require("../dist/main");
const cons = require("consolidate");

async function exec(command, cmdObj) {
  try {
    await COMMANDMAP[command](config, cmdObj);
  } catch (err) {}
}

cmd
  .command("init")
  .description("初始化组件模板")
  .action(() => {
    exec("init");
  });

cmd.parse(process.argv);
if (!cmd.args.length) {
  cmd.help();
}
