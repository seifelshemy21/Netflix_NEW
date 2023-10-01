import icon from "../assets/icons8-netflix-144.png"




const Header = () => {
    return (
        <div className="header">
            <nav>
                <article><img src={icon} alt="logo" /></article>
                <article>
                    <select data-uia="language-picker-header" class="ui-select medium " id="lang-switcher-header-select" tabindex="0" placeholder="lang-switcher">
                        <option selected="" lang="en" value="/eg-en/" data-language="en" data-country="EG">English</option>
                        <option lang="ar" value="/eg/" data-language="ar" data-country="EG">العربية</option>

                    </select>
                    <button>sign in</button>
                </article>
            </nav>
            <div className="text-header">
                <h1> Unlimited movies, TV shows, and more</h1>
                <p>Watch anywhere. Cancel anytime.</p>
                <h2>Ready to watch? Enter your email to create or restart your membership.</h2>
                <form >
                    <input type="email" placeholder="Email address" />
                    <button>get started </button>
                </form>
            </div>
        </div>
    );
}

export default Header;