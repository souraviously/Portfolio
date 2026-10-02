import React from "react";
import { SiNextdotjs, SiJavascript, SiRedux, SiFigma, SiFirebase, SiMongodb, SiJsonwebtokens, SiCloudinary, SiSocketdotio, SiAxios, SiStripe, SiExpress, SiNodedotjs, SiTypescript, SiSass, SiPrisma, SiGraphql, SiVite } from "react-icons/si";
import { FaUserShield, FaGithub } from "react-icons/fa6";
import { TbPasswordMobilePhone } from "react-icons/tb";

import { MdOutlineAnimation } from "react-icons/md";
import nextJsIcon from "../../assets/images/NextJsIcon.svg";
import ReactIcon from "../../assets/images/react.svg";
import TailwindIcon from "../../assets/images/TailwindCssIcon.svg";
import FigmaIcon from "../../assets/images/FigmaIcon.svg";
import FirebaseIcon from "../../assets/images/FirebaseIcon.svg";
import HtmlIcon from "../../assets/images/HtmlIcon.svg";
import CssIcon from "../../assets/images/CssIcon.svg";
import BootstrapIcon from "../../assets/images/BootStrapIcon.svg";
import GithubIcon from "../../assets/images/GithubIcon.svg";
import AosIcon from "../../assets/images/AosIcon.png";
import reduxIcon from "../../assets/images/ReduxIcon.svg";
import reactRouterIcon from "../../assets/icons/reactRouter.svg";
import apiIcon from "../../assets/icons/apiIcon.svg";
import restApi from "../../assets/icons/restApiI.svg";

