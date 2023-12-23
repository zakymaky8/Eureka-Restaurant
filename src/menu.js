function createMenu() {
    const menu = document.createElement('main');
    menu.className = 'menu'
    menu.innerHTML = `
    <div class="menu-list">
        <div class="menu-item">
            <img src="./Assets/chicken-street.webp" alt="Easy Chicken Street Tacos">
            <h2>Easy Chicken Street Tacos</h2>
            <p>Flavorful seasoned chicken, nestled in soft tortillas, topped with vibrant salsa and cilantro. A quick and delightful street-style treat!</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/Moussaka.jpg" alt="Moussaka">
            <h2>Moussaka</h2>
            <p>Delicious moussaka featuring layers of eggplant baked with seasoned ground beef, topped with creamy béchamel sauce—a classic Greek delight!</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/ChickenTagine.webp" alt="Chicken Tagine">
            <h2>Chicken Tagine</h2>
            <p>Savor the exotic blend of spices in our Chicken Tagine — tender chicken slow-cooked with apricots and almonds for a Moroccan delight.</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/Pot-Pork-Ramen.webp" alt="Easy Instant Pot Pork Ramen Stir Fry">
            <h2>Easy Instant Pot Pork Ramen Stir Fry</h2>
            <p>Savor simplicity with our Easy Instant Pot Pork Ramen Stir Fry—succulent pork, vibrant veggies, and flavorful noodles create a quick and satisfying delight.</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/Butternut.webp" alt="Butternut Squash Caprese Salad">
            <h2>Butternut Squash Caprese Salad</h2>
            <p>Delight in our Butternut Squash Caprese Salad, a symphony of flavors featuring sweet butternut squash, fresh tomatoes, mozzarella, and basil.</p>
        </div>
        <div class="menu-item">
            <img src="./Assets/feijoada.webp" alt="Feijoada">
            <h2>Feijoada</h2>
            <p>Savor Brazilian Feijoada — a hearty black bean stew with savory meats, capturing authentic flavors and traditions.</p>
        </div>
    </div>
    `
    return menu;
}
export {createMenu}