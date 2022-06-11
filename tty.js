/**following will return true, if file is attached to a terminal
 *but it would return false, if we provide the input while execution
 */
console.log(`stdin: ${Boolean(process.stdin.isTTY)}`);

/**following will return true, if file is attached to a terminal
 *but it would return false, if we save the output in a file while execution
 */
console.log(`stdout: ${Boolean(process.stdout.isTTY)}`);
