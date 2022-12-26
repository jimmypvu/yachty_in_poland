const wock=document.querySelector('#wock');
let currentDroppable = null;

    wock.onmousedown = function(event) {

      wock.style.position = 'absolute';
      wock.style.zIndex = 1000;
      document.body.append(wock);

      function moveAt(pageX, pageY) {
        wock.style.left = pageX - wock.offsetWidth/2 + 'px';
        wock.style.top = pageY - wock.offsetHeight/2 + 'px';
      }

      moveAt(event.pageX, event.pageY);

      function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        wock.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        wock.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.droppable');
        if (currentDroppable != droppableBelow) {
          if (currentDroppable) { // null when we were not over a droppable before this event
            leaveDroppable(currentDroppable);
          }
          currentDroppable = droppableBelow;
          if (currentDroppable) { // null if we're not coming over a droppable now
            // (maybe just left the droppable)
            enterDroppable(currentDroppable);
          }
        }
      }

      document.addEventListener('mousemove', onMouseMove);

      wock.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        wock.onmouseup = null;
      };

    };

    function enterDroppable(elem) {
        elem.style.background = ''
        audio.play();
        document.querySelector('#mapholder').classList.toggle('seeThrough');
        document.querySelector('#shockedyachty').classList.toggle('hidden');
        document.querySelector('#dancingyachty').classList.toggle('hidden');
        document.body.classList.toggle('blink-bg')

    }

    function leaveDroppable(elem) {
      elem.style.background = ''
      audio.pause();
      document.querySelector('#mapholder').classList.toggle('seeThrough');
      document.querySelector('#shockedyachty').classList.toggle('hidden');
      document.querySelector('#dancingyachty').classList.toggle('hidden');
      document.body.classList.toggle('blink-bg')

    }
    

    wock.ondragstart = function() {
      return false;
    };


let audio = document.querySelector('#audio')
function playAudio(){
  new audio.play();
}

function pauseAudio(){
  new audio.pause();
}