import Link from "next/link"
import {Github, Linkedin, House} from "react-bootstrap-icons"
export default function SideNav({path}) {
  return (
    <div
      className={`absolute invisible md:visible ${
        path ? "top-20 gap-14" : "top-7 gap-12 -left-1"
      }  w-20 h-screen text-sm flex-col items-center flex
  `}>
      <div className="hover:scale-110 spacing">
        {!path && (
          <Link
            className="rounded-full"
            href={"https://github.com/housseinsa"}
            target="_blank">
            <Github size={20} color="#729343" />
          </Link>
        )}
        {path && (
          <Link href={"/"}>
            <House size={20} color="#729343" />
          </Link>
        )}
      </div>
      {!path && (
        <div className="hover:scale-110 spacing rounded-full ">
          <Link href={"https://www.linkedin.com/in/husseinsa/"} target="_blank">
            <Linkedin size={20} color="#729343" />
          </Link>
        </div>
      )}
      <div className="w-0.5 h-1/2 bg-slate-800 rotate-180"></div>
    </div>
  )
}
