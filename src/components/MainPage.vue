<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>
      True-Lerngruppe
    </h1>
    <section id="section-table">
      <li>
        <ul><a href="#escape-room">Escape Room</a></ul>
      </li>
    </section>
    <h2>
      Bouncy Button
    </h2>
    <p>
      This Button will keep you on your toes! No funny <s>stuff</s> number.
    </p>
    <h2>
      Impressum
    </h2>

    <h2>
      Svg to Svg converter
    </h2>
    <p>
      The maybe most useful thing on this whole site.
    </p>
    <h2 id="escape-room">
      Escape Room
    </h2>
    <p>
      Will be implemented soon.
    </p>
  </div>
</template>

<style scoped>
.container {
  margin-left: 30%;
  margin-right: 30%;
  padding: 0 20px;
}

h1 {
  font-size: 5em;
}

h2 {
  font-size: 3em;
}

#section-table {
  transition: height 0.5s ease;
  /*animation: hidemenue 5s infinite;*/
}

@keyframes hidemenue {
  0% { height: 0; }
  100% { height: auto; }
  /*0%   { height: 0%; background: red;}
  25%  {height: 25%; background: blue;}
  50%  {height: 50%; background: yellow;}
  75%  {height: 75%; background: green;}
  100% {height: 100%; background: red;}*/
}

@media(max-width: 768px) {
  .container {
    margin-left: 5%;
    margin-right: 5%;
    padding: 0 15px;
  }

  h1 {
    font-size: 2.5em;
  }

  h2 {
    font-size: 1.8em;
  }
}
</style>
