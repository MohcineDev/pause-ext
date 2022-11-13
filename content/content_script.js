(function () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;

    const pauseServer = () => {
        console.log('content');
        document.querySelector('#txt').value = "pause server"
    }

    const resumeServer = () => {
        console.log('content');

        document.querySelector('#html').value = "resume server"
    }

    browser.runtime.onMessage.addListener(msg => {
        if (msg.command === "pause") {
            pauseServer()
        }
        else if (msg.command === "resume") {
            resumeServer()

        }
    })
}
)();