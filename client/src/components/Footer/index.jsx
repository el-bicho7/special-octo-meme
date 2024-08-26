const themes = [ "aqua", "light", "cyberpunk", "coffee"];
// sessionStorage.setItem();

const Footer = () => {
  const updateTheme = (e) => {
    document.getElementsByTagName('html')[0].setAttribute('data-theme', e.target.value);
  };

  return (
    <footer className="w-100 bg-neutral p-2 flex justify-between items-center">
      <h4>
        Made with{' '}
        <span
          className="emoji"
          role="img"
          aria-label="heart"
          aria-hidden="false"
        >
          ❤️
        </span>{' '}
        by the Whitebeard team.
      </h4>
      <select class="select select-bordered input-primary" onChange={(val) => updateTheme(val)}>
        {themes.map(theme => (<option key={theme} value={theme}>{theme}</option>))}
      </select>
    </footer>
  );
};

export default Footer;
