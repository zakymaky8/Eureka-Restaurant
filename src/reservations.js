function createReservationTab() {
    const reservation = document.createElement('main');
    reservation.className = 'reservation'
    reservation.innerHTML = `
    <h1 id="heading">Reseravations</h1>
    <form action="#" id="form">
        <div id="part1">
            <div>
                <label for="customer-name">Name: </label>
                <input type="text" name="customer-name" id="customer-name">
            </div>
            <div>
                <label for="email">Email: </label>
                <input type="email" name="email" id="email">
            </div>
            <div>
                <label for="date">Pick Date: </label>
                <input type="date" name="time" id="date">
            </div>
            <div>
                <label for="guest">No_ of Guests: </label>
                <input type="number" name="guest no_" id="guest">
            </div>
        </div>
        <hr>
        <div  id="part2">
            <div>
                <div><label for=""> Special Requests: </label></div>
                <textarea name="request" cols="25" rows="7"></textarea>
            </div>
            <div>
                <label for="times">See Available Times: </label>
                <select name="" id="times">
                    <option disabled>Sunday: 8am - 8pm</option>
                    <option disabled>Monday: 6am - 6pm</option>
                    <option disabled>Tuesday: 6am - 6pm</option>
                    <option disabled>Wednesday: 6am - 6pm</option>
                    <option disabled>Thursday: 6am - 10pm</option>
                    <option disabled>Friday: 6am - 10pm</option>
                    <option disabled>Saturday: 8am - 10pm</option>
                </select><br>
                <input type="submit" value="Submit">
            </div>
        </div>
    </form>
    `

    return reservation;
}
export { createReservationTab }