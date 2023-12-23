function createContactTab() {
    const contact = document.createElement('main');
    contact.className = 'contact';
    contact.innerHTML = `
    <div class="con-info">
        <address class="address">
            🏠 123 Main Street, Sidist Kilo <br>
            📞 +25191234563 <br>
            📪 fakeemail@gmail.com
        </address>
        <img src="./Assets/maploc.png" alt="location on map" style="width: 80%">
        <div id="newsletter">
            <input type="email" name="email" id="email" placeholder="your email for newsletter">
            <input type="button" value="Subscribe">
        </div>
        <div class="icons">
            <a href="https://www.facebook.com/profile.php?id=61553305680220"><img src="./Assets/fb.png" alt="facebook link"></a>
            <a href="https://www.instagram.com/zekaryasmekuaninit/"><img src="./Assets/insta.png" alt="instagram link"></a>
            <a href="https://twitter.com/z_zekaryas"><img src="./Assets/twiter.png" alt="twitter link"></a>
        </div>
    </div>
    `
    return contact
}
export { createContactTab }