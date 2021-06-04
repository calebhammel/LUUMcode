let fft, mic;

function setup() {

  createCanvas(displayWidth, displayHeight);

  frameRate(10);

  mic = new p5.AudioIn();
  mic.start();
  fft = new p5.FFT();
  fft.setInput(mic);
}

function touchStarted() { getAudioContext().resume(); } 

  

function draw() {
  background(0);

  let spectrum = fft.analyze();
  let bass, lowMid, mid, highMid, treble;

  bass = fft.getEnergy("bass");
  lowMid = fft.getEnergy("lowMid");
  mid = fft.getEnergy("mid");
  highMid = fft.getEnergy("highMid");
  treble = fft.getEnergy("treble");
  
  
  for(i = 1; i < 2; i ++){
     if (treble > 50) {
      fill(255,0,0);
      background(255,0,0);
      console.log('treble');
     }
   }
   
   console.log("Bass: "+bass+" lowMid: "+lowMid+" mid: "+mid+" highMid: "+highMid+" treble: "+treble);

  }

    
  


      



