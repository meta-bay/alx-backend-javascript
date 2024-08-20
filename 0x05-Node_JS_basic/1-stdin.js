console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', () => {
  const userName = process.stdin.read();
  if (userName) {
    process.stdout.write(`Your name is: ${userName}`);
  }
});

process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
