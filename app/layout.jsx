import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avnish kumar - Full Stack Web Developer",
  description:
    "I'm Avnish Kumar, a passionate and dedicated 4th-year Computer Science student at Gyan Ganga Institute of Technology and Sciences, Jabalpur. Avnish Kumar is a Full Stack web developer from Buxar, Bihar.",
  keywords: [
    "Avnish",
    "Avnish Kumar",
    "theavnishkumar",
    "the avnish kumar",
    "Avnish Kumar jabalpur",
    "Avnish Kumar buxar",
    "Avnish Kumar web developer",
    "Avnish Kumar full stack developer",
    "Avnish Kumar ggits",
    "Avnish buxar",
    "Avnish jabalpur",
  ],
  authors: [
    { name: "Avnish kumar" },
    { name: "Avnish Kumar", url: "https://theavnishkumar.in" },
  ],
  creator: "Avnish Kumar",
  publisher: "Avnish Kumar",
  category: "technology",
  metadataBase: new URL("https://theavnishkumar.in"),
  formatDetection: {
    email: true,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Avnish Kumar",
    description:
      "I'm Avnish Kumar, a passionate and dedicated 4th-year Computer Science student at Gyan Ganga Institute of Technology and Sciences, Jabalpur.",
    url: "https://theavnsihkumar.in",
    siteName: "Avnish Kumar",
    images: [
      {
        url: "/avnishkumar/avnish.jpg",
        width: 600,
        height: 600,
      },
      {
        url: "/avnishkumar/avnishkumar.jpg",
        width: 500,
        height: 600,
      },
      // {
      //   url: 'https://nextjs.org/og-alt.png', // Must be an absolute URL
      //   width: 1800,
      //   height: 1600,
      //   alt: 'My custom alt',
      // },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/shortcut-icon.png",
    apple: "/apple-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Avnish Kumar",
    description:
      "I'm Avnish Kumar, a passionate and dedicated 4th-year Computer Science student at Gyan Ganga Institute of Technology and Sciences, Jabalpur.",
    siteId: "",
    creator: "@theavnishkumar",
    creatorId: "@theavnishkumar",
    images: ["/avnishkumar/avnish.jpg"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
    // other: {
    //   me: ['my-email', 'my-link'],
    // },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-small bg-fixed bg-cover bg-center h-screen`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
