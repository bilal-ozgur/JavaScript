function subscribe() {
  const buttonElement = document.querySelector(".js-subscribe-button");

  buttonElement.innerText === "Subscribe"
    ? (buttonElement.innerHTML = "Subscribed")
    : (buttonElement.innerHTML = "Subscribe");

  /*
    if (buttonElement.innerHTML === 'Subscribe') {
       buttonElement.innerHTML = 'Subscribed'
    } else {
       buttonElement.innerHTML = 'Subscribe'
    }
   */
}
