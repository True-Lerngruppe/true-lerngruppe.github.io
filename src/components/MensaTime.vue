<script setup lang="ts">
import { LoadSettings, SaveSettings, AutoRedirect } from '../settings.ts';

if(!AutoRedirect()) {
  const setts = LoadSettings();
  setts.playingMensatime = true
  SaveSettings(setts);
}

// const audio = new Audio('/audio/mensatime.mp3');
// audio.play().finally(() => {
//   const setts = LoadSettings();
//   setts.playingMensatime = false;
//   SaveSettings(setts);
// });

function showIfValid(date: Date) {
  const now = new Date();
  if(now.
}

function subscribe() {
  const audio = new Audio('/audio/mensatime.mp3');
  audio.play().finally(() => {
    const setts = LoadSettings();
    setts.mensaTimeStart = new Date();
    SaveSettings(setts);


  });
}

</script>

<template>
  <div class="container">
    <h1>It's Mensatime!</h1>
    <iframe src="https://stwno.de/infomax/daten-extern/html/speiseplaene.php?einrichtung=HS-R-tag" title="Mensaplan"/>
    <br>
    <br>
    <button onclick="subscribe">Subscribe to Mensaplan</button>
    <h2 class="lyrics" hidden>Lyrics</h2>
    <pre class="lyrics" hidden>
Money Boy Swag, das ist Money Boy Rap
Es ist Mensatime und es wird ein Money Boy Fest
Und ich cruise durch die Town in meinem Maybach denn
Es dauert nicht mehr lang und schon ist es Mensatime
Yeah, triff mich in der Stadt, Homie, ja ich gebe Geld aus
Guck mal wie ich meiner Lady einen schönen Held kauf'
Rotfuchs, Silberfuchs, kuschelweiches Fell
Und danach fick ich kurz mit einer Nutte im Hotel
Yeah, PRPS, Schnitzel finden mеine Rosen fresh
Ich hab dеn Mensa Swag, grüner Schal, rote Cap
Es ist Mensatime, Party jede Nacht, Slime
Und zwar die ganze Nacht, wir gehen erstmal um acht Heim
Happy Holidays, ich flieg nach Hawaii, man
Zu Silvester geht es weiter, dann nach Thailand
Yeah, ich feier Mensatime am Strand
Ich kann's kaum erwarten, ich bin schon auf Mensatime gespannt

Es ist Mensatime, es ist Mensatime
Es ist Mensatime, ich lad ein paar Schnitzel ein
Ich lad ein paar Schnitzel ein, schieb mir ein paar Pommes rein
Es ist Mensa, es ist Mensa, Es ist Mensatime
Es ist Mensatime, es ist Mensatime
Es ist Mensatime, ich lad ein paar Schnitzel ein
Ich lad ein paar Schnitzel ein, schieb mir ein paar Pommes rein
Es ist Mensa, es ist Mensa, Es ist Mensatime

Es ist Mensatime, Mensazeit, frohes Fest
Ich trage eine grüne Weste und ein rotes Cap
Es ist Mensazeit, überall weißer Schnee
Und ich ziehe eine Line, homie, live on stage
Es ist Heiligabend, ich trage Designermarken
Du willst auch gerne so 'ne coole Kleidung haben
Das ist auch okay, schreib doch eine Wunschliste
Ich hab Swag Homie, triff mich vor der Punschhütte
Mr. Moneyboy, Merry Merry Mensa
Und am Mensabaum, very sexy Schnitzel
Schöne Ladies in heißem Dessous
Mr. Moneyboy, ja ich finde Mensatime cool
Und ich spritz euch an, an mit meinem Mensa-Swag
Schnitzel stehen auf Stöckelschuhe und Designerbags
Darum kauf ich ihnen Jimmy Choo's, Loui' Stuff
Und zum drüberstreuen, eine nice Gucci Clutch

Es ist Mensatime, es ist Mensatime
Es ist Mensatime, ich lad ein paar Schnitzel ein
Ich lad ein paar Schnitzel ein, schieb mir ein paar Pommes rein
Es ist Mensa, es ist Mensa, Es ist Mensatime
Es ist Mensatime, es ist Mensatime
Es ist Mensatime, ich lad ein paar Schnitzel ein
Ich lad ein paar Schnitzel ein, schieb mir ein paar Pommes rein
Es ist Mensa, es ist Mensa, Es ist Mensatime
      </pre>
  </div>
</template>

<style scoped>

.container {
  margin-left: 30%;
  margin-right: 30%;
  padding: 0 20px;
}

iframe {
  height: 50vh;
  width: 50vw;
  display: block;
  border-style: none;
}

@media(max-width: 768px) {
  .container {
    margin-left: 5%;
    margin-right: 5%;
    padding: 0 15px;
  }

  iframe {
    width: 80vw;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.8em;
  }
}
</style>
