function home() {
    const main = document.createElement('main');
    main.innerHTML = `
        <section class="welcome">
            <h2>Discover Delight at Eureka's table</h2>
        </section>
        <section class="about">
            <div class="we">
                <h2>We</h2><br>
                <p> We offer sense of family. We have a belief that good meals
                are not just about what's on the plate but the memories created
                around it. <strong> Welcome to Eureka's Table, where every visit
                is an exploration of taste and the joy of dining.</strong>
                 </p>
            </div>
            <div class="when-to">
                <h2>When to</h2><br>
            <pre>
Sunday: 8am - 8pm

Monday: 6am - 6pm

Tuesday: 6am - 6pm

Wednesday: 6am - 6pm

Thursday: 6am - 10pm

Friday: 6am - 10pm
    
Saturday: 8am - 10pm
</pre>
            </div>
            <div class="where-to">
                <h2>Where</h2><br>
                <pre>
456 Spice Avenue
Addis Ababa,
Gulele SUbcity
District 12345
Sidist Kilo University,
Ethiopia
</pre>
                <img style="width: 70px; border-radius: 50%" src="./Assets/loc.jpg" alt="location">
            </div>
        </section>
    `
    return main
}
export { home };