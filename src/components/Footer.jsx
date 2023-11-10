import githubLogo from "../assets/logos/github-mark.png";
import linkedinLogo from "../assets/logos/LI-Logo.png";
import stackLogo from "../assets/logos/logo-stackoverflow.png";

export default function Footer() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://github.com/IsabellaKingson">
            <img src={githubLogo}></img>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/isabella-kingson-168046138/">
            <img src={linkedinLogo}></img>
          </a>
        </li>
        <li>
          <a href="https://stackoverflow.com/users/21496040/isabella-kingson">
            <img src={stackLogo}></img>
          </a>
        </li>
      </ul>
    </div>
  );
}
