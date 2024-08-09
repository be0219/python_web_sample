document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('sendButton').addEventListener('click', function() {
        const userInput = document.getElementById('userInput').value;

        fetch('/message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: userInput })
        })
        .then(response => response.json())
        .then(data => {
            document.getElementById('response').innerText = data.response;
        });
    });
});
