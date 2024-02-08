import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../container/container";

export default function Footer() {
  return (
    <footer className="border-t">
      <Container className="py-5 flex justify-between items-center gap-5 text-slate-600 dark:text-slate-400 text-sm">
        <p>© 2024 ANTHONY MCLAMB</p>
        <ul className="flex gap-5 items-center justify-center">
          <li>
            <a
              href="https://github.com/admclamb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
            >
              <FontAwesomeIcon icon={faGithub} size="xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/anthonymclamb"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
            >
              <FontAwesomeIcon icon={faLinkedinIn} size="xl" />
            </a>
          </li>
        </ul>
      </Container>
      <div className="p-3 text-sm border-t">
        <p className="text-center text-slate-600 dark:text-slate-400">
          Website Made With Love <span className="animate-pulse">💙</span>
        </p>
      </div>
    </footer>
  );
}
