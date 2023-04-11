import {program} from "commander";
import {jokes} from "./jokes";
import * as colors from 'colors';

program.description('Make fun of frontend developers')
    .option('--number <number>', 'Number of the joke')
    .requiredOption('--age <age>', 'Your age')
    .parse(process.argv);

export function main() {

    const number = program.opts()['number'];

    if (number) {
        const joke = jokes[number];

        if (!joke) {
            throw new Error('No joke for you');
        }

        console.log(joke);
    }

    const joke = jokes.at(Math.round(Math.random() * jokes.length));
    console.log(
        colors.america(joke)
    );
}
