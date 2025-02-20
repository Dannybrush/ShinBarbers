<!-- Team -->
<section id="team" class="team">
  <h2>Meet Our Team</h2>
  <div class="team-members">
    <div class="team-member">
      <img src="/placeholder-team-pic_small.jpg" alt="Barber 1" />
      <h3>John Doe</h3>
      <p>Specialist in fades and beard trims.</p>
    </div>
    <div class="team-member">
      <img src="/placeholder-team-pic_small.jpg" alt="Barber 2" />
      <h3>Jane Smith</h3>
      <p>Expert in modern cuts and styling.</p>
    </div>
    <!-- Add more barbers as needed -->
     <!-- Background colour was #333 -->
  </div>
</section>

<style>
  .team {
    padding: 4rem 1rem;
    Background: #222 ;
    color: #fff;
    text-align: center;
  }
  .team h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #fff;
  }
  .team-membersx {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 2rem;
    justify-items: center;
    justify-content: center;
  }
  .team-members {
  display: flex;
  justify-content: center;  /* Centers the content horizontally */
  gap: 2rem;
  flex-wrap: wrap;  /* Allows for responsive wrapping */
}
  .team-member img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid #fff;
    object-fit: cover;
  }
  .team-member h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    color: #fff;
  }
  .team-member p {
    font-size: 1rem;
    color: #aaa;
  }
</style>
