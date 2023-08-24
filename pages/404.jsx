import HeaderAnimate from "./Components/HeaderAnimate"
import {Animate} from "../Animate/Animate"
import {useRouter} from "next/router"
import SideNav from "./Components/SideNav"
function NotFound() {
  const {pathname} = useRouter()
  return (
    <Animate>
      <SideNav path={true} />
      <main>
        <div className="gap-2 mx-4 justify-between flex min-h-H75 ">
          <div className="place-self-center">
            <HeaderAnimate>
              <h1 className="notFound text-7xl lg:text-9xl ">404.</h1>
            </HeaderAnimate>
            <div className="max-w-md my-2">
              <p>
                Page Not found, Sorry the page your looking for does not exits.
              </p>
            </div>
          </div>
        </div>
      </main>
    </Animate>
  )
}
export default NotFound
