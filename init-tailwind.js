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
