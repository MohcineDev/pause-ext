function listenForPause() {
    document.querySelector('button').addEventListener('click', e => {
        function pauseServer(tabs) {
            console.log('pause server');
            browser.tabs.sendMessage(tabs[0].id, {
                command: "pause"
            }).then(()=>{
                console.log(123);
            })
        }

        function resumeServer(tabs) {
            console.log('resume server');
            browser.tabs.sendMessage(tabs[0].id, {
                command: "resume"
            })
        }


        function internError(error) {
            console.log('something happend : ', error);

        }

        // if (e.target.classList.contains('pause')) {
        if (true) {
            browser.tabs.query({ active: true, currentWindow: true })
                .then(pauseServer)
                .catch(internError)
        }
        else if (e.target.classList.contains('resume')) {
            browser.tabs.query({ active: true, currentWindow: true })
                .then(resumeServer)
                .catch(internError)
        }

    })
}
function handleError(error) {
    console.log(error.message);
}

browser.tabs.executeScript({ file: "/content/content_script.js" })
    .then(listenForPause)
    .catch(handleError)