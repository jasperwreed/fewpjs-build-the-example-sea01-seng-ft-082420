// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const likes = document.querySelectorAll('.like')
const modal = document.getElementById('modal')

// Hiding error modal
modal.className = 'hidden'

// Server Call && Change Heart Status
const serverCall = (e) => {
  let heart = e.target
  mimicServerCall()
  .then(serverMessage => {
    alert('Server Notified')
    alert(serverMessage)
    if (heart.className === 'activated-heart') {
      heart.className = ''
      heart.innerText = EMPTY_HEART
    } else {
      heart.className = 'activated-heart'
      heart.innerText = FULL_HEART
    }
  })
  .catch(error => {
    // window.setTimeout(modal.className = 'hidden', 5000)
    modal.className = ''
    alert(error)
  })
}

// Event Listener

for (const glyph of likes) {
  glyph.addEventListener('click', (e) => serverCall(e))
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
