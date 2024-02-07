import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Container from "../container/container";

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="bg-slate-200 dark:bg-slate-800">
        <Container className="py-5">
          <ul className="flex gap-5 items-center justify-center">
            <li>
              <a
                href="https://github.com/admclamb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
              >
                <FontAwesomeIcon icon={faGithub} size="2xl" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/anthonymclamb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-blue-600 dark:hover:text-blue-400 duration-200 hover:underline underline-offset-2"
              >
                <FontAwesomeIcon icon={faLinkedinIn} size="2xl" />
              </a>
            </li>
          </ul>
        </Container>
      </div>

      <div>
        <p>Website Made With Love</p>
      </div>
    </footer>
  );
}