const iconMap = {
  nextjs: { type: "asset", src: nextJsIcon, alt: "Next" },
  react: { type: "asset", src: ReactIcon, alt: "React" },
  tailwind: { type: "asset", src: TailwindIcon, alt: "Tailwind CSS" },
  typescript: { type: "icon", node: SiTypescript, color: "#3178C6" },
  html: { type: "asset", src: HtmlIcon, alt: "HTML" },
  css: { type: "asset", src: CssIcon, alt: "CSS" },
  redux: { type: "asset", src: reduxIcon, alt: "Redux" },
  javascript: { type: "svg", node: <svg xmlns="http://www.w3.org/2000/svg" aria-label="JavaScript" role="img" viewBox="-76.8 -76.8 665.60 665.60" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(0,0), scale(1)"><rect x="-76.8" y="-76.8" width="665.60" height="665.60" rx="332.8" fill="#f7df1e" strokeWidth="0"></rect></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="68.608"></g><g id="SVGRepo_iconCarrier"><rect width="512" height="512" rx="15%" fill="#f7df1e"></rect><path d="M324 370c10 17 24 29 47 29c20 0 33-10 33 -24c0-16 -13 -22 -35 -32l-12-5c-35-15 -58 -33 -58 -72c0-36 27 -64 70 -64c31 0 53 11 68 39l-37 24c-8-15 -17 -21 -31 -21c-14 0-23 9 -23 21c0 14 9 20 30 29l12 5c41 18 64 35 64 76c0 43-34 67 -80 67c-45 0-74 -21 -88 -49zm-170 4c8 13 14 25 31 25c16 0 26-6 26 -30V203h48v164c0 50-29 72 -72 72c-39 0-61 -20 -72 -44z"></path></g></svg>, },
  nodemailer: { type: "svg", node: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512"> <path fill="#0f9dce" d="M303.5 377.6L512 134.4v243.2"></path> <path fill="#0e90bd" d="M303.5 377.6L512 134.4L326.4 377.6"></path> <path fill="#22b573" d="M0 134.4v243.2h208.5z"></path> <path fill="#29abe2" d="M417 377.6L208.5 134.4v243.2"></path> </svg> },
  mongoose: { type: "svg", node: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"> <path fill="#850000" d="M69.953 39.309c-1.676.07-4.508.52-4.508.71c0 .079 1.996 1.079 2.149 1.079c.14 0 2.457 1.156 2.972 1.476c.672.43 1.153.82 1.012.82c-.09 0-2.469-.921-3.371-1.308c-.734-.309-3.785-1.219-5.27-1.57c-.804-.188-1.144-.258-2.511-.508c-2.016-.368-4.387-.39-5.418-.051c-1.477.48-1.809 1.07-1.809 3.246c0 1.2.059 1.707.32 2.785c.114.469.434 1.5.583 1.848c.043.11.183.45.3.75c.121.297.485 1.066.805 1.695c1.797 3.567 4.488 6.54 8.281 9.156c1.196.82 4.446 2.375 5.75 2.747c.332.09.442.277.172.277c-.3 0-3.05-.758-3.613-.996a10 10 0 0 0-.652-.262c-1.957-.789-4.457-2.414-6.524-4.262a21.4 21.4 0 0 1-5.312-7.257c-.793-1.79-1.332-3.875-1.465-5.692c-.078-1.039-.16-1.289-.43-1.277c-.09 0-.945-.031-1.887-.082c-2.562-.11-6.062.172-9.527.77c-6.625 1.128-13.773 3.734-21.129 7.706a95 95 0 0 0-3.625 2.067c-.14.082-.582.351-.984.601c-.399.25-.871.528-1.043.637c-.38.223-4.586 3.078-5.09 3.457c-.188.137-.711.527-1.152.848C4.98 60.195.633 63.742.383 64.102c-.121.18.07.27.328.18c.133-.052.473-.122.746-.16c.281-.044 1.004-.231 1.605-.43c.61-.192 1.266-.391 1.454-.442c1.488-.348 2.09-.469 2.96-.598c.395-.05.977-.14 1.305-.191c4.078-.598 6.024-.746 7.84-.61c3.945.32 7.719.993 9.879 1.758c1.617.582 4.906 2.36 6.352 3.426c.836.63 3.523 3.305 4.117 4.113c.46.641.972 1.2 1.093 1.2c.04 0 .09-2.04.102-4.524l.027-4.512l5.282-.03c4.156-.02 5.308.011 5.379.1c.101.13.343.56 1.136 2.024c.754 1.41 1.125 2.09 1.356 2.496c.12.223.398.739.633 1.149c.218.41.628 1.168.91 1.687c.281.52.511.961.511.98c0 .09.414.63.485.63c.039 0 .14-.153.21-.32c.079-.18.29-.579.462-.88c.18-.3.5-.886.722-1.296c.223-.41.524-.98.684-1.25c.441-.79.902-1.645 1.285-2.344A85 85 0 0 1 58.5 63.96c.129-.25.29-.512.34-.578c.082-.09 1.265-.121 5.543-.102l5.43.031l.03 8.817c.02 6.945.048 8.805.15 8.805c.058-.012.46-.243.874-.532c.582-.406.832-.656 1.102-1.117c.613-1.047 2.351-2.695 3.515-3.336A16.6 16.6 0 0 1 80 74.254c1.605-.34 2.078-.39 5.723-.52c6.652-.23 7.636-.27 7.687-.32c.031-.027-.058-.289-.191-.59c-.14-.289-.38-.828-.551-1.187c-.633-1.367-.633-1.825.031-2.496c.45-.47 1.613-.88 3.613-1.278c.329-.07.743-.16.91-.218c.173-.051.383-.09.473-.09c.254 0 2.25-.489 2.672-.649c.29-.12 1.856-.46 3.723-.82c.812-.16 2.922-.578 4.668-.93c1.105-.218 2.258-.449 2.558-.508c.301-.058.735-.148.954-.187c.222-.05.511-.113.652-.133c.14-.027.844-.168 1.558-.316a34 34 0 0 1 1.614-.313c.504-.047 4.289-.957 5.16-1.238c1.387-.45 1.797-.629 2.672-1.215c.941-.64 1.203-.988 2.136-2.848c1.036-2.066 1.184-2.414 1.477-3.285c.45-1.386.422-1.914-.152-2.496c-.403-.398-1.266-.808-1.895-.898c-.472-.059-.535-.04-.765.21c-.141.15-.262.329-.262.391c0 .09-.16.528-.61 1.606c-.043.11-.132.379-.203.597c-.058.223-.18.532-.25.7c-.129.28-.14.23-.09-.547c.051-.77.18-1.418.473-2.399c.051-.187.121-.507.149-.707l.05-.36l-1.043-.417c-1.085-.45-2.02-.84-2.558-1.082c-.184-.066-.633-.246-1.004-.387c-.383-.14-.844-.32-1.035-.41a24 24 0 0 0-1.055-.437c-.672-.262-3.02-1.059-5.02-1.688a458 458 0 0 0-4.011-1.21a36 36 0 0 1-1.406-.388c-.16-.043-.555-.152-.856-.23c-1.766-.488-2.226-.61-2.86-.79a26 26 0 0 0-1.054-.28c-.191-.047-.71-.168-1.152-.278c-.774-.191-4.016-.937-5.774-1.34l-1.254-.289c-.222-.05-.62-.129-.902-.18c-.273-.05-.844-.16-1.258-.25c-.41-.077-1.293-.25-1.957-.359c-.66-.117-1.453-.257-1.754-.308c-2.773-.5-2.96-.528-7.93-1.078c-3.062-.348-7.18-.641-8.183-.59c-.16 0-1.05.039-1.965.09M58.348 44.23c2.652.86 5.23 2.028 6.996 3.168c1.406.907 3.152 2.356 3.625 3.004l.199.27l-.379-.149c-.21-.09-.652-.28-.984-.441c-1.766-.82-1.957-.887-1.957-.707c0 .047.41.707.902 1.445c.504.75.902 1.41.902 1.47c0 .05-.187-.032-.422-.192c-.902-.618-3.02-1.508-3.14-1.328c-.031.05.62.878 1.457 1.847c.82.969 1.504 1.797 1.504 1.86c0 .148-.16.128-.922-.153c-.785-.277-.984-.308-.984-.117c0 .129 1.695 2.414 2.367 3.203c.191.219.343.43.343.48c0 .239-2.351-1.288-4.015-2.605c-2.38-1.898-4.68-4.445-5.89-6.55c-.997-1.72-1.337-2.645-1.337-3.665c0-.597.028-.718.25-.93c.13-.136.293-.25.352-.25s.562.153 1.133.34m31.691 3.555c.961.172 2.277.399 2.91.512c.633.11 1.406.238 1.707.289c.301.059.73.137.953.187c.22.051.653.141.954.211c.992.22 1.234.27 2.859.649c1.746.41 2.129.488 2.66.597c.453.09.902.262.902.34c0 .032-.328.223-.73.43c-.824.41-.996.441-4.387.57c-2.308.098-3.543.07-4.668-.11c-2.27-.35-3.441-.987-4.355-2.366c-.32-.469-.531-.61-1.266-.797c-.27-.082-.683-.192-.902-.262c-.223-.07-.602-.18-.844-.25c-.723-.187-.312-.297 1.145-.297c1.003 0 1.707.067 3.062.297m12.074 13.95a.54.54 0 0 1-.25 0c-.07-.032-.02-.051.121-.051c.137 0 .188.02.13.05zm-.433.117c0 .05-.117.12-.27.152c-.312.078-1.535.43-1.937.558c-.141.051-.594.192-1.004.31c-1.035.3-3.543 1.116-4.215 1.378c-1.266.48-4.238 2.055-4.656 2.477c-.625.609-.817 1.265-.723 2.523c.027.531.098 1.2.16 1.488c.121.63.05.801-.191.489c-.242-.309-.754-1.426-.903-1.977c-.082-.246-.171-.578-.222-.738c-.18-.567-.11-1.239.172-1.645c.379-.582 1.746-1.508 3.351-2.277c.762-.371 2.98-1.13 5.02-1.727c.41-.12.863-.261 1.004-.3c1.445-.489 4.414-.958 4.414-.711m-31.746.671c-.032.028-.121.04-.192.008c-.082-.027-.05-.058.059-.058c.113-.012.172.02.133.05m0 0"></path> <path fill="#850000" d="M48.883 81.832v6.988h5c3.754 0 5.027-.03 5.117-.12c.152-.15.184-13.856.031-13.856c-.05 0-.12.078-.152.168c-.04.09-1.133 1.797-2.438 3.793c-2.066 3.156-2.64 3.925-2.64 3.535c0-.07-3.422-5.41-4.297-6.7a4 4 0 0 1-.309-.527c-.082-.152-.18-.27-.23-.27c-.043 0-.082 3.145-.082 6.989m0 0"></path> </svg> },
  jwt: { type: "svg", node: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 128 128"><path fill="#546e7a" d="m56.96 90.139l8.747-9.163l8.741 9.163v37.76H56.96z"></path><path fill="#f50057" d="m42.936 81.01l12.461-2.269l1.691 12.55l-22.195 30.552l-14.149-10.286Z"></path><path fill="#d500f9" d="m36.968 65.376l11.41 5.488l-6.007 11.147L6.456 93.68L1.053 77.045Z"></path><path fill="#29b6f6" d="m41.32 49.227l6.005 11.146l-11.41 5.491L0 54.192l5.405-16.637Z"></path><path fill="#00e5ff" d="m54.333 38.717l-1.69 12.55l-12.462-2.27l-22.194-30.552l14.152-10.28z"></path><path fill="#546e7a" d="m71.04 37.861l-8.747 9.163l-8.741-9.163V.101h17.49z"></path><path fill="#f50057" d="m85.059 46.992l-12.454 2.272l-1.693-12.552L93.104 6.16l14.152 10.283Z"></path><path fill="#d500f9" d="m91.037 62.621l-11.413-5.488l6.005-11.149l35.915-11.667l5.403 16.635z"></path><path fill="#29b6f6" d="m86.68 78.773l-6.005-11.146l11.41-5.486L128 73.808l-5.405 16.637Z"></path><path fill="#00e5ff" d="m73.667 89.283l1.693-12.55l12.459 2.27l22.194 30.552l-14.152 10.28z"></path></svg>, },
  zustand: { type: "icon", node: FaUserShield, color: "#ff7a00" },
  figma: { type: "asset", src: FigmaIcon, alt: "Figma" },
  api: { type: "asset", src: apiIcon, alt: "Api" },
  "rest api": { type: "svg", node: <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 20 20"><path fill="currentColor" d="M16 13c-1.3 0-2.4.8-2.8 2H9c0-.7-.2-1.3-.5-1.8l7.1-7.3c.3 0 .6.1.9.1C17.9 6 19 4.9 19 3.5S17.9 1 16.5 1S14 2.1 14 3.5c0 .3.1.7.2 1l-7 7.2c-.6-.5-1.4-.7-2.2-.7V6.8C6.2 6.4 7 5.3 7 4c0-1.7-1.3-3-3-3S1 2.3 1 4c0 1.3.8 2.4 2 2.8v4.7c-1.2.7-2 2-2 3.4c0 2.2 1.8 4 4 4c1.5 0 2.8-.8 3.4-2h4.7c.4 1.1 1.5 2 2.8 2c1.6 0 3-1.3 3-3C19 14.3 17.6 13 16 13"></path></svg>, color: "#47A248" },
  firebase: { type: "asset", src: FirebaseIcon, alt: "Firebase" },
  mongodb: { type: "icon", node: SiMongodb, color: "#47A248" },
  postgresql: { type: "icon", node: SiPrisma, color: "#0EA5E9" },
  bcrypt: { type: "icon", node: TbPasswordMobilePhone, color: "#7c3aed" },
  authentication: { type: "icon", node: FaUserShield, color: "#dc2626" },
  aos: { type: "asset", src: AosIcon, alt: "AOS" },
  cloudinary: { type: "icon", node: SiCloudinary, color: "#0f52ba" },
  "socket.io": { type: "icon", node: SiSocketdotio, color: "#111827" },
  "react-router": { type: "asset", src: reactRouterIcon, alt: "React-Router" },
  axios: { type: "icon", node: SiAxios, color: "#5A29E4" },
  stripe: { type: "icon", node: SiStripe, color: "#635BFF" },
  express: { type: "icon", node: SiExpress, color: "#000000" },
  nodejs: { type: "icon", node: SiNodedotjs, color: "#68A063" },
  prisma: { type: "icon", node: SiPrisma, color: "#0F172A" },
  framer: { type: "icon", node: MdOutlineAnimation, color: "#0055FF" },
  gsap: { type: "icon", node: MdOutlineAnimation, color: "#88CE02" },
  bootstrap: { type: "asset", src: BootstrapIcon, alt: "Bootstrap" },
  sass: { type: "icon", node: SiSass, color: "#CF649A" },
  graphql: { type: "icon", node: SiGraphql, color: "#E10098" },
  vite: { type: "icon", node: SiVite, color: "#646CFF" },
  github: { type: "icon", node: FaGithub, color: "#181717" },
};

const renderSvgNode = (node, props) => {
  if (!node) return null;

  if (typeof node === "string") {
    return <span dangerouslySetInnerHTML={{ __html: node }} {...props} />;
  }

  if (React.isValidElement(node)) {
    return React.cloneElement(node, props);
  }

  if (typeof node === "function") {
    const SvgComponent = node;
    return <SvgComponent {...props} />;
  }

  return null;
};

const TechIcon = ({ tech, className = "", title }) => {
  const entry = iconMap[String(tech || "").trim().toLowerCase()];

  if (!entry) {
    return (
      <span
        className={`inline-flex items-center justify-center rounded-full border border-Primary/10 bg-white/70 text-[10px] font-semibold uppercase text-Primary/60 ${className}`}
        title={title || tech}
      >
        {String(tech || "").slice(0, 2)}
      </span>
    );
  }

  if (entry.type === "asset") {
    return <img src={entry.src} alt={entry.alt || tech} title={title || tech} className={`h-full w-full object-contain ${className}`} loading="lazy" />;
  }

  if (entry.type === "svg") {
    const sharedProps = {
      title: title || tech,
      "aria-label": title || tech,
      className,
      style: { color: entry.color },
    };

    return renderSvgNode(entry.node, sharedProps);
  }

  const Icon = entry.node;
  return (
    <Icon
      title={title || tech}
      aria-label={title || tech}
      className={className}
      style={{ color: entry.color }}
    />
  );
};

export default TechIcon;
