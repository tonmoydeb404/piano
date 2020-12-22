

var white = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
var black = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i'];

const whiteKeys = document.querySelectorAll('.white');
const blackKeys = document.querySelectorAll('.black');

    document.addEventListener('keydown', e => {
        if(e.repeat){
            return
        }else{ 
        let item = e.key;
    
    const whiteKeyIndex = white.indexOf(item);
    const blackKeyIndex = black.indexOf(item);
        
        if(whiteKeyIndex > -1){
            playSound(whiteKeys[whiteKeyIndex]);
        }else if(blackKeyIndex > -1){
            playSound(blackKeys[blackKeyIndex]);
        }
    }
})

var keys = document.querySelectorAll('.key');

  keys.forEach(key => {
    key.addEventListener('click', () => playSound(key)); 
  });
  
  function playSound(key){
    const sound = document.getElementById(key.value);
      sound.currentTime = 0;
      sound.play();
    //console.log(key.value);
      key.classList.add('active');
      setTimeout( () => {
          key.classList.remove('active');
      }, 100)
  }

alert('If you are using KeyBoard Then \n\nFor White Button Use These Keys :\n' + white + '\n\nFor Black Button Use These Keys :\n' + black)