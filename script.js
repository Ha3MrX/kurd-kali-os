const cliInput = document.getElementById('cli-input');
const dynamicOutput = document.getElementById('dynamic-output');

cliInput.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        const cmd = cliInput.value.trim().toLowerCase();
        const line = document.createElement('div');
        line.innerHTML = `<p class="line"><span class="prompt">guest@cyberspace:~$</span> ${cliInput.value}</p>`;
        dynamicOutput.appendChild(line);

        const response = document.createElement('p');
        response.className = 'result typewriter';

        if (cmd === 'help') {
            response.innerText = "Commands: [status, nmap, clear, contact, start_hack]";
        } else if (cmd === 'start_hack') {
            response.innerHTML = "Accessing Mainframe... <span id='prog'>0%</span>";
            let p = 0;
            let i = setInterval(() => {
                p += 10;
                document.getElementById('prog').innerText = p + "%";
                if (p >= 100) {
                    clearInterval(i);
                    response.innerHTML = "BREACH SUCCESSFUL. ENCRYPTING DATA...";
                    response.style.color = "red";
                }
            }, 250);
        } else if (cmd === 'clear') {
            location.reload();
            return;
        } else {
            response.innerText = "Command not found. Type 'help'.";
        }

        dynamicOutput.appendChild(response);
        cliInput.value = '';
        document.querySelector('.terminal-content').scrollTop = document.querySelector('.terminal-content').scrollHeight;
    }
});