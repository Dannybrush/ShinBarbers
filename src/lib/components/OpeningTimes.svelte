<!--  OpeningTimes.svelte --> 
<script>
    export let OTime = [
      { day: "Monday", timeString: "08:00 - 17:30" },
      { day: "Tuesday", timeString: "08:00 - 17:30" },
      { day: "Wednesday", timeString: "08:00 - 17:30" },
      { day: "Thursday", timeString: "08:00 - 17:30" },
      { day: "Friday", timeString: "08:00 - 17:30" },
      { day: "Saturday", timeString: "08:00 - 17:30" },
      { day: "Sunday", timeString: "08:00 - 17:30" },
      { day: "Bank Holidays", timeString: "08:00 - 17:30" }
    ];
  </script>
  
  <style>
    .OpeningTimes {
      padding: 4rem 1rem;
      background: #000;
      color: #fff;
      text-align: center;
    }
    h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    .OT-item {
      margin-bottom: 1rem;
      text-align: center;
    }
  </style>
  
  <section class="OpeningTimes">
    <h2>Our Opening Times: </h2>
    {#each OTime as OT}
      <div class="OT-item">
        <strong>{OT.day}</strong>: {OT.timeString}
      </div>
    {/each}
  </section>