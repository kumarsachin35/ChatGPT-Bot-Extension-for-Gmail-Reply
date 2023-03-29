console.log('hi i am gpt script');

chrome.runtime.onMessage.addListener(
    function (emailContent, sender, sendResponse) {
        const textArea = document.querySelector('textArea');
        textArea.value = 'Respond to the most recent email with professional tone and sign off with my name (Sachin) at the end: /n' + emailContent;

        const Button = textArea.nextElementSibling;
        Button.click();


        const callback = function (mutationList, observer) {
            for (const mutation of mutationList) {
                if (mutation.attributeName === 'disabled') {
                    if (button.disabled === false) {
                        const responses = document.querySelector('#__next > div.overflow-hidden.w-full.h-full.relative > div.flex.h-full.flex-1.flex-col.md\\:pl-\\[260px\\] > main > div.flex-1.overflow-hidden > div > div > div').childNodes;
                        const lastResponse = responses[responses.length-2];
                        const lastResponseText = lastResponse.innerText;
                        sendResponse(lastResponseText);                    }
                }
            }
        }
        const observer = new MutationObserver(callback)
        observer.observe(Button, { attributes: true });
        return true;
    }
)