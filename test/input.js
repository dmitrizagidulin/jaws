test("Input", function() {
  same(jaws.pressed("a"), undefined, "jaws.pressed('a') should return undefined if 'a' isn't pressed")
  same(jaws.pressed("|"), undefined, "test more keys")

  /*
  jaws.on_keydown("A", test_on_keydown);
  stop();

  function test_on_keydown(key) {
    same("A", key, "on_keydown() is called with human name of pressed key");
    start();
  };
  */

  // https://developer.mozilla.org/en/DOM/document.createEvent#Notes
  // https://developer.mozilla.org/en/DOM/event.initKeyEvent
  
  /*
  // FireFox, 65 == A
  var event = document.createEvent("KeyboardEvent");
  event.initKeyEvent('keydown', true, true, null, false, false, false, false, 65, 0);
  */

  /*
  // Chrome
  var event = document.createEvent("TextEvent");
  event.initTextEvent("textInput", true, true, null, String.fromCharCode(65) + "\r\n", "en-US");
  window.dispatchEvent(event);
  */

})

