import "bootstrap/dist/css/bootstrap.min.css";
import "../../public/css/all.min.css";
import "../../public/css/sharp-solid.min.css";
import "../../public/css/fontawesome.min.css";
import "../../public/css/animate.css";
import "../../public/css/boxicons.min.css";
import "../../public/css/flaticon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/bundle";
import "react-toastify/dist/ReactToastify.css";
import "../../public/css/style.css";
import "../../public/css/responsive.css";
import { Providers } from "@/redux/provider";
import { ToastContainer } from "react-toastify";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
          <SpeedInsights />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
