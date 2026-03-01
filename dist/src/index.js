"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cli_1 = require("./cli");
const logger_1 = require("./utils/logger");
// Commands
const GreetCommand_1 = require("./commands/GreetCommand");
const MathCommand_1 = require("./commands/MathCommand");
const JokeCommand_1 = require("./commands/JokeCommand");
const FileInfoCommand_1 = require("./commands/FileInfoCommand");
const GithubCommand_1 = require("./commands/GithubCommand");
const WeatherCommand_1 = require("./commands/WeatherCommand");
const QuoteCommand_1 = require("./commands/QuoteCommand");
function bootstrap() {
    try {
        const cliApp = new cli_1.CLI();
        cliApp.registerCommands([
            new GreetCommand_1.GreetCommand(),
            new MathCommand_1.MathCommand(),
            new JokeCommand_1.JokeCommand(),
            new FileInfoCommand_1.FileInfoCommand(),
            new GithubCommand_1.GithubCommand(),
            new WeatherCommand_1.WeatherCommand(),
            new QuoteCommand_1.QuoteCommand()
        ]);
        cliApp.run(process.argv);
    }
    catch (e) {
        logger_1.logger.error(`A critical error occurred: ${e.message}`);
        process.exit(1);
    }
}
bootstrap();
