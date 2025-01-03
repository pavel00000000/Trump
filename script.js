// Load votes from local storage
let votes = localStorage.getItem('votes') ? parseInt(localStorage.getItem('votes')) : 0;
let hasVoted = localStorage.getItem('hasVoted') === 'true';

// Update the counter on page load
document.getElementById('voteCounter').innerText = `Votes: ${votes}`;
document.getElementById('voteButton').disabled = hasVoted;

function vote() {
    if (!hasVoted) {
        votes++;
        document.getElementById('voteCounter').innerText = `Votes: ${votes}`;
        document.getElementById('voteButton').disabled = true;
        hasVoted = true;

        // Save to local storage
        localStorage.setItem('votes', votes);
        localStorage.setItem('hasVoted', 'true');
    }
}
