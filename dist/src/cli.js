"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CLI = void 0;
const commander_1 = require("commander");
const package_json_1 = __importDefault(require("../package.json"));
class CLI {
    constructor() {
        this.commands = [];
        this.program = new commander_1.Command();
        this.program
            .name(package_json_1.default.name)
            .description('A fully functional, OOP structured CLI tool')
            .version(package_json_1.default.version, '-v, --version', 'Output the current version');
        // Custom help styling
        this.program.configureHelp({
            sortSubcommands: true,
            subcommandTerm: (cmd) => cmd.name() + ' ' + cmd.usage(),
        });
    }
    registerCommand(command) {
        this.commands.push(command);
        command.register(this.program);
    }
    registerCommands(commands) {
        commands.forEach(cmd => this.registerCommand(cmd));
    }
    run(argv) {
        if (argv.length <= 2) {
            this.program.help();
        }
        this.program.parse(argv);
    }
}
exports.CLI = CLI;
