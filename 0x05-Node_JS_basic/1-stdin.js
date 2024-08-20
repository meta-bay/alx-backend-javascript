console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const user_name = process.stdin.read();
  if (user_name) {
    process.stdout.write(`Your name is: ${user_name}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});