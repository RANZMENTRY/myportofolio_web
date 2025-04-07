<<<<<<< HEAD
const { exec } = require("child_process");

exec("npx tailwindcss init -p", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
    return;
  }
  console.log(`✅ Success:\n${stdout}`);
});
=======
const { exec } = require("child_process");

exec("npx tailwindcss init -p", (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`⚠️ Stderr: ${stderr}`);
    return;
  }
  console.log(`✅ Success:\n${stdout}`);
});
>>>>>>> 273d3c19eb348d75c8ea44034f8b14902a840364
