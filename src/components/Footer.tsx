const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer id="footer">
      <p>
        &copy; {currentYear}{" "}
        <a
          href="https://www.jaesmadeit.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          JAES Made It
        </a>{" "}
        | Made with{" "}
        <a
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          React
        </a>{" "}
        +{" "}
        <a
          href="https://www.typescriptlang.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TypeScript
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/jhonnierandrey/matrix"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="http://jhonnierandrey.info/"
          target="_blank"
          rel="noopener noreferrer"
        >
          See more
        </a>{" "}
        |{" "}
        <a
          href="https://www.buymeacoffee.com/jhonnierandrey"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-coffee"></i>
        </a>
      </p>
    </footer>
  );
};

export default Footer;
