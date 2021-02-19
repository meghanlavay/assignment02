let grade = Number(prompt('Choose a number between 1 and 100'));
if (grade > 100) {
    document.write('You must choose a number between 1 and 100');
} else if (grade >= 90) {
    document.write('You received a A');
} else if (grade >= 80) {
    document.write('You received a B');
} else if (grade >= 70) {
    document.write('You received a C');
} else if (grade >= 60) {
    document.write('You received a D');
} else {
    document.write('You received a F');
}